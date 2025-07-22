import { useState } from 'react';
import { mockReports } from './mock/reportsData';
import { Pencil, Trash2, Plus } from 'lucide-react';
import AddReportModal from './components/AddReportModal';
import EditReportModal from './components/EditReportModal';

export default function DashboardReports() {
  const [reports, setReports] = useState(mockReports);
  const [editing, setEditing] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const handleDelete = (id) => {
    setReports(reports.filter((report) => report.id !== id));
  };

  const handleAdd = (newReport) => {
    setReports([...reports, { ...newReport, id: Date.now().toString() }]);
  };

  const handleEdit = (updatedReport) => {
    setReports(reports.map((r) => (r.id === updatedReport.id ? updatedReport : r)));
    setEditing(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Your Reports</h2>
        <button
          onClick={() => setShowAdd(true)}
          className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          <Plus size={16} className="mr-1" /> New Report
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto bg-white dark:bg-gray-800 shadow rounded">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700 text-left text-sm font-semibold text-gray-600 dark:text-white">
              <th className="p-3">Type</th>
              <th className="p-3">Location</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id} className="border-b dark:border-gray-600">
                <td className="p-3">{report.type}</td>
                <td className="p-3">{report.location}</td>
                <td className="p-3">{report.date}</td>
                <td className="p-3">{report.status}</td>
                <td className="p-3 flex justify-end gap-2">
                  <button onClick={() => setEditing(report)} className="text-blue-500 hover:underline">
                    <Pencil size={16} />
                  </button>
                  <button onClick={() => handleDelete(report.id)} className="text-red-500 hover:underline">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAdd && <AddReportModal onClose={() => setShowAdd(false)} onAdd={handleAdd} />}
      {editing && <EditReportModal report={editing} onClose={() => setEditing(null)} onSave={handleEdit} />}
    </div>
  );
}
