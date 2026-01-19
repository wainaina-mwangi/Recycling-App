import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Info, Search } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Mock data for immediate display/testing
const MOCK_RECYCLERS = [
  { id: 1, name: "EcoScan Nairobi", description: "Specializes in plastic and e-waste.", lat: -1.286389, lng: 36.817223, phone: "+254 712 345 678" },
  { id: 2, name: "GreenLoop Westlands", description: "Paper and organic waste collection.", lat: -1.265, lng: 36.808, phone: "+254 722 000 111" },
  { id: 3, name: "Kasarani Recovery Hub", description: "Metal and glass recycling center.", lat: -1.221, lng: 36.897, phone: "+254 733 999 888" },
];

export default function FindRecyclers() {
  const [recyclers, setRecyclers] = useState(MOCK_RECYCLERS); // Default to mock
  const [loading, setLoading] = useState(true);
  const API_URL = "http://localhost:5000/api/recyclers";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const recyclersList = Array.isArray(data) ? data : data.recyclers || [];
        if (recyclersList.length > 0) setRecyclers(recyclersList);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Using mock data as fallback:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-950 min-h-screen pt-28 pb-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-black text-gray-900 dark:text-white">
              Recycling <span className="text-green-600">Centers</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">Discover verified hubs in your neighborhood</p>
          </motion.div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by area or name..." 
              className="w-full pl-12 pr-4 py-3 rounded-2xl border-none bg-white dark:bg-gray-900 shadow-sm focus:ring-2 focus:ring-green-500 outline-none dark:text-white"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side: Map (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 h-[500px] sticky top-28"
          >
            <MapContainer
              center={[-1.286389, 36.817223]}
              zoom={12}
              style={{ height: "100%", width: "100%" }}
              className="z-0"
            >
              <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; OpenStreetMap'
              />
              {recyclers.map((recycler) => (
                <Marker key={recycler.id} position={[recycler.lat, recycler.lng]}>
                  <Popup className="rounded-lg overflow-hidden">
                    <div className="p-2">
                      <h4 className="font-bold text-green-700">{recycler.name}</h4>
                      <p className="text-xs text-gray-600">{recycler.description}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

          {/* Right Side: Scrollable List */}
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
              </div>
            ) : recyclers.length === 0 ? (
              <div className="text-center py-10 bg-white dark:bg-gray-900 rounded-2xl">
                <p className="text-red-500">No centers found.</p>
              </div>
            ) : (
              recyclers.map((recycler, index) => (
                <motion.div
                  key={recycler.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-sm border border-transparent hover:border-green-500 transition-all group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                      <MapPin size={20} />
                    </div>
                    <button className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      Open in Maps
                    </button>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-green-600 transition-colors">
                    {recycler.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                    {recycler.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Phone size={14} />
                      {recycler.phone || "N/A"}
                    </div>
                    <button className="flex items-center gap-1 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-green-600">
                      <Info size={14} /> Details
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}