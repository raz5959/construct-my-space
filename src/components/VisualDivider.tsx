import traderMonitor from "@/assets/trader-monitor.png";

const VisualDivider = () => (
  <section className="visual-divider-section">
    <div className="max-w-site mx-auto px-5 md:px-7">
      <div className="visual-divider">
        <img src={traderMonitor} alt="Trader at monitor — 0DTE LAB" loading="lazy" />
      </div>
    </div>
  </section>
);

export default VisualDivider;
