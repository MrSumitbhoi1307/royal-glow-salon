import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0B0B0B] pt-28 pb-10 px-6"
    >
      <div className="mx-auto max-w-7xl grid items-start gap-16 lg:grid-cols-2">

        <AboutImage />

        <AboutContent />

      </div>
    </section>
  );
};

export default About;