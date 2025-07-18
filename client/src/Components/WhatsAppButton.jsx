// src/Components/WhatsAppButton.jsx
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "254114457931"; // Replace with your WhatsApp number (no + sign)

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
    >
      <MessageCircle size={24} />
    </a>
  );
}
