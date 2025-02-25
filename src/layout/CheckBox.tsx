import { useState } from "react";
import { motion } from "framer-motion";
import Checkbox from "../components/CheckBox"; // Ensure correct path

const CheckboxShowcase = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Checkbox Showcase</h1>
      <p className="text-gray-600 dark:text-gray-400">Try different styles & copy the code</p>

      {/* Toggle Disabled State */}
      <button
        className="mt-4 px-4 py-2 text-sm font-semibold rounded-md border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        onClick={() => setIsDisabled((prev) => !prev)}
      >
        Toggle Disabled: {isDisabled ? "On" : "Off"}
      </button>

      {/* Animated Checkbox Preview */}
      <motion.div
        key={isDisabled ? "disabled" : "enabled"}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-6 space-y-4"
      >
        <Checkbox label="Default Checkbox" disabled={isDisabled} />
        <Checkbox label="Disabled Checkbox" disabled />
      </motion.div>

      {/* Code Preview */}
      <pre className="mt-6 bg-gray-100 dark:bg-gray-800 p-4 rounded-md text-sm text-gray-700 dark:text-gray-300">
        {`<Checkbox label="Default Checkbox" disabled={${isDisabled}} />
<Checkbox label="Disabled Checkbox" disabled />`}
      </pre>
    </div>
  );
};

export default CheckboxShowcase;
