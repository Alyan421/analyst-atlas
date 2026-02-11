import { motion, AnimatePresence } from "framer-motion";
import { Database, LineChart, FileText, Check, Loader2 } from "lucide-react";

interface GenerationStep {
  label: string;
  icon: React.ReactNode;
}

const STEPS: GenerationStep[] = [
  { label: "Fetching Market Data", icon: <Database className="w-5 h-5" /> },
  { label: "Analyzing Trends & Indicators", icon: <LineChart className="w-5 h-5" /> },
  { label: "Drafting Commentary", icon: <FileText className="w-5 h-5" /> },
];

interface GenerationLoaderProps {
  currentStep: number; // 0-2 in progress, 3 = done
}

const GenerationLoader = ({ currentStep }: GenerationLoaderProps) => {
  return (
    <div className="flex flex-col items-center gap-8 py-12">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative w-20 h-20 rounded-full border-2 border-primary/30 flex items-center justify-center"
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <span className="font-mono text-xl font-bold text-primary">
          {currentStep >= 3 ? "✓" : `${currentStep + 1}/3`}
        </span>
      </motion.div>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        {STEPS.map((step, i) => {
          const isActive = i === currentStep;
          const isDone = i < currentStep;

          return (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3"
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isDone
                    ? "bg-primary text-primary-foreground"
                    : isActive
                    ? "bg-primary/20 text-primary"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {isDone ? (
                  <Check className="w-4 h-4" />
                ) : isActive ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  step.icon
                )}
              </div>
              <span
                className={`text-sm font-medium transition-colors ${
                  isDone
                    ? "text-primary"
                    : isActive
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
                {isActive && (
                  <motion.span
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    ...
                  </motion.span>
                )}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GenerationLoader;
