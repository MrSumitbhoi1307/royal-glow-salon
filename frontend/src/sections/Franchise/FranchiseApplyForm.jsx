import Navbar from "../../components/Layout/Navbar";
import Footer from "../../sections/Footer/Footer";

const FranchiseApplyForm = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0B0B0B] pt-36 pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center">

            <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
              Franchise Application
            </p>

            <h1 className="mt-6 text-5xl font-bold text-white">
              Apply For Royal Glow Franchise
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Fill the details below and our franchise team will contact you shortly.
            </p>

          </div>

          <form className="mt-16 rounded-3xl border border-white/10 bg-[#111111] p-10 space-y-8">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl bg-[#1B1B1B] border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl bg-[#1B1B1B] border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37]"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
                className="rounded-xl bg-[#1B1B1B] border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37]"
              />

              <input
                type="text"
                placeholder="City"
                className="rounded-xl bg-[#1B1B1B] border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37]"
              />

              <select className="rounded-xl bg-[#1B1B1B] border border-white/10 p-4 text-white outline-none">

                <option>Select Investment Plan</option>
                <option>Silver Franchise</option>
                <option>Gold Franchise</option>
                <option>Platinum Franchise</option>

              </select>

              <input
                type="text"
                placeholder="Preferred Location"
                className="rounded-xl bg-[#1B1B1B] border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37]"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your business experience..."
              className="w-full rounded-xl bg-[#1B1B1B] border border-white/10 p-4 text-white outline-none focus:border-[#D4AF37]"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-[#D4AF37] py-4 font-semibold text-black transition hover:scale-[1.02]"
            >
              Submit Application
            </button>

          </form>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default FranchiseApplyForm;
