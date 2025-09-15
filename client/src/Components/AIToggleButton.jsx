// src/Components/AIToggleButton.jsx
import { Bot } from "lucide-react";


export default function AIToggleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-5 right-5 z-50 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition"
    >
      <Bot size={24} />
    </button>
  );
}
