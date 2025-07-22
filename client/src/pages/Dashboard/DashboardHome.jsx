import { motion } from "framer-motion";
import { Truck, FileText, Leaf } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const stats = [
  {
    id: 1,
    title: "My Reports",
    value: 8,
    icon: <FileText className="text-green-500" size={28} />,
  },
  {
    id: 2,
    title: "Pickup Requests",
    value: 4,
    icon: <Truck className="text-green-500" size={28} />,
  },
  {
    id: 3,
    title: "Waste Recycled (kg)",
    value: 23,
    icon: <Leaf className="text-green-500" size={28} />,
  },
];

const chartData = [
  { name: "Jan", recycled: 2 },
  { name: "Feb", recycled: 4 },
  { name: "Mar", recycled: 3 },
  { name: "Apr", recycled: 5 },
  { name: "May", recycled: 6 },
  { name: "Jun", recycled: 8 },
];

export default function DashboardHome() {
  return (
    <div className="p-6 md:p-10">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
        Welcome back 👋
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Here's a quick summary of your recycling activity.
      </p>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                {stat.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {stat.value}
                </h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Recycling Activity (Last 6 Months)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="recycled"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
