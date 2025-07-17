// src/components/RecyclerCard.jsx
import { MapPin } from "lucide-react";

export default function RecyclerCard({ name, description }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
      <div className="flex items-center gap-2 text-green-600 mb-2">
        <MapPin className="w-5 h-5" />
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
