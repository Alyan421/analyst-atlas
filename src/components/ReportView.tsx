import { motion } from "framer-motion";
import type { GeneratedReport } from "@/data/stockData";
import StockChart from "./StockChart";
import IndicatorPanel from "./IndicatorPanel";
import { FileDown, Calendar, Building2, TrendingUp, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReportViewProps {
  report: GeneratedReport;
  onReset: () => void;
}

const ReportView = ({ report, onReset }: ReportViewProps) => {
  const isPositive = report.stock.change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Report Header */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              <span>{report.generatedAt}</span>
              <span className="px-1.5 py-0.5 bg-accent/10 text-accent rounded text-[10px] font-semibold uppercase tracking-wider">
                AI Generated
              </span>
            </div>
            <h1 className="text-xl font-bold text-foreground mb-1">{report.headline}</h1>
            <div className="flex items-center gap-3 text-sm">
              <span className="font-mono text-muted-foreground">{report.stock.symbol}</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-muted-foreground">{report.stock.name}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono font-bold text-foreground">
              PKR {report.stock.currentPrice.toFixed(2)}
            </div>
            <div className={`flex items-center justify-end gap-1 text-sm font-mono ${isPositive ? "text-bullish" : "text-bearish"}`}>
              {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {isPositive ? "+" : ""}{report.stock.change.toFixed(2)} ({isPositive ? "+" : ""}{report.stock.changePercent.toFixed(2)}%)
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 pt-4 border-t border-border">
          {[
            { label: "52W High", value: report.stock.high52w.toFixed(2) },
            { label: "52W Low", value: report.stock.low52w.toFixed(2) },
            { label: "Volume", value: report.stock.volume },
            { label: "Mkt Cap", value: `PKR ${report.stock.marketCap}` },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
              <div className="font-mono text-sm font-medium text-foreground">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart + Indicators */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <StockChart data={report.chartData} indicators={report.indicators} />
        </div>
        <div>
          <IndicatorPanel indicators={report.indicators} />
        </div>
      </div>

      {/* Commentary */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="w-4 h-4 text-accent" />
          <h3 className="font-mono text-sm font-semibold text-foreground">Analyst Commentary</h3>
        </div>
        <p className="text-sm leading-relaxed text-secondary-foreground">{report.commentary}</p>
        <p className="text-xs text-muted-foreground mt-4 italic">
          Disclaimer: This report is AI-generated for educational purposes only and does not constitute financial advice.
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={onReset}>
          ← Generate Another
        </Button>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <FileDown className="w-4 h-4 mr-2" />
          Export PDF
        </Button>
      </div>
    </motion.div>
  );
};

export default ReportView;
