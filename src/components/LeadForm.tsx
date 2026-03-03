import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) {
      toast({ title: "שגיאה", description: "נא למלא שם וטלפון", variant: "destructive" });
      return;
    }
    if (!agreed) {
      toast({ title: "שגיאה", description: "נא לאשר את תנאי השירות", variant: "destructive" });
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
    toast({ title: "נשלח בהצלחה! 🎉", description: "ההדרכה תישלח אליכם בקרוב" });
  };

  if (isSubmitted) {
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mx-5 mb-7"
      >
        <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 text-center shadow-[0_0_40px_-10px_hsl(210_90%_55%/0.3)]">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="font-heading text-xl font-black mb-2 gold-gradient-text">תודה שנרשמתם!</h3>
          <p className="text-sm text-muted-foreground">ההדרכה תישלח אליכם בקרוב</p>
        </div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
      className="mx-5 mb-7"
    >
      <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_40px_-10px_hsl(210_90%_55%/0.3)]">
        {/* Gradient top bar */}
        <div className="absolute top-0 right-0 left-0 h-1 gold-gradient-bg" />
        
        {/* Corner glow accents */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />

        {/* Header */}
        <div className="text-center mb-5 relative">
          <h3 className="font-heading text-xl font-black mb-1.5 gold-gradient-text">
            קבלו גישה להדרכה בחינם!
          </h3>
          <p className="text-xs text-muted-foreground">
            השאירו פרטים וההדרכה תישלח מיד
          </p>
        </div>

        {/* Fields */}
        <div className="space-y-3 relative">
          <div>
            <label className="block text-[11px] font-semibold text-muted-foreground mb-1.5">שם מלא</label>
            <input
              type="text"
              placeholder="איך קוראים לכם?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-secondary/50 border border-foreground/30 rounded-xl text-foreground text-sm placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-foreground/60 focus:ring-1 focus:ring-foreground/20 transition-all"
            />
          </div>

          <div>
              <label className="block text-[11px] font-semibold text-muted-foreground mb-1.5">טלפון</label>
              <input
                type="tel"
                placeholder="050-000-0000"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/50 border border-foreground/30 rounded-xl text-foreground text-sm placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-foreground/60 focus:ring-1 focus:ring-foreground/20 transition-all"
              />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-muted-foreground mb-1.5">אימייל</label>
            <input
              type="email"
              placeholder="your@email.com"
              dir="ltr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-secondary/50 border border-foreground/30 rounded-xl text-foreground text-sm placeholder:text-muted-foreground/50 font-body focus:outline-none focus:border-foreground/60 focus:ring-1 focus:ring-foreground/20 transition-all"
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 my-3.5 text-[10px] text-muted-foreground leading-relaxed">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-3.5 h-3.5 accent-primary shrink-0 mt-0.5"
          />
          <label>
            אני מסכים/ה ל
            <a href="#" className="text-primary hover:underline">תנאי השירות</a>
          </label>
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="shimmer pulse-ring w-full py-4 gold-gradient-bg rounded-xl font-heading text-base font-black text-primary-foreground mt-1 tracking-wide disabled:opacity-60"
        >
          {isSubmitting ? "שולח..." : "שלחו לי את ההדרכה בחינם!"}
        </button>

        <div className="flex items-center justify-center gap-4 mt-4 text-[10px] text-muted-foreground">
          <span>🔒 מאובטח</span>
          <span className="w-px h-3 bg-border" />
          <span>💬 נשלח לוואטסאפ</span>
        </div>
        
        <p className="text-center mt-2.5 text-[11px] text-destructive font-bold">
          🔥 מוגבל ל-200 הנרשמים הראשונים
        </p>
      </div>
    </motion.section>
  );
};

export default LeadForm;
