import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import StockCard from "@/components/StockCard";
import GenerationLoader from "@/components/GenerationLoader";
import ReportView from "@/components/ReportView";
import {
  STOCKS,
  STOCK_INDICATORS,
  COMMENTARIES,
  STOCK_CHART_DATA,
  type GeneratedReport,
} from "@/data/stockData";

type Phase = "select" | "generating" | "report";

const Index = () => {
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [phase, setPhase] = useState<Phase>("select");
  const [genStep, setGenStep] = useState(0);
  const [report, setReport] = useState<GeneratedReport | null>(null);

  const handleGenerate = useCallback(() => {
    if (!selectedSymbol) return;
    setPhase("generating");
    setGenStep(0);

    // Simulate multi-step generation
    setTimeout(() => setGenStep(1), 1200);
    setTimeout(() => setGenStep(2), 2800);
    setTimeout(() => {
      const stock = STOCKS.find((s) => s.symbol === selectedSymbol)!;
      const indicators = STOCK_INDICATORS[selectedSymbol];
      const { headline, commentary } = COMMENTARIES[selectedSymbol];
      const chartData = STOCK_CHART_DATA[selectedSymbol];

      setReport({
        stock,
        indicators,
        commentary,
        headline,
        chartData,
        generatedAt: new Date().toLocaleDateString("en-PK", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
      setPhase("report");
    }, 4200);
  }, [selectedSymbol]);

  const handleReset = () => {
    setPhase("select");
    setSelectedSymbol(null);
    setReport(null);
  };

  return (
    <div className="min-h-screen bg-background grid-pattern">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="text-sm font-bold text-foreground tracking-tight">PSX Analyst</h1>
              <p className="text-[10px] text-muted-foreground -mt-0.5">Automated Technical Reports</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-bullish animate-pulse-glow" />
            Market Open
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {phase === "select" && (
            <motion.div
              key="select"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Generate Technical Report
                </h2>
                <p className="text-muted-foreground">
                  Select a stock to generate a professional analyst report with AI-powered commentary.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
                {STOCKS.map((stock) => (
                  <StockCard
                    key={stock.symbol}
                    stock={stock}
                    selected={selectedSymbol === stock.symbol}
                    onClick={() => setSelectedSymbol(stock.symbol)}
                  />
                ))}
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  disabled={!selectedSymbol}
                  onClick={handleGenerate}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary disabled:opacity-40 disabled:shadow-none px-8"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Generate Report
                  {selectedSymbol && (
                    <span className="ml-2 font-mono text-xs opacity-80">
                      — {selectedSymbol}
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
          )}

          {phase === "generating" && (
            <motion.div
              key="generating"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-md mx-auto"
            >
              <GenerationLoader currentStep={genStep} />
            </motion.div>
          )}

          {phase === "report" && report && (
            <motion.div
              key="report"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-5xl mx-auto"
            >
              <ReportView report={report} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
