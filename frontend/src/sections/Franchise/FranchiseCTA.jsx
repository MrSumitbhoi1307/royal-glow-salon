import { Link } from "react-router-dom";

const FranchiseCTA = () => {
  return (
    <section className="bg-[#080808] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="rounded-[40px] border border-[#D4AF37]/20 bg-gradient-to-br from-[#111111] to-[#0B0B0B] p-16 text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Join Royal Glow
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Own India's Next
            <span className="block text-[#D4AF37]">
              Luxury Salon Brand
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Become a Royal Glow Franchise Partner and build a premium luxury
            salon with complete business support, academy training and branding.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              to="/franchise-apply"
              className="rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition hover:scale-105"
            >
              Apply Now
            </Link>

            <Link
              to="/franchise-brochure"
              className="rounded-full border border-[#D4AF37] px-10 py-4 font-semibold text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Download Brochure
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FranchiseCTA;