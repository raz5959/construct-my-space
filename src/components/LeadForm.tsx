import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast({ title: "שגיאה", description: "נא למלא את כל השדות", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || null,
    });
    setIsSubmitting(false);
    if (error) {
      toast({ title: "שגיאה", description: "משהו השתבש, נסו שוב", variant: "destructive" });
      return;
    }
    setIsSubmitted(true);
    toast({ title: "נשלח ✓", description: "תקבלו את הקורס לאימייל בקרוב" });
  };

  return (
    <aside
      id="cta"
      className="bg-gradient-to-b from-card to-bg-2 border border-border rounded-2xl p-7 relative overflow-hidden"
    >
      {/* inner grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.018) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.018) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* card head */}
      <div className="flex justify-between items-center pb-4 border-b border-border font-mono text-[11px] text-muted tracking-[0.18em] uppercase relative z-10">
        <span>// LAB ACCESS</span>
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-primary glow-primary" />
          <span className="w-2 h-2 rounded-full bg-line-2" />
          <span className="w-2 h-2 rounded-full bg-line-2" />
        </div>
      </div>

      {isSubmitted ? (
        <div className="relative z-10 py-10 text-center">
          <div className="text-5xl mb-4">✓</div>
          <h3 className="text-xl font-bold mb-2 accent-text">נרשמת בהצלחה</h3>
          <p className="text-sm text-muted-foreground">תקבל את הקורס לאימייל בקרוב.</p>
        </div>
      ) : (
        <>
          <div className="text-[22px] font-bold mt-5 mb-1.5 relative z-10">קבלו גישה לקורס.</div>
          <p className="text-[13px] text-muted-foreground mb-5 relative z-10">
            השאירו פרטים — תקבלו את החומר ישירות לאימייל ולוואטסאפ.
          </p>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-3.5">
            <input
              type="text"
              placeholder="שם מלא"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3.5 bg-bg-2 border border-line-2 rounded-lg text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="אימייל"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3.5 bg-bg-2 border border-line-2 rounded-lg text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="tel"
              placeholder="טלפון / וואטסאפ"
              dir="ltr"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3.5 bg-bg-2 border border-line-2 rounded-lg text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-primary-foreground p-4 rounded-lg font-bold text-[15px] mt-2 transition-all hover:shadow-[0_0_0_4px_rgba(61,240,168,0.18)] disabled:opacity-60"
            >
              {isSubmitting ? "שולח..." : "אני רוצה לקבל את הקורס"}
            </button>
            <div className="text-[11px] text-muted text-center mt-3.5 font-mono tracking-wide leading-[1.7]">
              לא נשלח ספאם. ניתן להסיר בכל עת.
              <br />
              תוכן לימודי
            </div>
          </form>
        </>
      )}
    </aside>
  );
};

export default LeadForm;
