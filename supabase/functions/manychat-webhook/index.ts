import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const MANYCHAT_API_KEY = Deno.env.get('MANYCHAT_API_KEY');
    if (!MANYCHAT_API_KEY) {
      throw new Error('MANYCHAT_API_KEY is not configured');
    }

    const { name, phone } = await req.json();

    // Format phone: remove dashes/spaces, remove leading 0, add +972
    let formattedPhone = phone.replace(/[-\s]/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '+972' + formattedPhone.substring(1);
    } else if (!formattedPhone.startsWith('+')) {
      formattedPhone = '+972' + formattedPhone;
    }

    const response = await fetch('https://api.manychat.com/fb/subscriber/createSubscriber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MANYCHAT_API_KEY}`,
      },
      body: JSON.stringify({
        whatsapp_phone: formattedPhone,
        first_name: name,
        consent: { whatsapp: "opt_in" },
      }),
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      throw new Error(`ManyChat returned non-JSON [${response.status}]: ${responseText.substring(0, 200)}`);
    }

    // Extract subscriber_id — from successful create or from "already exists" error
    let subscriberId: string | null = null;

    if (response.ok && data?.data?.id) {
      subscriberId = String(data.data.id);
    } else if (!response.ok) {
      const msg = JSON.stringify(data);
      if (msg.includes('already exists')) {
        // Try findBySystemField to get subscriber_id
        try {
          const findRes = await fetch(
            `https://api.manychat.com/fb/subscriber/findBySystemField?field=whatsapp_phone&value=${encodeURIComponent(formattedPhone)}`,
            { headers: { 'Authorization': `Bearer ${MANYCHAT_API_KEY}` } }
          );
          const findText = await findRes.text();
          console.log('findBySystemField response:', findRes.status, findText.substring(0, 300));
          const findData = JSON.parse(findText);
          subscriberId = findData?.data?.id ? String(findData.data.id) : null;
        } catch (e) {
          console.error('findBySystemField failed:', e);
        }
      } else {
        throw new Error(`ManyChat API error [${response.status}]: ${msg}`);
      }
    }

    console.log('subscriberId:', subscriberId);

    // Send Flow to subscriber
    if (subscriberId) {
      const flowRes = await fetch('https://api.manychat.com/fb/sending/sendFlow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${MANYCHAT_API_KEY}`,
        },
        body: JSON.stringify({
          subscriber_id: subscriberId,
          flow_ns: 'content20260309090937_600499',
        }),
      });
      const flowData = await flowRes.json();
      console.log('sendFlow response:', JSON.stringify(flowData));

      if (!flowRes.ok) {
        console.error(`sendFlow error [${flowRes.status}]:`, JSON.stringify(flowData));
      }
    }

    return new Response(JSON.stringify({ success: true, data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('ManyChat error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
