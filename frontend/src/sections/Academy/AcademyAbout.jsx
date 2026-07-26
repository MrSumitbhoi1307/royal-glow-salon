import academyData from "./academyData";

const AcademyAbout = () => {
  return (
    <section className="py-28 bg-[#0B0B0B]">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">

              ABOUT ACADEMY

            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-white">

              Learn From Industry

              <span className="block text-[#D4AF37]">

                Leading Professionals

              </span>

            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-400">

              Royal Glow Salon Academy is dedicated to creating world-class
              beauty professionals through premium practical training,
              internationally inspired techniques and live salon experience.

            </p>

            <p className="mt-6 text-lg leading-9 text-gray-400">

              Every student receives personalized mentorship, hands-on
              experience and professional certification to build a successful
              career in the beauty industry.

            </p>

          </div>

          {/* Right */}

          <div className="grid gap-6 sm:grid-cols-2">

            {academyData.features.map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-[#111111] p-7 transition duration-500 hover:border-[#D4AF37] hover:-translate-y-2"
              >

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37]/10 text-2xl text-[#D4AF37]">

                  ✓

                </div>

                <h3 className="text-xl font-semibold text-white">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default AcademyAbout;