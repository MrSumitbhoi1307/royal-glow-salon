import { useEffect, useState } from "react";
import axios from "axios";
import { Check, X, Trash2 } from "lucide-react";

const AcademyManager = () => {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const { data } = await axios.get(
        "https://royal-glow-salon.onrender.com/api/academy"
      );
      if (data.success) setApplications(data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const { data } = await axios.put(
        `https://royal-glow-salon.onrender.com/api/academy/${id}`,
        { status }
      );

      if (data.success) fetchApplications();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hi application delete karaychi ka?")) return;

    try {
      const { data } = await axios.delete(
        `https://royal-glow-salon.onrender.com/api/academy/${id}`
      );

      if (data.success) fetchApplications();
    } catch (error) {
      console.log(error);
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
            <th className="text-left text-[#D4AF37]">City</th>
            <th className="text-left text-[#D4AF37]">Status</th>
            <th className="text-left text-[#D4AF37]">Action</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((item) => (
            <tr key={item._id} className="border-b border-white/10">
              <td className="py-5 text-white">{item.name}</td>
              <td className="text-gray-300">{item.course}</td>
              <td className="text-gray-300">{item.city}</td>
              <td className={`font-semibold ${statusColor(item.status)}`}>
                {item.status}
              </td>
              <td>
                <div className="flex gap-3">
                  <button
                    onClick={() => updateStatus(item._id, "Approved")}
                    title="Approve"
                    className="rounded-lg bg-green-600 p-3 hover:bg-green-700 transition"
                  >
                    <Check size={18} className="text-white" />
                  </button>
                  <button
                    onClick={() => updateStatus(item._id, "Rejected")}
                    title="Reject"
                    className="rounded-lg bg-yellow-600 p-3 hover:bg-yellow-700 transition"
                  >
                    <X size={18} className="text-white" />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
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
              <td colSpan={5} className="py-8 text-center text-gray-500">
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