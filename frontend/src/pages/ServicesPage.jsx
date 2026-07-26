import Navbar from "../components/Layout/Navbar";
import Footer from "../sections/Footer/Footer";
import Services from "../sections/Services/Services";

const ServicesPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-0">
        <Services />
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;