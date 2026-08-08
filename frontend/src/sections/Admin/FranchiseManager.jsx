import { useEffect, useState } from "react";
import axios from "axios";
import { Check, X, Trash2 } from "lucide-react";

const FranchiseManager = () => {
  const [franchises, setFranchises] = useState([]);
  const [activeCities, setActiveCities] = useState([]);

  const fetchFranchises = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/franchise"
      );
      if (data.success) setFranchises(data.franchises);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchActiveCities = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/franchise/active-cities"
      );
      if (data.success) setActiveCities(data.cities);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFranchises();
    fetchActiveCities();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/franchise/${id}`,
        { status }
      );

      if (data.success) {
        fetchFranchises();
        fetchActiveCities();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Hi application delete karaychi ka?")) return;

    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/franchise/${id}`
      );

      if (data.success) {
        fetchFranchises();
        fetchActiveCities();
      }
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
    <div className="flex flex-col gap-8">
      {/* Active Cities */}
      <div className="rounded-3xl bg-[#111111] border border-[#D4AF37]/20 p-8">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Active Franchise Cities
        </h2>

        <div className="flex flex-wrap gap-3">
          {activeCities.length === 0 && (
            <p className="text-gray-500">No active franchise cities yet</p>
          )}

          {activeCities.map((city) => (
            <span
              key={city}
              className="rounded-full bg-[#D4AF37] px-5 py-2 font-semibold text-black"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* Franchise Applications */}
      <div className="rounded-3xl bg-[#111111] border border-[#D4AF37]/20 p-8">
        <h2 className="mb-8 text-3xl font-bold text-white">
          Franchise Applications
        </h2>

        <table className="w-full">
          <thead>
            <tr className="border-b border-[#D4AF37]/20">
              <th className="py-4 text-left text-[#D4AF37]">Name</th>
              <th className="text-left text-[#D4AF37]">City</th>
              <th className="text-left text-[#D4AF37]">Phone</th>
              <th className="text-left text-[#D4AF37]">Status</th>
              <th className="text-left text-[#D4AF37]">Action</th>
            </tr>
          </thead>
          <tbody>
            {franchises.map((item) => (
              <tr key={item._id} className="border-b border-white/10">
                <td className="py-5 text-white">{item.name}</td>
                <td className="text-gray-300">{item.city}</td>
                <td className="text-gray-300">{item.phone}</td>
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

            {franchises.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500">
                  No franchise applications found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FranchiseManager;