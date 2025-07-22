// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import {
  Home,
  ClipboardList,
  Truck,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  const links = [
    { name: "Home", icon: <Home size={18} />, path: "/dashboard" },
    { name: "My Reports", icon: <ClipboardList size={18} />, path: "/dashboard/reports" },
    { name: "Request Pickup", icon: <Truck size={18} />, path: "/dashboard/request" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <aside className="h-screen w-64 bg-green-700 text-white p-6 hidden md:block">
      <h2 className="text-2xl font-bold mb-10">RecyConnect</h2>
      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded hover:bg-green-600 transition ${
                isActive ? "bg-green-600 font-semibold" : ""
              }`
            }
          >
            {link.icon}
            {link.name}
          </NavLink>
        ))}
        <button
          onClick={handleLogout}
          className="mt-10 flex items-center gap-3 px-4 py-2 rounded bg-red-500 hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
