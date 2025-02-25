import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";

// ✅ Fix: Use "as const" to correctly type the variants array
const variants = ["primary", "success", "danger", "info", "warning", "secondary", "link"] as const;

const ButtonShowcase = () => {
  const [selectedVariant, setSelectedVariant] = useState<(typeof variants)[number]>("primary");

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Button Showcase</h1>
      <p className="text-gray-600 dark:text-gray-400">Try different styles & copy the code</p>

      {/* Tab Navigation */}
      <div className="mt-6 flex space-x-2">
        {variants.map((variant) => (
          <button
            key={variant}
            onClick={() => setSelectedVariant(variant)}
            className={`px-4 py-2 text-sm font-semibold rounded-md ${
              selectedVariant === variant
                ? "bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white"
            }`}
          >
            {variant}
          </button>
        ))}
      </div>

      {/* Animated Button Preview */}
      <motion.div
        key={selectedVariant}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6"
      >
        <Button variant={selectedVariant} size="lg">
          {selectedVariant} Button
        </Button>
      </motion.div>

      {/* Code Preview */}
      <pre className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm text-gray-700 dark:text-gray-300">
        {`<Button variant="${selectedVariant}" size="lg">Your Button Text Here</Button>`}
      </pre>
    </div>
  );
};

export default ButtonShowcase;
