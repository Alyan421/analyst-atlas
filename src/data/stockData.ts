export interface StockData {
  symbol: string;
  name: string;
  sector: string;
  currentPrice: number;
  change: number;
  changePercent: number;
  volume: string;
  high52w: number;
  low52w: number;
  marketCap: string;
}

export interface TechnicalIndicators {
  rsi14: number;
  sma9: number;
  sma30: number;
  support: number;
  resistance: number;
  trend: "Bullish" | "Bearish" | "Neutral";
  signal: string;
  macdSignal: "Buy" | "Sell" | "Hold";
}

export interface OHLCVData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface GeneratedReport {
  stock: StockData;
  indicators: TechnicalIndicators;
  commentary: string;
  headline: string;
  chartData: OHLCVData[];
  generatedAt: string;
}

export const STOCKS: StockData[] = [
  { symbol: "OGDC", name: "Oil & Gas Development Company", sector: "Energy", currentPrice: 118.45, change: -2.30, changePercent: -1.91, volume: "12.4M", high52w: 145.00, low52w: 98.50, marketCap: "509B" },
  { symbol: "PSO", name: "Pakistan State Oil", sector: "Energy", currentPrice: 224.80, change: 3.15, changePercent: 1.42, volume: "3.2M", high52w: 260.00, low52w: 180.00, marketCap: "83B" },
  { symbol: "TRG", name: "TRG Pakistan Ltd", sector: "Technology", currentPrice: 85.20, change: -0.45, changePercent: -0.53, volume: "8.7M", high52w: 120.00, low52w: 62.00, marketCap: "47B" },
  { symbol: "SYS", name: "Systems Limited", sector: "Technology", currentPrice: 412.50, change: 8.70, changePercent: 2.15, volume: "1.8M", high52w: 480.00, low52w: 310.00, marketCap: "73B" },
  { symbol: "LUCK", name: "Lucky Cement", sector: "Cement", currentPrice: 678.30, change: -5.20, changePercent: -0.76, volume: "0.9M", high52w: 750.00, low52w: 550.00, marketCap: "219B" },
  { symbol: "HBL", name: "Habib Bank Limited", sector: "Banking", currentPrice: 92.10, change: 1.05, changePercent: 1.15, volume: "6.1M", high52w: 110.00, low52w: 70.00, marketCap: "135B" },
  { symbol: "ENGRO", name: "Engro Corporation", sector: "Conglomerate", currentPrice: 285.60, change: -1.80, changePercent: -0.63, volume: "2.3M", high52w: 340.00, low52w: 230.00, marketCap: "165B" },
];

export const STOCK_INDICATORS: Record<string, TechnicalIndicators> = {
  OGDC: { rsi14: 34, sma9: 121.2, sma30: 128.5, support: 115.0, resistance: 130.0, trend: "Bearish", signal: "Testing critical support zone", macdSignal: "Sell" },
  PSO: { rsi14: 62, sma9: 220.5, sma30: 215.3, support: 210.0, resistance: 240.0, trend: "Bullish", signal: "Momentum building above SMA", macdSignal: "Buy" },
  TRG: { rsi14: 42, sma9: 87.1, sma30: 92.4, support: 78.0, resistance: 95.0, trend: "Bearish", signal: "Below key moving averages", macdSignal: "Hold" },
  SYS: { rsi14: 71, sma9: 405.0, sma30: 390.0, support: 385.0, resistance: 440.0, trend: "Bullish", signal: "Entering overbought territory", macdSignal: "Buy" },
  LUCK: { rsi14: 48, sma9: 682.0, sma30: 690.5, support: 650.0, resistance: 720.0, trend: "Neutral", signal: "Consolidating in range", macdSignal: "Hold" },
  HBL: { rsi14: 58, sma9: 90.5, sma30: 88.0, support: 85.0, resistance: 100.0, trend: "Bullish", signal: "Gradual uptrend intact", macdSignal: "Buy" },
  ENGRO: { rsi14: 44, sma9: 288.0, sma30: 295.0, support: 270.0, resistance: 310.0, trend: "Bearish", signal: "Momentum remains fragile", macdSignal: "Sell" },
};

