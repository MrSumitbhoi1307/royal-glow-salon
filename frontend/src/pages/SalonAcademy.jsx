import Navbar from "../components/layout/Navbar";
import AcademyHero from "../sections/Academy/AcademyHero";
import AcademyAbout from "../sections/Academy/AcademyAbout";
import WhyChooseAcademy from "../sections/Academy/WhyChooseAcademy";
import AcademyCourses from "../sections/Academy/AcademyCourses";
import AcademyTrainers from "../sections/Academy/AcademyTrainers";
import AcademyPlacement from "../sections/Academy/AcademyPlacement";
import AcademyStudentGallery from "../sections/Academy/AcademyStudentGallery";
import AcademyFAQ from "../sections/Academy/AcademyFAQ";
import AcademyCTA from "../sections/Academy/AcademyCTA";


const SalonAcademy = () => {
  return (
    <>
      <Navbar />
      <AcademyHero />
      <AcademyAbout />
      <WhyChooseAcademy />
      <AcademyCourses />
      <AcademyTrainers />
      <AcademyPlacement />
      <AcademyStudentGallery />
      <AcademyFAQ />
      <AcademyCTA />

    </>
  );
};

export default SalonAcademy;