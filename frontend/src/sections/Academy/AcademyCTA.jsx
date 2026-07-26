import { Link } from "react-router-dom";

const AcademyCTA = () => {
  return (
    <section className="relative bg-[#0B0B0B] py-32 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[180px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="rounded-[40px] border border-[#D4AF37]/30 bg-gradient-to-br from-[#111111] to-[#0B0B0B] p-16 text-center shadow-[0_0_50px_rgba(212,175,55,0.15)]">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Start Your Beauty Career
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold text-white leading-tight">
            Become A Certified
            <br />
            Beauty Professional
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            Join Royal Glow Academy and learn from India's leading beauty
            professionals. Gain international-level practical skills,
            certification, internship opportunities and placement assistance.
          </p>

          {/* Features */}

          <div className="grid md:grid-cols-4 gap-6 mt-16">

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-[#D4AF37] text-3xl font-bold">100%</h3>
              <p className="mt-2 text-gray-400">
                Practical Training
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-[#D4AF37] text-3xl font-bold">8+</h3>
              <p className="mt-2 text-gray-400">
                Expert Trainers
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-[#D4AF37] text-3xl font-bold">100%</h3>
              <p className="mt-2 text-gray-400">
                Placement Support
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6">
              <h3 className="text-[#D4AF37] text-3xl font-bold">500+</h3>
              <p className="mt-2 text-gray-400">
                Students Trained
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap justify-center gap-6 mt-16">

            <Link
              to="/academyapplyform"
              className="px-10 py-4 rounded-full bg-[#D4AF37] text-black font-semibold transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.5)]"
            >
              Apply Now
            </Link>

            <Link
              to="/academybrochure"
              className="px-10 py-4 rounded-full border border-[#D4AF37] text-[#D4AF37] font-semibold transition duration-500 hover:bg-[#D4AF37] hover:text-black"
            >
              Download Brochure
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default AcademyCTA;