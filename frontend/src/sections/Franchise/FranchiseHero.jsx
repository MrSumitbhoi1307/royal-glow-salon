import { Link } from "react-router-dom";

const FranchiseHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0B] pt-40">

      {/* Background */}

      <div className="absolute inset-0">
        <img
          src="/images/franchise/franchise-hero.jpg"
          alt="Royal Glow Franchise"
          className="h-full w-full object-cover opacity-25"
        />
      </div>

      {/* Overlay */}

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0B0B0B]" />

      {/* Gold Glow */}

      <div className="absolute left-1/2 top-32 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#D4AF37]/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Royal Glow Franchise
          </p>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-white md:text-7xl">
            Own A
            <span className="block text-[#D4AF37]">
              Luxury Salon
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-gray-300">
            Join India's premium salon brand and build a successful beauty
            business with complete training, branding, marketing,
            interior design and operational support from Royal Glow Salon.
          </p>

          {/* Highlights */}

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-[#D4AF37]">
                ₹15L+
              </h3>
              <p className="mt-2 text-gray-400">
                Investment Starts
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-[#D4AF37]">
                100%
              </h3>
              <p className="mt-2 text-gray-400">
                Business Support
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-3xl font-bold text-[#D4AF37]">
                High ROI
              </h3>
              <p className="mt-2 text-gray-400">
                Premium Business
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap gap-6">

            <Link
              to="/franchise-apply"
              className="rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.45)]"
            >
              Apply For Franchise
            </Link>

            <Link
              to="/franchise-brochure"
              className="rounded-full border border-[#D4AF37] px-10 py-4 font-semibold text-[#D4AF37] transition duration-500 hover:bg-[#D4AF37] hover:text-black"
            >
              Download Brochure
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FranchiseHero;