// src/layout/DashboardLayout.jsx
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64 min-h-screen bg-gray-100 dark:bg-gray-900">
        <Topbar />
        <main className="p-6">
          <Outlet /> {/* This renders the nested dashboard pages */}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
