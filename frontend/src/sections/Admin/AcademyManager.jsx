import { useState } from "react";
import { Check, X, Trash2 } from "lucide-react";

const AcademyManager = () => {
  const [applications, setApplications] = useState([
    { id: 1, name: "Ananya Patil", course: "Hair Styling Course", status: "Pending" },
    { id: 2, name: "Vikas Rao", course: "Makeup Artistry", status: "Approved" },
  ]);

  const updateStatus = (id, status) => {
    setApplications((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Hi application delete karaychi ka?")) {
      setApplications((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const statusColor = (status) => {
    if (status === "Approved") return "text-green-400";
    if (status === "Rejected") return "text-red-400";
    return "text-yellow-400";
  };

  return (
    <div className="rounded-3xl bg-[#111111] border border-[#D4AF37]/20 p-8">
      <h2 className="mb-8 text-3xl font-bold text-white">Academy Applications</h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#D4AF37]/20">
            <th className="py-4 text-left text-[#D4AF37]">Name</th>
            <th className="text-left text-[#D4AF37]">Course</th>
            <th className="text-left text-[#D4AF37]">Status</th>
            <th className="text-left text-[#D4AF37]">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((item) => (
            <tr key={item.id} className="border-b border-white/10">
              <td className="py-5 text-white">{item.name}</td>
              <td className="text-gray-300">{item.course}</td>
              <td className={`font-semibold ${statusColor(item.status)}`}>
                {item.status}
              </td>
              <td>
                <div className="flex gap-3">
                  <button
                    onClick={() => updateStatus(item.id, "Approved")}
                    title="Approve"
                    className="rounded-lg bg-green-600 p-3 hover:bg-green-700 transition"
                  >
                    <Check size={18} className="text-white" />
                  </button>
                  <button
                    onClick={() => updateStatus(item.id, "Rejected")}
                    title="Reject"
                    className="rounded-lg bg-yellow-600 p-3 hover:bg-yellow-700 transition"
                  >
                    <X size={18} className="text-white" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    title="Delete"
                    className="rounded-lg bg-red-600 p-3 hover:bg-red-700 transition"
                  >
                    <Trash2 size={18} className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {applications.length === 0 && (
            <tr>
              <td colSpan={4} className="py-8 text-center text-gray-500">
                No applications found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AcademyManager;