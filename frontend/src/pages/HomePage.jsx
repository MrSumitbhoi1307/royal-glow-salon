import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero/Hero";
import About from "../sections/About/About";
import Services from "../sections/Services/Services";
import Gallery from "../sections/Gallery/Gallery";
import Contact from "../sections/Contact/Contact";
import Testimonials from "../sections/Testimonials/Testimonials";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseUs";
import Brands from "../sections/Brands/Brands";
import Team from "../sections/Team/Team";
import Footer from "../sections/Footer/Footer";


const HomePage = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Gallery />

      <Contact/>

      <Testimonials />

      <WhyChooseUs />

      <Brands />

      <Team />

      <Footer />

    </>
  );
};

export default HomePage;