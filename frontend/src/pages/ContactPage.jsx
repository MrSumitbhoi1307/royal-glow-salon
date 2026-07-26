import Navbar from "../components/Layout/Navbar";
import Footer from "../sections/Footer/Footer";
import Contact from "../sections/Contact/Contact";

const ContactPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-0">
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;