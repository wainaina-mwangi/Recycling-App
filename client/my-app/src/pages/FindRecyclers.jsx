// src/pages/FindRecyclers.jsx
import { useEffect, useState } from "react";
import RecyclerMap from "../Components/RecyclerMap";
import RecyclerCard from "../Components/RecyclerCard";

const mockRecyclers = [
  {
    id: 1,
    name: "Green Waste Drop-Off",
    lat: -1.286389,
    lng: 36.817223,
    description: "Accepts plastics, glass, and e-waste.",
  },
  {
    id: 2,
    name: "Eco Recycle Center",
    lat: -1.2833,
    lng: 36.8167,
    description: "Certified center for paper & metal.",
  },
];

export default function FindRecyclers() {
  const [recyclers, setRecyclers] = useState([]);

  useEffect(() => {
    // Later: Replace with API call
    setRecyclers(mockRecyclers);
  }, []);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Nearby Recycling Centers
      </h2>

      <p className="text-center text-gray-600 mb-8">
        We’ve found <strong>{recyclers.length}</strong> recycler(s) around your area.
      </p>

      <RecyclerMap recyclers={recyclers} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {recyclers.map((r) => (
          <RecyclerCard key={r.id} name={r.name} description={r.description} />
        ))}
      </div>
    </section>
  );
}
