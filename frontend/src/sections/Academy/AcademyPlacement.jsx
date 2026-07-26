const companies = [
  "L'Oréal",
  "Lakmé Salon",
  "Naturals",
  "Jawed Habib",
  "Enrich",
  "VLCC",
];

const AcademyPlacement = () => {
  return (
    <section className="bg-[#111111] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Career Support
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            100% Placement Assistance
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400">
            We prepare every student for interviews, practical exams,
            professional grooming and salon placements.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-8 mt-20">

          <div className="rounded-3xl border border-white/10 bg-black p-10 text-center hover:border-[#D4AF37] transition">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              98%
            </h3>

            <p className="mt-4 text-gray-300">
              Placement Rate
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black p-10 text-center hover:border-[#D4AF37] transition">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              500+
            </h3>

            <p className="mt-4 text-gray-300">
              Hiring Partners
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black p-10 text-center hover:border-[#D4AF37] transition">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              ₹25K+
            </h3>

            <p className="mt-4 text-gray-300">
              Starting Salary
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-black p-10 text-center hover:border-[#D4AF37] transition">

            <h3 className="text-5xl font-bold text-[#D4AF37]">
              1000+
            </h3>

            <p className="mt-4 text-gray-300">
              Students Placed
            </p>

          </div>

        </div>

        {/* Hiring Partners */}

        <div className="mt-24">

          <h3 className="text-center text-3xl font-bold text-white">
            Our Hiring Partners
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">

            {companies.map((company, index) => (

              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black p-8 text-center hover:border-[#D4AF37] transition duration-300"
              >

                <h4 className="text-lg font-semibold text-white">
                  {company}
                </h4>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default AcademyPlacement;