declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
// import Content from "./pages/Content";
import Contact from "./pages/Contact";
import Tools from "./pages/Tools";
import NotFound from "./pages/NotFound";

// Text Tools
import WordCounter from "./pages/text-tools/WordCounter";
import RemoveDuplicates from "./pages/text-tools/RemoveDuplicates";
import CaseConverter from "./pages/text-tools/CaseConverter";
import TextSorter from "./pages/text-tools/TextSorter";
import TextReverser from "./pages/text-tools/TextReverser";
import SlugGenerator from "./pages/text-tools/SlugGenerator";
import FindReplace from "./pages/text-tools/FindReplace";
import PalindromeChecker from "./pages/text-tools/PalindromeChecker";
import RemoveSpecialChars from "./pages/text-tools/RemoveSpecialChars";
import TextLimiter from "./pages/text-tools/TextLimiter";

// Unit Converter Tools
import LengthConverter from "./pages/unit-tools/LengthConverter";
import WeightConverter from "./pages/unit-tools/WeightConverter";
import TemperatureConverter from "./pages/unit-tools/TemperatureConverter";
import TimeConverter from "./pages/unit-tools/TimeConverter";
import SpeedConverter from "./pages/unit-tools/SpeedConverter";
import AreaConverter from "./pages/unit-tools/AreaConverter";
import VolumeConverter from "./pages/unit-tools/VolumeConverter";
import DataSizeConverter from "./pages/unit-tools/DataSizeConverter";

// Date & Time Tools
import AgeCalculator from "./pages/date-tools/AgeCalculator";
import DateDifference from "./pages/date-tools/DateDifference";
import Countdown from "./pages/date-tools/Countdown";
import WorkDays from "./pages/date-tools/WorkDays";
import BirthdayCountdown from "./pages/date-tools/BirthdayCountdown";
import LeapYear from "./pages/date-tools/LeapYear";
import WeekNumber from "./pages/date-tools/WeekNumber";

// Number Tools
import PercentageCalculator from "./pages/number-tools/PercentageCalculator";
import SimpleInterest from "./pages/number-tools/SimpleInterest";
import EMICalculator from "./pages/number-tools/EMICalculator";
import RomanConverter from "./pages/number-tools/RomanConverter";
import LCMHCFCalculator from "./pages/number-tools/LCMHCFCalculator";
import NumberToWords from "./pages/number-tools/NumberToWords";
import ScientificNotation from "./pages/number-tools/ScientificNotation";
import NumberBaseConverter from "./pages/number-tools/NumberBaseConverter";
import RoundingTool from "./pages/number-tools/RoundingTool";
import RandomGenerator from "./pages/number-tools/RandomGenerator";

// Math Tools
import BasicCalculator from "./pages/math-tools/BasicCalculator";
import PrimeChecker from "./pages/math-tools/PrimeChecker";
import Factorial from "./pages/math-tools/Factorial";
import MultiplicationTable from "./pages/math-tools/MultiplicationTable";
import QuadraticSolver from "./pages/math-tools/QuadraticSolver";
import PercentageChange from "./pages/math-tools/PercentageChange";
import TriangleArea from "./pages/math-tools/TriangleArea";
import CircleCalculator from "./pages/math-tools/CircleCalculator";
import ExponentLog from "./pages/math-tools/ExponentLog";
import StatisticsCalculator from "./pages/math-tools/StatisticsCalculator";

// Health Tools
import BMICalculator from "./pages/health-tools/BMICalculator";
import CalorieCalculator from "./pages/health-tools/CalorieCalculator";
import WaterIntake from "./pages/health-tools/WaterIntake";
import BodyFat from "./pages/health-tools/BodyFat";
import IdealWeight from "./pages/health-tools/IdealWeight";
import BMRCalculator from "./pages/health-tools/BMRCalculator";
import MacroSplitter from "./pages/health-tools/MacroSplitter";

const queryClient = new QueryClient();

const GA_MEASUREMENT_ID = "G-495704318";

function loadGAScript() {
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  function gtag(...args: any[]) { window.dataLayer.push(args); }
  window.gtag = gtag;
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false });
  
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

