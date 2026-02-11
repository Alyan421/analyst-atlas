import type { TechnicalIndicators } from "@/data/stockData";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface IndicatorPanelProps {
  indicators: TechnicalIndicators;
}

const IndicatorPanel = ({ indicators }: IndicatorPanelProps) => {
  const trendColor =
    indicators.trend === "Bullish"
      ? "text-bullish"
      : indicators.trend === "Bearish"
      ? "text-bearish"
      : "text-neutral-signal";

  const TrendIcon =
    indicators.trend === "Bullish"
      ? TrendingUp
      : indicators.trend === "Bearish"
      ? TrendingDown
      : Minus;

  const rsiColor =
    indicators.rsi14 > 70
      ? "text-bearish"
      : indicators.rsi14 < 30
      ? "text-bullish"
      : "text-foreground";

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h3 className="font-mono text-sm font-semibold text-foreground mb-4">Technical Indicators</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">Trend</span>
          <div className={`flex items-center gap-1.5 font-mono font-semibold ${trendColor}`}>
            <TrendIcon className="w-4 h-4" />
            {indicators.trend}
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">RSI (14)</span>
          <div className={`font-mono font-semibold ${rsiColor}`}>{indicators.rsi14}</div>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">SMA 9</span>
          <div className="font-mono text-foreground">{indicators.sma9.toFixed(1)}</div>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">SMA 30</span>
          <div className="font-mono text-foreground">{indicators.sma30.toFixed(1)}</div>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">Support</span>
          <div className="font-mono text-bullish">{indicators.support.toFixed(1)}</div>
        </div>
        <div className="space-y-1">
          <span className="text-xs text-muted-foreground">Resistance</span>
          <div className="font-mono text-bearish">{indicators.resistance.toFixed(1)}</div>
        </div>
        <div className="col-span-2 pt-2 border-t border-border">
          <span className="text-xs text-muted-foreground">MACD Signal</span>
          <div
            className={`font-mono font-semibold mt-1 ${
              indicators.macdSignal === "Buy"
                ? "text-bullish"
                : indicators.macdSignal === "Sell"
                ? "text-bearish"
                : "text-neutral-signal"
            }`}
          >
            {indicators.macdSignal}
          </div>
        </div>
        <div className="col-span-2 text-xs text-muted-foreground italic">
          {indicators.signal}
        </div>
      </div>
    </div>
  );
};

export default IndicatorPanel;
