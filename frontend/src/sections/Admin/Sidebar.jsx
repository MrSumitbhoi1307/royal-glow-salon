import {
  LayoutDashboard,
  CalendarDays,
  Scissors,
  Users,
  Image,
  GraduationCap,
  Building2,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    name: "Appointments",
    path: "/admin/appointments",
    icon: CalendarDays,
  },
  {
    name: "Services",
    path: "/admin/services",
    icon: Scissors,
  },
  {
    name: "Stylists",
    path: "/admin/stylists",
    icon: Users,
  },
  {
    name: "Gallery",
    path: "/admin/gallery",
    icon: Image,
  },
  {
    name: "Academy",
    path: "/admin/academy",
    icon: GraduationCap,
  },
  {
    name: "Franchise",
    path: "/admin/franchise",
    icon: Building2,
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  // 👉 नवीन अपडेट केलेला Logout फंक्शन
 const logout = () => {

  localStorage.removeItem("adminToken");

  localStorage.removeItem("adminInfo");

  window.location.href="/admin/login";

};

  return (
    <aside className="w-[280px] min-h-screen bg-[#0B0B0B] border-r border-[#D4AF37]/20 flex flex-col">
      {/* Logo */}
      <div className="border-b border-[#D4AF37]/20 p-8">
        <h1 className="text-3xl font-bold text-[#D4AF37]">ROYAL GLOW</h1>
        <p className="text-gray-400 mt-1">Luxury Salon Admin</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-4 py-8">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-4 rounded-xl px-5 py-4 mb-3 transition-all duration-300
                ${
                  isActive
                    ? "bg-[#D4AF37] text-black font-semibold"
                    : "text-gray-300 hover:bg-[#D4AF37]/10 hover:text-[#D4AF37]"
                }`
              }
            >
              <Icon size={22} />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-[#D4AF37]/20 p-5">
       <button
  onClick={logout}
  className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-4 text-white transition hover:bg-red-700"
>
  <LogOut size={20} />
  Logout
</button>
      </div>
    </aside>
  );
};

export default Sidebar;