function GATracker() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) {
      loadGAScript();
    }
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <GATracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              {/* <Route path="/content" element={<Content />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/tools" element={<Tools />} />
              
              {/* Text Tools Routes */}
              <Route path="/text-tools/word-counter" element={<WordCounter />} />
              <Route path="/text-tools/remove-duplicates" element={<RemoveDuplicates />} />
              <Route path="/text-tools/case-converter" element={<CaseConverter />} />
              <Route path="/text-tools/text-sorter" element={<TextSorter />} />
              <Route path="/text-tools/text-reverser" element={<TextReverser />} />
              <Route path="/text-tools/slug-generator" element={<SlugGenerator />} />
              <Route path="/text-tools/find-replace" element={<FindReplace />} />
              <Route path="/text-tools/palindrome-checker" element={<PalindromeChecker />} />
              <Route path="/text-tools/remove-special-chars" element={<RemoveSpecialChars />} />
              <Route path="/text-tools/text-limiter" element={<TextLimiter />} />

              {/* Unit Converter Tools Routes */}
              <Route path="/unit-tools/length-converter" element={<LengthConverter />} />
              <Route path="/unit-tools/weight-converter" element={<WeightConverter />} />
              <Route path="/unit-tools/temperature-converter" element={<TemperatureConverter />} />
              <Route path="/unit-tools/time-converter" element={<TimeConverter />} />
              <Route path="/unit-tools/speed-converter" element={<SpeedConverter />} />
              <Route path="/unit-tools/area-converter" element={<AreaConverter />} />
              <Route path="/unit-tools/volume-converter" element={<VolumeConverter />} />
              <Route path="/unit-tools/data-size-converter" element={<DataSizeConverter />} />

              {/* Date & Time Tools Routes */}
              <Route path="/date-tools/age-calculator" element={<AgeCalculator />} />
              <Route path="/date-tools/date-difference" element={<DateDifference />} />
              <Route path="/date-tools/countdown" element={<Countdown />} />
              <Route path="/date-tools/workdays" element={<WorkDays />} />
              <Route path="/date-tools/birthday-countdown" element={<BirthdayCountdown />} />
              <Route path="/date-tools/leap-year" element={<LeapYear />} />
              <Route path="/date-tools/week-number" element={<WeekNumber />} />

              {/* Number Tools Routes */}
              <Route path="/number-tools/percentage-calculator" element={<PercentageCalculator />} />
              <Route path="/number-tools/simple-interest" element={<SimpleInterest />} />
              <Route path="/number-tools/emi" element={<EMICalculator />} />
              <Route path="/number-tools/roman-converter" element={<RomanConverter />} />
              <Route path="/number-tools/lcm-hcf" element={<LCMHCFCalculator />} />
              <Route path="/number-tools/number-to-words" element={<NumberToWords />} />
              <Route path="/number-tools/scientific-notation" element={<ScientificNotation />} />
              <Route path="/number-tools/number-base-converter" element={<NumberBaseConverter />} />
              <Route path="/number-tools/rounding" element={<RoundingTool />} />
              <Route path="/number-tools/random-generator" element={<RandomGenerator />} />
              
              {/* Math Tools Routes */}
              <Route path="/math-tools/basic-calculator" element={<BasicCalculator />} />
              <Route path="/math-tools/prime-checker" element={<PrimeChecker />} />
              <Route path="/math-tools/factorial" element={<Factorial />} />
              <Route path="/math-tools/multiplication-table" element={<MultiplicationTable />} />
              <Route path="/math-tools/quadratic-solver" element={<QuadraticSolver />} />
              <Route path="/math-tools/percentage-change" element={<PercentageChange />} />
              <Route path="/math-tools/triangle-area" element={<TriangleArea />} />
              <Route path="/math-tools/circle-calculator" element={<CircleCalculator />} />
              <Route path="/math-tools/exponent-log" element={<ExponentLog />} />
              <Route path="/math-tools/statistics-calculator" element={<StatisticsCalculator />} />

              {/* Health Tools Routes */}
              <Route path="/health-tools/bmi-calculator" element={<BMICalculator />} />
              <Route path="/health-tools/calorie-calculator" element={<CalorieCalculator />} />
              <Route path="/health-tools/water-intake" element={<WaterIntake />} />
              <Route path="/health-tools/body-fat" element={<BodyFat />} />
              <Route path="/health-tools/ideal-weight" element={<IdealWeight />} />
              <Route path="/health-tools/bmr-calculator" element={<BMRCalculator />} />
              <Route path="/health-tools/macro-splitter" element={<MacroSplitter />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>

    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
