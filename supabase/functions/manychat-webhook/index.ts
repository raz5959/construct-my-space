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

    // Format phone: remove dashes/spaces, remove leading 0, add country code
    let formattedPhone = phone.replace(/[-\s]/g, '');
    if (formattedPhone.startsWith('0')) {
      formattedPhone = '+972' + formattedPhone.substring(1);
    } else if (!formattedPhone.startsWith('+')) {
      formattedPhone = '+972' + formattedPhone;
    }

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${MANYCHAT_API_KEY}`,
    };

    // Step 1: Create subscriber (or get "already exists")
    const createRes = await fetch('https://api.manychat.com/fb/subscriber/createSubscriber', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        whatsapp_phone: formattedPhone,
        first_name: name,
        consent: { whatsapp: "opt_in" },
      }),
    });

    const createText = await createRes.text();
    let createData;
    try { createData = JSON.parse(createText); } catch {
      throw new Error(`ManyChat non-JSON [${createRes.status}]: ${createText.substring(0, 200)}`);
    }

    console.log('createSubscriber response:', createRes.status, JSON.stringify(createData));

    // Step 2: Get subscriber_id
    let subscriberId: string | null = null;

    if (createRes.ok && createData?.data?.id) {
      // New subscriber created
      subscriberId = String(createData.data.id);
    } else {
      // Subscriber already exists — try getInfoByPhone
      const phoneWithout = formattedPhone.replace('+', '');
      const infoRes = await fetch(
        `https://api.manychat.com/fb/subscriber/getInfoByPhone?phone=${encodeURIComponent(formattedPhone)}`,
        { headers }
      );
      const infoText = await infoRes.text();
      console.log('getInfoByPhone response:', infoRes.status, infoText.substring(0, 300));
      
      try {
        const infoData = JSON.parse(infoText);
        subscriberId = infoData?.data?.id ? String(infoData.data.id) : null;
      } catch {
        console.error('getInfoByPhone parse failed');
      }
    }

    console.log('subscriberId:', subscriberId);

    // Step 3: Send Flow
    if (subscriberId) {
      const flowRes = await fetch('https://api.manychat.com/fb/sending/sendFlow', {
        method: 'POST',
        headers,
        body: JSON.stringify({
          subscriber_id: subscriberId,
          flow_ns: 'content20260309090937_600499',
        }),
      });
      const flowText = await flowRes.text();
      console.log('sendFlow response:', flowRes.status, flowText);
    } else {
      console.log('No subscriber_id found, skipping sendFlow');
    }

    return new Response(JSON.stringify({ success: true, data: createData }), {
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
