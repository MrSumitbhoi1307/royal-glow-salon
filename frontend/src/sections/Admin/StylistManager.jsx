import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2, Pencil, Plus, X } from "lucide-react";

const StylistManager = () => {
  const [stylists, setStylists] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ name: "", role: "", experience: "" });

  const fetchStylists = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/api/stylists");
      if (data.success) setStylists(data.stylists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStylists();
  }, []);

  const openAddForm = () => {
    setForm({ name: "", role: "", experience: "" });
    setEditId(null);
    setShowForm(true);
  };

  const openEditForm = (stylist) => {
    setForm({
      name: stylist.name,
      role: stylist.role,
      experience: stylist.experience,
    });
    setEditId(stylist._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Ha stylist delete karaycha ka?")) return;

    try {
      const { data } = await axios.delete(
        `http://localhost:4000/api/stylists/${id}`
      );
      if (data.success) fetchStylists();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.role || !form.experience) return;

    try {
      if (editId) {
        await axios.put(`http://localhost:4000/api/stylists/${editId}`, form);
      } else {
        await axios.post("http://localhost:4000/api/stylists", form);
      }

      setShowForm(false);
      fetchStylists();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="rounded-3xl bg-[#111111] border border-[#D4AF37]/20 p-8 relative">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-white">Stylist Manager</h2>

        <button
          onClick={openAddForm}
          className="flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-black font-semibold hover:scale-105 transition"
        >
          <Plus size={18} />
          Add Stylist
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-[#D4AF37]/20">
            <th className="py-4 text-left text-[#D4AF37]">Name</th>
            <th className="text-left text-[#D4AF37]">Role</th>
            <th className="text-left text-[#D4AF37]">Experience</th>
            <th className="text-left text-[#D4AF37]">Action</th>
          </tr>
        </thead>
        <tbody>
          {stylists.map((item) => (
            <tr key={item._id} className="border-b border-white/10">
              <td className="py-5 text-white">{item.name}</td>
              <td className="text-gray-300">{item.role}</td>
              <td className="text-gray-300">{item.experience}</td>
              <td>
                <div className="flex gap-3">
                  <button
                    onClick={() => openEditForm(item)}
                    className="rounded-lg bg-blue-600 p-3"
                  >
                    <Pencil size={18} className="text-white" />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="rounded-lg bg-red-600 p-3"
                  >
                    <Trash2 size={18} className="text-white" />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {stylists.length === 0 && (
            <tr>
              <td colSpan={4} className="py-8 text-center text-gray-500">
                No stylists found
              </td>
            </tr>
          )}
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
              {editId ? "Edit Stylist" : "Add Stylist"}
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="rounded-xl border border-gray-700 bg-black p-3 text-white outline-none focus:border-[#D4AF37]"
              />
              <input
                type="text"
                placeholder="Role (e.g. Senior Stylist)"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="rounded-xl border border-gray-700 bg-black p-3 text-white outline-none focus:border-[#D4AF37]"
              />
              <input
                type="text"
                placeholder="Experience (e.g. 5 Years)"
                value={form.experience}
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
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

export default StylistManager;