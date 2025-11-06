// src/main.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Loader from "./Components/Loader.jsx";
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

function Main() {
  // i will work with the loader later ?
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    // Simulate loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);