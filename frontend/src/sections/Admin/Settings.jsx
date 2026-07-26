import { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("Sumit Bhoi");
  const [email, setEmail] = useState("admin@royalglow.com");

  const handleSave = (e) => {
    e.preventDefault();
    alert("Settings Saved ✅ (backend integration abhi baki ahe)");
  };

  return (
    <div className="rounded-3xl bg-[#111111] border border-[#D4AF37]/20 p-8 max-w-xl">
      <h2 className="mb-8 text-3xl font-bold text-white">Settings</h2>

      <form onSubmit={handleSave} className="flex flex-col gap-5">
        <div>
          <label className="mb-2 block text-gray-400">Admin Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-black p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div>
          <label className="mb-2 block text-gray-400">Admin Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-gray-700 bg-black p-3 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <button
          type="submit"
          className="mt-2 rounded-xl bg-[#D4AF37] p-3 font-semibold text-black hover:bg-yellow-400 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;