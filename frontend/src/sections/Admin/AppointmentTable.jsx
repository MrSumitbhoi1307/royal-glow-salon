import {
  Bell,
  Search,
  UserCircle2,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const Topbar = () => {

  const navigate = useNavigate();

  const admin = JSON.parse(
    localStorage.getItem("adminInfo")
  );

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const logoutHandler = () => {

    localStorage.removeItem("adminToken");

    localStorage.removeItem("adminInfo");

    navigate("/admin/login");

  };

  return (

    <header className="flex items-center justify-between border-b border-[#D4AF37]/20 bg-[#111111] px-10 py-6">

      {/* LEFT */}

      <div>

        <h1 className="text-3xl font-bold text-white">

          Welcome {admin?.name || "Admin"} 👋

        </h1>

        <p className="mt-2 text-gray-400">

          {today}

        </p>

      </div>

      {/* RIGHT */}

      <div className="flex items-center gap-6">

        {/* SEARCH */}

        <div className="flex items-center rounded-full border border-[#D4AF37]/20 bg-[#0B0B0B] px-5 py-3">

          <Search
            size={18}
            className="text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="ml-3 bg-transparent text-white outline-none placeholder:text-gray-500"
          />

        </div>

        {/* NOTIFICATION */}

        <button className="relative rounded-full bg-[#0B0B0B] p-3 transition hover:bg-[#D4AF37]/10">

          <Bell
            size={22}
            className="text-[#D4AF37]"
          />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

        </button>

        {/* ADMIN INFO */}

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-[#D4AF37]"
          />

          <div>

            <h3 className="font-semibold text-white">

              {admin?.name || "Royal Glow Admin"}

            </h3>

            <p className="text-sm text-gray-400">

              {admin?.email || "admin@royalglow.com"}

            </p>

          </div>

        </div>

        {/* LOGOUT */}

        <button
          onClick={logoutHandler}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:scale-105 hover:bg-red-700"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </header>

  );

};

export default Topbar;