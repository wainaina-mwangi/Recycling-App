import { useState } from 'react';

export default function AddReportModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ type: '', location: '', date: '', status: 'Pending' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-6 rounded-lg w-96 shadow-lg space-y-4">
        <h3 className="text-lg font-semibold">Add New Report</h3>

        <input
          type="text"
          placeholder="Type (e.g. Littering)"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
          Add Report
        </button>
        <button type="button" onClick={onClose} className="w-full mt-2 text-sm text-gray-600">
          Cancel
        </button>
      </form>
    </div>
  );
}