export const COMMENTARIES: Record<string, { headline: string; commentary: string }> = {
  OGDC: {
    headline: "OGDC: Bearish Shift as Key Supports Give Way",
    commentary: "OGDC continues to test critical support at PKR 115, with momentum indicators suggesting further downside risk. The RSI at 34 reflects oversold conditions, yet the inability to reclaim the 30-day SMA at 128.5 signals persistent selling pressure. Volume has remained elevated during the decline, confirming bearish conviction. We advise caution — a decisive break below 115 could accelerate losses towards 108. Buy-on-dips traders should wait for RSI divergence and a close above 121 before initiating positions.",
  },
  PSO: {
    headline: "PSO: Bulls Regain Control Above Moving Averages",
    commentary: "PSO has demonstrated renewed strength, reclaiming both the 9-day and 30-day SMAs with conviction. The RSI at 62 indicates healthy bullish momentum without yet entering overbought territory. Support at 210 remains well-defended, and a sustained close above 225 could trigger a rally towards the 240 resistance zone. Volume patterns confirm institutional accumulation. We maintain a constructive outlook with a near-term target of 240.",
  },
  TRG: {
    headline: "TRG: Trading Below Key Averages, Caution Warranted",
    commentary: "TRG remains under pressure, trading below both the 9-day and 30-day SMAs. The RSI at 42 suggests neither oversold nor poised for recovery. The support zone at 78 is the critical level to watch — a breach would signal a deeper correction towards 70. The tech sector headwinds continue to weigh on sentiment. We recommend a hold stance until a clear reversal pattern emerges above the 92 resistance level.",
  },
  SYS: {
    headline: "SYS: Strong Rally Pushes Into Overbought Zone",
    commentary: "Systems Limited continues its impressive run, with the RSI now at 71 — entering overbought territory. Both SMAs are trending upward, confirming strong bullish momentum. However, traders should exercise caution at current levels as profit-taking could emerge near the 440 resistance. The fundamental story remains compelling, but technically, a pullback to the 405 support would offer a healthier entry. We recommend partial profit booking.",
  },
  LUCK: {
    headline: "LUCK: Range-Bound Consolidation Continues",
    commentary: "Lucky Cement remains in a well-defined consolidation range between 650 and 720. The RSI at 48 and price oscillating near both SMAs suggest indecision. A breakout above 720 on volume would signal the start of the next leg higher, while a break below 650 would tilt the bias bearish. Until then, range-trading strategies with tight stops remain optimal. The cement sector awaits clarity on infrastructure spending for directional cues.",
  },
  HBL: {
    headline: "HBL: Gradual Uptrend Intact, Banking Sector Favoured",
    commentary: "HBL maintains its gradual uptrend, trading above both short and medium-term moving averages. The RSI at 58 indicates room for further upside before hitting overbought levels. Support at 85 has held multiple tests, reinforcing buyer confidence. The banking sector continues to benefit from the interest rate environment. A close above 95 would open the path to test the 100 psychological barrier. We maintain a buy recommendation.",
  },
  ENGRO: {
    headline: "ENGRO: Momentum Fragile Despite Conglomerate Strength",
    commentary: "Engro Corporation trades below its 30-day SMA, with the RSI at 44 reflecting subdued momentum. The support at 270 is critical — any violation could trigger a retest of the 250 level. Despite the broader conglomerate's diversified strength, the stock struggles with sector rotation headwinds. We suggest accumulation only below 275 with a strict stop-loss at 265. Recovery requires a sustained move above 295 on convincing volume.",
  },
};

// Generate mock OHLCV data
function generateOHLCV(basePrice: number, days: number = 60): OHLCVData[] {
  const data: OHLCVData[] = [];
  let price = basePrice * 1.05;
  const now = new Date();

  for (let i = days; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    if (date.getDay() === 0 || date.getDay() === 6) continue;

    const volatility = 0.02;
    const change = (Math.random() - 0.48) * volatility * price;
    const open = price;
    const close = price + change;
    const high = Math.max(open, close) + Math.random() * volatility * price * 0.5;
    const low = Math.min(open, close) - Math.random() * volatility * price * 0.5;
    const volume = Math.floor(1000000 + Math.random() * 5000000);

    data.push({
      date: date.toISOString().split("T")[0],
      open: +open.toFixed(2),
      high: +high.toFixed(2),
      low: +low.toFixed(2),
      close: +close.toFixed(2),
      volume,
    });

    price = close;
  }

  return data;
}

export const STOCK_CHART_DATA: Record<string, OHLCVData[]> = {
  OGDC: generateOHLCV(118.45),
  PSO: generateOHLCV(224.80),
  TRG: generateOHLCV(85.20),
  SYS: generateOHLCV(412.50),
  LUCK: generateOHLCV(678.30),
  HBL: generateOHLCV(92.10),
  ENGRO: generateOHLCV(285.60),
};
