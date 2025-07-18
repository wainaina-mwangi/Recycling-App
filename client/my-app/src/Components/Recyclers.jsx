// src/pages/FindRecyclers.jsx
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function FindRecyclers() {
  const [recyclers, setRecyclers] = useState([]);
  const [loading, setLoading] = useState(true);

  //  backend endpoint
  const API_URL = "http://localhost:5000/api/recyclers";

  useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log("Fetched data:", data);

      const recyclersList = Array.isArray(data)
        ? data
        : Array.isArray(data.recyclers)
        ? data.recyclers
        : [];

      setRecyclers(recyclersList);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Error fetching recyclers:", err);
      setLoading(false);
    });
}, []);




  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen mt-16 py-16 px-4 md:px-10 ">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Find Nearby Recyclers
        </motion.h2>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-xl overflow-hidden shadow-md mb-10 h-[400px]"
        >
          <MapContainer
            center={[-1.286389, 36.817223]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            />
            {recyclers.map((recycler) => (
              <Marker key={recycler.id} position={[recycler.lat, recycler.lng]}>
                <Popup>
                  <strong>{recycler.name}</strong>
                  <br />
                  {recycler.description}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </motion.div>

        {/* RECYCLER CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {loading ? (
            <p className="text-center text-gray-500">Loading recyclers...</p>
          ) : recyclers.length === 0 ? (
            <p className="text-center text-red-500">No recyclers found.</p>
          ) : (
            recyclers.map((recycler, index) => (
              <motion.div
                key={recycler.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {recycler.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {recycler.description}
                </p>
                <p className="text-sm mt-2 text-gray-400">
                  Lat: {recycler.lat}, Lng: {recycler.lng}
                </p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
