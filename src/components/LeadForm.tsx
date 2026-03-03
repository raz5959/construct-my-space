import { useState } from "react";
import { motion } from "framer-motion";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(true);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
      className="mx-5 mb-7"
    >
      <div className="bg-card border border-primary/10 rounded-2xl p-5 relative overflow-hidden">
        {/* Gold top bar */}
        <div className="absolute top-0 right-0 left-0 h-[3px] gold-gradient-bg" />

        {/* Header */}
        <div className="text-center mb-4">
          <h3 className="font-heading text-[17px] font-extrabold mb-1">
            🎯 קבלו גישה לשיעור בחינם
          </h3>
          <p className="text-xs text-muted-foreground">
            השאירו פרטים וההדרכה תישלח מיד
          </p>
        </div>

        {/* Fields */}
        <div className="mb-2.5">
          <label className="block text-[10px] font-medium text-muted mb-1">שם מלא</label>
          <input
            type="text"
            placeholder="איך קוראים לכם?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2.5 bg-foreground/[0.03] border border-foreground/[0.08] rounded-lg text-foreground text-sm placeholder:text-muted font-body"
          />
        </div>

        <div className="grid grid-cols-2 gap-2 mb-2.5">
          <div>
            <label className="block text-[10px] font-medium text-muted mb-1">טלפון</label>
            <input
              type="tel"
              placeholder="050-000-0000"
              dir="ltr"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 py-2.5 bg-foreground/[0.03] border border-foreground/[0.08] rounded-lg text-foreground text-sm placeholder:text-muted font-body"
            />
          </div>
          <div>
            <label className="block text-[10px] font-medium text-muted mb-1">גיל</label>
            <select
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2.5 bg-foreground/[0.03] border border-foreground/[0.08] rounded-lg text-foreground text-sm font-body"
            >
              <option value="" className="bg-card">בחרו</option>
              <option value="18-25" className="bg-card">18-25</option>
              <option value="26-35" className="bg-card">26-35</option>
              <option value="36-45" className="bg-card">36-45</option>
              <option value="46+" className="bg-card">46+</option>
            </select>
          </div>
        </div>

        <div className="mb-2.5">
          <label className="block text-[10px] font-medium text-muted mb-1">אימייל</label>
          <input
            type="email"
            placeholder="your@email.com"
            dir="ltr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 bg-foreground/[0.03] border border-foreground/[0.08] rounded-lg text-foreground text-sm placeholder:text-muted font-body"
          />
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-1.5 my-2.5 text-[10px] text-muted leading-relaxed">
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
        <button className="shimmer w-full py-3.5 bg-success rounded-xl font-heading text-base font-extrabold text-success-foreground mt-1">
          שלחו לי את ההדרכה בחינם!
        </button>

        <p className="text-center mt-2.5 text-[10px] text-muted">
          🔒 הפרטים שלכם מאובטחים
        </p>
        <div className="flex items-center justify-center gap-1 mt-1.5 text-[10px] text-success font-semibold">
          💬 ההדרכה תישלח גם לוואטסאפ
        </div>
        <p className="text-center mt-2.5 text-[11px] text-destructive font-semibold">
          🔥 מוגבל ל-200 הנרשמים הראשונים
        </p>
      </div>
    </motion.section>
  );
};

export default LeadForm;
