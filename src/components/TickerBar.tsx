const tickers = [
  { symbol: "AAPL", price: "241.84", change: "+1.23%", up: true },
  { symbol: "TSLA", price: "378.12", change: "+3.67%", up: true },
  { symbol: "NVDA", price: "132.65", change: "-0.89%", up: false },
  { symbol: "AMZN", price: "225.74", change: "+0.45%", up: true },
  { symbol: "META", price: "612.30", change: "+2.11%", up: true },
];

const TickerBar = () => {
  const items = [...tickers, ...tickers];

  return (
    <div className="bg-secondary py-1.5 overflow-hidden border-b border-foreground/[0.03]">
      <div className="flex gap-6 ticker-scroll w-max" dir="ltr">
        {items.map((t, i) => (
          <div key={i} className="flex items-center gap-1 font-heading text-[10px] whitespace-nowrap">
            <span className="text-muted">{t.symbol}</span>
            <span className="text-muted-foreground">{t.price}</span>
            <span className={t.up ? "text-success" : "text-destructive"}>{t.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerBar;
