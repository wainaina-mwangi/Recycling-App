// src/Components/AIPanel.jsx
import { X } from "lucide-react";

export default function AIPanel({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-24 right-5 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-purple-700">Coming Soon</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500">
          <X size={20} />
        </button>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Our AI assistant will soon help you navigate RecyConnect, ask questions, and much more!
      </p>
    </div>
  );
}
