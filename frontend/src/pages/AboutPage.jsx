import Navbar from "../components/Layout/Navbar";
import Footer from "../sections/Footer/Footer";
import About from "../sections/About/About";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-0">
        <About />
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;