import academyData from "./academyData";
import Button from "../../components/Common/Button";
import heroImage from "../../assets/images/academy/academy-hero.jpeg";

const AcademyHero = () => {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0">

        <img
          src={heroImage}
          alt="Royal Glow Academy"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

      </div>

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 pt-24">

        <div className="max-w-4xl">

          <p className="mb-5 uppercase tracking-[8px] text-[#D4AF37] font-semibold">

            {academyData.badge}

          </p>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">

            {academyData.heading}

          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-300">

            {academyData.description}

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Button
              text="Apply Now"
              to="/academyapplyform"
            />

            <Button
              text="Download Brochure"
              to="/academybrochure"
              className="border-white text-white hover:bg-white hover:text-black"
            />
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

              <h3 className="text-4xl font-bold text-[#D4AF37]">
                1000+
              </h3>

              <p className="mt-2 text-gray-300">
                Students
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

              <h3 className="text-4xl font-bold text-[#D4AF37]">
                98%
              </h3>

              <p className="mt-2 text-gray-300">
                Placement
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

              <h3 className="text-4xl font-bold text-[#D4AF37]">
                12+
              </h3>

              <p className="mt-2 text-gray-300">
                Courses
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">

              <h3 className="text-4xl font-bold text-[#D4AF37]">
                15+
              </h3>

              <p className="mt-2 text-gray-300">
                Expert Trainers
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AcademyHero;
