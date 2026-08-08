import Navbar from "../../components/Layout/Navbar";
import Footer from "../../sections/Footer/Footer";

const FranchiseBrochure = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#0B0B0B] pt-36 pb-24">

        <div className="max-w-6xl mx-auto px-6">

          {/* Hero */}

          <div className="text-center">

            <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
              Royal Glow Franchise
            </p>

            <h1 className="mt-6 text-5xl font-bold text-white">
              Franchise Brochure
            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto">
              Everything you need to know before becoming a Royal Glow Salon
              Franchise Partner.
            </p>

          </div>

          {/* About */}

          <div className="mt-16 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              About Royal Glow
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Royal Glow Salon is a premium luxury unisex salon brand
              delivering world-class beauty services, luxury interiors,
              international academy training and profitable franchise
              opportunities across India.
            </p>

          </div>

          {/* Investment */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Franchise Investment
            </h2>

            <table className="w-full mt-8">

              <thead>

                <tr className="border-b border-white/10">

                  <th className="py-4 text-left text-white">
                    Plan
                  </th>

                  <th className="text-left text-white">
                    Investment
                  </th>

                  <th className="text-left text-white">
                    Area
                  </th>

                </tr>

              </thead>

              <tbody className="text-gray-400">

                <tr className="border-b border-white/10">

                  <td className="py-4">
                    Silver
                  </td>

                  <td>
                    ₹15 Lakhs
                  </td>

                  <td>
                    800–1000 Sq.ft.
                  </td>

                </tr>

                <tr className="border-b border-white/10">

                  <td className="py-4">
                    Gold
                  </td>

                  <td>
                    ₹30 Lakhs
                  </td>

                  <td>
                    1200–1800 Sq.ft.
                  </td>

                </tr>

                <tr>

                  <td className="py-4">
                    Platinum
                  </td>

                  <td>
                    ₹50 Lakhs+
                  </td>

                  <td>
                    2000+ Sq.ft.
                  </td>

                </tr>

              </tbody>

            </table>

          </div>

          {/* Support */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              What You Get
            </h2>

            <ul className="mt-8 space-y-4 text-lg text-gray-300">

              <li>✔ Premium Brand License</li>

              <li>✔ Luxury Interior Design</li>

              <li>✔ Staff Recruitment Support</li>

              <li>✔ Royal Glow Academy Training</li>

              <li>✔ Marketing & Branding</li>

              <li>✔ Grand Opening Support</li>

              <li>✔ Business Software</li>

              <li>✔ Lifetime Business Consultation</li>

            </ul>

          </div>

          {/* Process */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Franchise Process
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-8">

              <div className="rounded-xl border border-white/10 p-6">

                <h3 className="text-white font-bold">
                  Step 1
                </h3>

                <p className="text-gray-400 mt-3">
                  Submit Application
                </p>

              </div>

              <div className="rounded-xl border border-white/10 p-6">

                <h3 className="text-white font-bold">
                  Step 2
                </h3>

                <p className="text-gray-400 mt-3">
                  Business Meeting
                </p>

              </div>

              <div className="rounded-xl border border-white/10 p-6">

                <h3 className="text-white font-bold">
                  Step 3
                </h3>

                <p className="text-gray-400 mt-3">
                  Launch Your Salon
                </p>

              </div>

            </div>

          </div>

          {/* Contact */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Contact Franchise Team
            </h2>

            <div className="mt-8 space-y-3 text-gray-300">

              <p>📍 Pune, Maharashtra</p>

              <p>📞 +91 98765 43210</p>

              <p>✉ franchise@royalglowsalon.com</p>

              <p>🌐 www.royalglowsalon.com</p>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-16 flex flex-wrap justify-center gap-6">

            <a
              href="/brochure/RoyalGlowFranchise.pdf"
              download
              className="rounded-full border border-[#D4AF37] px-10 py-4 text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Download PDF Brochure
            </a>

            <a
              href="/franchise-apply"
              className="rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition hover:scale-105"
            >
              Apply For Franchise
            </a>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default FranchiseBrochure;
