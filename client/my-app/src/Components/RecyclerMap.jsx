import { useEffect, useState } from 'react';
import axios from '../api/axios';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icons
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const RecyclerMap = () => {
  const [recyclers, setRecyclers] = useState([]);

  useEffect(() => {
    const fetchRecyclers = async () => {
      try {
        const response = await axios.get('/recyclers');
        setRecyclers(response.data);
      } catch (error) {
        console.error('Error fetching recyclers:', error);
      }
    };

    fetchRecyclers();
  }, []);

  return (
    <section className="w-full h-[80vh]">
        <h2 className="text-3xl font-bold mb-5 text-center pt-5 justify-center text-gray-700 dark:text-white">
          Find Recyclers ?
        </h2>
      <MapContainer
        center={[-1.286389, 36.817223]} // Nairobi default
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {recyclers.map((recycler) => (
          <Marker
            key={recycler._id}
            position={[recycler.location.lat, recycler.location.lng]}
          >
            <Popup>
              <strong>{recycler.name}</strong><br />
              {recycler.phone}<br />
              {recycler.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default RecyclerMap;
