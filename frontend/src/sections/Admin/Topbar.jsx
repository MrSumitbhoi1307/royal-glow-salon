import { useState, useEffect } from "react";
import axios from "axios";
import {
  Bell,
  Search,
  UserCircle2,
  LogOut,
  LayoutDashboard,
  CalendarDays,
  Scissors,
  Users,
  Image,
  GraduationCap,
  Building2,
  Settings as SettingsIcon,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

// Sections (pages) that can be searched/navigated to directly
const sectionResults = [
  { label: "Dashboard", subLabel: "Section", type: "Section", icon: LayoutDashboard, path: "/admin" },
  { label: "Appointments", subLabel: "Section", type: "Section", icon: CalendarDays, path: "/admin/appointments" },
  { label: "Services", subLabel: "Section", type: "Section", icon: Scissors, path: "/admin/services" },
  { label: "Stylists", subLabel: "Section", type: "Section", icon: Users, path: "/admin/stylists" },
  { label: "Gallery", subLabel: "Section", type: "Section", icon: Image, path: "/admin/gallery" },
  { label: "Academy", subLabel: "Section", type: "Section", icon: GraduationCap, path: "/admin/academy" },
  { label: "Franchise", subLabel: "Section", type: "Section", icon: Building2, path: "/admin/franchise" },
  { label: "Settings", subLabel: "Section", type: "Section", icon: SettingsIcon, path: "/admin/settings" },
];

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

  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allData, setAllData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // ==========================
  // FETCH ALL SEARCHABLE DATA (real records)
  // ==========================

  const fetchAllData = async () => {
    try {
      const [stylistsRes, servicesRes, galleryRes, academyRes, franchiseRes] =
        await Promise.allSettled([
          axios.get("https://royal-glow-salon.onrender.com/api/stylists"),
          axios.get("https://royal-glow-salon.onrender.com/api/services"),
          axios.get("https://royal-glow-salon.onrender.com/api/gallery"),
          axios.get("https://royal-glow-salon.onrender.com/api/academy"),
          axios.get("https://royal-glow-salon.onrender.com/api/franchise"),
        ]);

      const combined = [];

      if (stylistsRes.status === "fulfilled" && stylistsRes.value.data.success) {
        stylistsRes.value.data.stylists.forEach((item) => {
          combined.push({
            id: item._id,
            label: item.name,
            subLabel: item.role,
            type: "Stylist",
            icon: Users,
            path: "/admin/stylists",
          });
        });
      }

      if (servicesRes.status === "fulfilled" && servicesRes.value.data.success) {
        servicesRes.value.data.services.forEach((item) => {
          combined.push({
            id: item._id,
            label: item.name,
            subLabel: `₹${item.price}`,
            type: "Service",
            icon: Scissors,
            path: "/admin/services",
          });
        });
      }

      if (galleryRes.status === "fulfilled" && galleryRes.value.data.success) {
        galleryRes.value.data.gallery.forEach((item) => {
          combined.push({
            id: item._id,
            label: item.title || "Untitled Image",
            subLabel: "Gallery Image",
            type: "Gallery",
            icon: Image,
            path: "/admin/gallery",
          });
        });
      }

      if (academyRes.status === "fulfilled" && academyRes.value.data.success) {
        academyRes.value.data.applications.forEach((item) => {
          combined.push({
            id: item._id,
            label: item.name,
            subLabel: item.course,
            type: "Academy",
            icon: GraduationCap,
            path: "/admin/academy",
          });
        });
      }

      if (franchiseRes.status === "fulfilled" && franchiseRes.value.data.success) {
        franchiseRes.value.data.franchises.forEach((item) => {
          combined.push({
            id: item._id,
            label: item.name,
            subLabel: item.city,
            type: "Franchise",
            icon: Building2,
            path: "/admin/franchise",
          });
        });
      }

      setAllData(combined);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // Combine sections + real data, then filter by query
  const matches =
    query.trim() === ""
      ? []
      : [...sectionResults, ...allData].filter((item) =>
          item.label.toLowerCase().includes(query.toLowerCase())
        );

  const highlightMatch = (text) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());

    if (index === -1) return text;

    const before = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const after = text.slice(index + query.length);

    return (
      <>
        {before}
        <span className="bg-[#D4AF37] text-black rounded px-0.5">
          {match}
        </span>
        {after}
      </>
    );
  };

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(true);

    if (!loaded) fetchAllData();
  };

  const goToResult = (path) => {
    navigate(path);
    setQuery("");
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && matches.length > 0) {
      goToResult(matches[0].path);
    }
  };

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

        <div className="relative">

          <div className="flex items-center rounded-full border border-[#D4AF37]/20 bg-[#0B0B0B] px-5 py-3">

            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search anything..."
              value={query}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              className="ml-3 w-56 bg-transparent text-white outline-none placeholder:text-gray-500"
            />

          </div>

          {showSuggestions && query && (
            <div className="absolute top-full left-0 mt-2 w-80 max-h-96 overflow-y-auto rounded-2xl border border-[#D4AF37]/20 bg-[#0B0B0B] p-2 shadow-2xl z-50">

              {matches.length === 0 && (
                <p className="px-4 py-3 text-sm text-gray-500">
                  No matching results found
                </p>
              )}

              {matches.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={`${item.type}-${item.id || item.path}-${index}`}
                    onClick={() => goToResult(item.path)}
                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-[#D4AF37]/10"
                  >
                    <div className="rounded-lg bg-[#111111] p-2">
                      <Icon size={16} className="text-[#D4AF37]" />
                    </div>

                    <div className="flex-1">
                      <p className="text-white">
                        {highlightMatch(item.label)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.type} · {item.subLabel}
                      </p>
                    </div>
                  </button>
                );
              })}

            </div>
          )}

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