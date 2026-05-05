import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const FinalCTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast({ title: "שגיאה", description: "נא למלא את כל השדות", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("leads").insert({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || null,
    });
    setLoading(false);
    if (error) return toast({ title: "שגיאה", description: "נסו שוב", variant: "destructive" });
    setDone(true);
    toast({ title: "נשלח ✓" });
  };

  return (
    <section
      className="py-16 md:py-24 border-t border-border"
      style={{ background: "radial-gradient(ellipse at 50% 0%, hsl(var(--primary) / 0.08), transparent 60%)" }}
    >
      <div className="max-w-site mx-auto px-5 md:px-7">
        <div className="bg-gradient-to-b from-card to-bg-2 border border-border rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.02) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, #000 30%, transparent 70%)",
              maskImage: "radial-gradient(ellipse at 50% 50%, #000 30%, transparent 70%)",
            }}
          />
          <span className="relative inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.22em] uppercase text-muted-foreground px-4 py-2 border border-primary rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-primary glow-primary" />
            0DTE LAB
            <span className="accent-text mr-1.5">FREE ACCESS</span>
          </span>
          <h2 className="relative text-[34px] md:text-[54px] font-extrabold leading-[1.1] mb-5 tracking-tight text-balance">
            אם אתה מרגיש שהמסחר שלך
            <br />
            צריך יותר <em className="not-italic accent-text">סדר —</em> זה המקום להתחיל.
          </h2>
          <p className="relative text-[17px] text-muted-foreground max-w-[560px] mx-auto mb-9 leading-[1.7]">
            השאירו פרטים. תקבלו את הקורס לאימייל. בלי לחץ.
          </p>

          {done ? (
            <p className="relative text-primary text-lg font-bold">נשלח בהצלחה ✓</p>
          ) : (
            <form onSubmit={submit} className="relative grid md:grid-cols-[1fr_1fr_1fr_auto] gap-2.5 max-w-[840px] mx-auto">
              <input
                type="text"
                placeholder="שם מלא"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-4 bg-bg-2 border border-line-2 rounded-lg text-foreground text-sm focus:outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="אימייל"
                dir="ltr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-4 bg-bg-2 border border-line-2 rounded-lg text-foreground text-sm focus:outline-none focus:border-primary"
              />
              <input
                type="tel"
                placeholder="טלפון / וואטסאפ"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="p-4 bg-bg-2 border border-line-2 rounded-lg text-foreground text-sm focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-primary text-primary-foreground px-7 rounded-lg font-bold text-sm transition-all hover:shadow-[0_0_0_4px_rgba(61,240,168,0.18)] disabled:opacity-60"
              >
                {loading ? "..." : "קבל גישה ←"}
              </button>
            </form>
          )}

          <div className="relative text-xs text-muted mt-5 font-mono tracking-wide">
            תוכן לימודי בלבד <span className="mx-1.5 text-line-2">·</span> אין הבטחה לתוצאות <span className="mx-1.5 text-line-2">·</span> ללא התחייבות
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
