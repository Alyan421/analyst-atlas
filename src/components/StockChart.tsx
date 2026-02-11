import { useMemo } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import type { OHLCVData, TechnicalIndicators } from "@/data/stockData";

interface StockChartProps {
  data: OHLCVData[];
  indicators: TechnicalIndicators;
}

const StockChart = ({ data, indicators }: StockChartProps) => {
  const chartData = useMemo(() => {
    return data.slice(-30).map((d) => ({
      ...d,
      dateLabel: d.date.slice(5),
      color: d.close >= d.open ? "hsl(142, 60%, 45%)" : "hsl(0, 72%, 55%)",
      body: Math.abs(d.close - d.open),
      base: Math.min(d.open, d.close),
    }));
  }, [data]);

  return (
    <div className="w-full bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono text-sm font-semibold text-foreground">Price Action — Last 30 Sessions</h3>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-accent inline-block" /> SMA 9
          </span>
          <span className="flex items-center gap-1">
            <span className="w-3 h-0.5 bg-chart-volume inline-block" /> SMA 30
          </span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <ComposedChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
          <XAxis
            dataKey="dateLabel"
            tick={{ fontSize: 10, fill: "hsl(215, 12%, 50%)" }}
            tickLine={false}
            axisLine={{ stroke: "hsl(220, 14%, 18%)" }}
          />
          <YAxis
            domain={["auto", "auto"]}
            tick={{ fontSize: 10, fill: "hsl(215, 12%, 50%)" }}
            tickLine={false}
            axisLine={{ stroke: "hsl(220, 14%, 18%)" }}
          />
          <Tooltip
            contentStyle={{
              background: "hsl(220, 18%, 10%)",
              border: "1px solid hsl(220, 14%, 18%)",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "hsl(210, 20%, 92%)" }}
          />
          <ReferenceLine
            y={indicators.support}
            stroke="hsl(142, 60%, 45%)"
            strokeDasharray="6 3"
            label={{ value: "Support", fill: "hsl(142, 60%, 45%)", fontSize: 10, position: "right" }}
          />
          <ReferenceLine
            y={indicators.resistance}
            stroke="hsl(0, 72%, 55%)"
            strokeDasharray="6 3"
            label={{ value: "Resistance", fill: "hsl(0, 72%, 55%)", fontSize: 10, position: "right" }}
          />
          <Bar dataKey="volume" fill="hsl(210, 60%, 50%)" opacity={0.1} yAxisId="volume" />
          <Line type="monotone" dataKey="close" stroke="hsl(38, 90%, 55%)" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="high" stroke="hsl(142, 60%, 45%)" strokeWidth={1} dot={false} opacity={0.3} />
          <Line type="monotone" dataKey="low" stroke="hsl(0, 72%, 55%)" strokeWidth={1} dot={false} opacity={0.3} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
