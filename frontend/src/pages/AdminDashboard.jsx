import { useLocation } from "react-router-dom";

import Sidebar from "../sections/Admin/Sidebar";
import Topbar from "../sections/Admin/Topbar";

import DashboardCards from "../sections/Admin/DashboardCards";
import AppointmentTable from "../sections/Admin/AppointmentTable";
import ServiceManager from "../sections/Admin/ServiceManager";
import StylistManager from "../sections/Admin/StylistManager";
import GalleryManager from "../sections/Admin/GalleryManager";
import AcademyManager from "../sections/Admin/AcademyManager";
import FranchiseManager from "../sections/Admin/FranchiseManager";
import Settings from "../sections/Admin/Settings";

const AdminDashboard = () => {
  const location = useLocation();
  const path = location.pathname;

  const renderContent = () => {
    if (path === "/admin/appointments") return <AppointmentTable />;
    if (path === "/admin/services") return <ServiceManager />;
    if (path === "/admin/stylists") return <StylistManager />;
    if (path === "/admin/gallery") return <GalleryManager />;
    if (path === "/admin/academy") return <AcademyManager />;
    if (path === "/admin/franchise") return <FranchiseManager />;
    if (path === "/admin/settings") return <Settings />;

    return (
      <>
        <DashboardCards />
        <AppointmentTable />
      </>
    );
  };

  return (
    <div className="flex min-h-screen bg-[#0B0B0B]">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <div className="p-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;