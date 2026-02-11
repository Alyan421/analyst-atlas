import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { StockData } from "@/data/stockData";

interface StockCardProps {
  stock: StockData;
  selected: boolean;
  onClick: () => void;
}

const StockCard = ({ stock, selected, onClick }: StockCardProps) => {
  const isPositive = stock.change >= 0;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-4 rounded-lg border transition-all duration-200",
        "hover:border-primary/50 hover:glow-primary",
        selected
          ? "border-primary bg-primary/5 glow-primary"
          : "border-border bg-card"
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-mono font-semibold text-foreground">{stock.symbol}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
            {stock.sector}
          </span>
        </div>
        <div className={cn("flex items-center gap-1 text-sm font-mono", isPositive ? "text-bullish" : "text-bearish")}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {isPositive ? "+" : ""}{stock.changePercent.toFixed(2)}%
        </div>
      </div>
      <p className="text-xs text-muted-foreground truncate mb-2">{stock.name}</p>
      <div className="flex items-end justify-between">
        <span className="text-lg font-mono font-bold text-foreground">
          PKR {stock.currentPrice.toFixed(2)}
        </span>
        <span className="text-xs text-muted-foreground">Vol: {stock.volume}</span>
      </div>
    </button>
  );
};

export default StockCard;
