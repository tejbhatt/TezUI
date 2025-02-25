import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card"; // Ensure the path is correct

const variants = ["primary", "secondary", "outlined"] as const;

const CardShowcase = () => {
  const [selectedVariant, setSelectedVariant] = useState<(typeof variants)[number]>("primary");
  const [rounded, setRounded] = useState(true);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Card Showcase</h1>
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

      {/* Toggle Rounded Corners */}
      <button
        className="mt-4 px-4 py-2 text-sm font-semibold rounded-md border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        onClick={() => setRounded((prev) => !prev)}
      >
        Toggle Rounded: {rounded ? "On" : "Off"}
      </button>

      {/* Animated Card Preview */}
      <motion.div
        key={selectedVariant}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 w-full max-w-md"
      >
        <Card
          variant={selectedVariant}
          size="lg"
          rounded={rounded}
          className="hover:scale-105 transition-transform duration-300 ease-in-out p-6"
        >
          <h3 className="text-xl font-semibold capitalize">{selectedVariant} Card</h3>
          <p className="text-gray-700 dark:text-gray-300">
            This is a {selectedVariant} styled card.
          </p>
        </Card>
      </motion.div>

      {/* Code Preview */}
      <pre className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm text-gray-700 dark:text-gray-300">
        {`<Card variant="${selectedVariant}" size="lg" rounded={${rounded}}>Your content here</Card>`}
      </pre>
    </div>
  );
};

export default CardShowcase;
