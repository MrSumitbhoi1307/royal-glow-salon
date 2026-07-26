import Navbar from "../components/Layout/Navbar";
import Footer from "../sections/Footer/Footer";
import Gallery from "../sections/Gallery/Gallery";

const GalleryPage = () => {
  return (
    <>
      <Navbar />

      <main className="pt-0">
        <Gallery />
      </main>

      <Footer />
    </>
  );
};

export default GalleryPage;