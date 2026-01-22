
import { useEffect, useState } from "react";
import { Menu, User } from "lucide-react";

const Topbar = () => {
  const [username, setUsername] = useState("");

  // Simulate getting user info from localStorage or context
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")) || { username: "Guest" };
    setUsername(user.username);
  }, []);

  return (
    <header className="flex justify-between items-center bg-white dark:bg-gray-800 shadow px-6 py-4">
      <div className="flex items-center gap-2 text-gray-700 dark:text-white font-semibold">
        <Menu className="w-5 h-5" />
        <span>Dashboard</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-200">
        <User className="w-5 h-5" />
        <span>{username}</span>
      </div>
    </header>
  );
};

export default Topbar;
