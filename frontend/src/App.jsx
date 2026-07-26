import { Routes, Route } from "react-router-dom";

// Global Components
import LuxuryLoader from "./components/Loader/LuxuryLoader";
import Cursor from "./components/Cursor/Cursor";
import ScrollProgress from "./components/Scroll/ScrollProgress";
import BackToTop from "./components/Scroll/BackToTop";
import useLenis from "./hooks/useLenis";

// Pages
import HomePage from "./pages/HomePage";
import BookAppointment from "./pages/BookAppointment";
import SalonAcademy from "./pages/SalonAcademy";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import FranchisePage from "./pages/FranchisePage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./sections/Admin/AdminLogin";
import ProtectedRoute from "./components/Admin/ProtectedRoute";

// Academy
import AcademyApplyForm from "./sections/Academy/AcademyApplyForm";
import AcademyBrochure from "./sections/Academy/AcademyBrochure";

// Franchise
import FranchiseApplyForm from "./sections/Franchise/FranchiseApplyForm";
import FranchiseBrochure from "./sections/Franchise/FranchiseBrochure";

// Ladies
import HairStyling from "./pages/ServiceInformation/Ladies/HairStyling";
import HairColoring from "./pages/ServiceInformation/Ladies/HairColoring";
import BridalMakeup from "./pages/ServiceInformation/Ladies/BridalMakeup";
import SkinCare from "./pages/ServiceInformation/Ladies/SkinCare";
import SpaMassageLadies from "./pages/ServiceInformation/Ladies/SpaMassageLadies";
import ManicurePedicure from "./pages/ServiceInformation/Ladies/ManicurePedicure";

// Gents
import HaircutStyling from "./pages/ServiceInformation/Gents/HaircutStyling";
import BeardGrooming from "./pages/ServiceInformation/Gents/BeardGrooming";
import FacialTreatment from "./pages/ServiceInformation/Gents/FacialTreatment";
import SpaMassageGents from "./pages/ServiceInformation/Gents/SpaMassageGents";
import HairWash from "./pages/ServiceInformation/Gents/HairWash";
import HeadMassage from "./pages/ServiceInformation/Gents/HeadMassage";

function App() {
  useLenis();

  return (
    <>
      {/* Global Components */}
      <LuxuryLoader />
      <Cursor />
      <ScrollProgress />
      <BackToTop />

      {/* Routes */}
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Main Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/academy" element={<SalonAcademy />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        
        
        <Route path="/admin/*" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}/>

        {/* Academy */}
        <Route path="/academyapplyform" element={<AcademyApplyForm />} />
        <Route path="/academybrochure" element={<AcademyBrochure />} />

        {/* Franchise */}
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/franchise-apply" element={<FranchiseApplyForm />} />
        <Route path="/franchise-brochure" element={<FranchiseBrochure />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />

        {/* Ladies */}
        <Route
          path="/services/ladies/hair-styling"
          element={<HairStyling />}
        />
        <Route
          path="/services/ladies/hair-coloring"
          element={<HairColoring />}
        />
        <Route
          path="/services/ladies/bridal-makeup"
          element={<BridalMakeup />}
        />
        <Route
          path="/services/ladies/skin-care"
          element={<SkinCare />}
        />
        <Route
          path="/services/ladies/spa-massage"
          element={<SpaMassageLadies />}
        />
        <Route
          path="/services/ladies/manicure-pedicure"
          element={<ManicurePedicure />}
        />

        {/* Gents */}
        <Route
          path="/services/gents/haircut-styling"
          element={<HaircutStyling />}
        />
        <Route
          path="/services/gents/beard-grooming"
          element={<BeardGrooming />}
        />
        <Route
          path="/services/gents/facial-treatment"
          element={<FacialTreatment />}
        />
        <Route
          path="/services/gents/spa-massage"
          element={<SpaMassageGents />}
        />
        <Route
          path="/services/gents/hair-wash"
          element={<HairWash />}
        />
        <Route
          path="/services/gents/head-massage"
          element={<HeadMassage />}
        />
      </Routes>
    </>
  );
}

export default App;