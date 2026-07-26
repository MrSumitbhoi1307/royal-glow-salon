import { useState } from "react";
import { Trash2, Pencil, Plus, X } from "lucide-react";

const ServiceManager = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Hair Styling", price: "₹499", duration: "45 Min" },
    { id: 2, name: "Hair Coloring", price: "₹2499", duration: "2 Hours" },
    { id: 3, name: "Bridal Makeup", price: "₹14999", duration: "4 Hours" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", price: "", duration: "" });

  const openAddForm = () => {
    setForm({ name: "", price: "", duration: "" });
    setEditId(null);
    setShowForm(true);
  };

  const openEditForm = (service) => {
    setForm({
      name: service.name,
      price: service.price,
      duration: service.duration,
    });
    setEditId(service.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Ha service delete karaycha ka?")) {
      setServices((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.duration) return;

    if (editId) {
      setServices((prev) =>
        prev.map((s) => (s.id === editId ? { ...s, ...form } : s))
      );
    } else {
      setServices((prev) => [...prev, { id: Date.now(), ...form }]);
    }

    setShowForm(false);
  };

  return (
    <div className="rounded-3xl bg-[#111111] border border-[#D4AF37]/20 p-8 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Service Manager</h2>

        <button
          onClick={openAddForm}
          className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-black font-semibold hover:scale-105 transition"
        >
          <Plus size={18} />
          Add Service
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#D4AF37]/20">
            <th className="py-4 text-left text-[#D4AF37]">Service</th>
            <th className="text-left text-[#D4AF37]">Price</th>
            <th className="text-left text-[#D4AF37]">Duration</th>
            <th className="text-left text-[#D4AF37]">Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item.id} className="border-b border-white/10">
              <td className="py-5 text-white">{item.name}</td>
              <td className="text-gray-300">{item.price}</td>
              <td className="text-gray-300">{item.duration}</td>
              <td>
                <div className="flex gap-3">
                  <button
                    onClick={() => openEditForm(item)}
                    className="rounded-lg bg-blue-600 p-3"
                  >
                    <Pencil size={18} className="text-white" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="rounded-lg bg-red-600 p-3"
                  >
                    <Trash2 size={18} className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="w-[420px] rounded-2xl border border-[#D4AF37]/30 bg-[#111111] p-8 relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-5 top-5 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <h3 className="mb-6 text-2xl font-bold text-white">
              {editId ? "Edit Service" : "Add Service"}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Service Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-gray-700 bg-black p-3 text-white outline-none focus:border-[#D4AF37]"
              />
              <input
                type="text"
                placeholder="Price (e.g. ₹999)"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="rounded-xl border border-gray-700 bg-black p-3 text-white outline-none focus:border-[#D4AF37]"
              />
              <input
                type="text"
                placeholder="Duration (e.g. 45 Min)"
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
                className="rounded-xl border border-gray-700 bg-black p-3 text-white outline-none focus:border-[#D4AF37]"
              />

              <button
                type="submit"
                className="mt-2 rounded-xl bg-[#D4AF37] p-3 font-semibold text-black hover:bg-yellow-400 transition"
              >
                {editId ? "Update" : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceManager;