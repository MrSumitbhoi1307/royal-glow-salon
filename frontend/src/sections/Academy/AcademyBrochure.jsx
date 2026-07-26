const AcademyBrochure = () => {
  return (
    <>
      <section className="min-h-screen bg-[#0B0B0B] pt-36 pb-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
              Royal Glow Academy
            </p>

            <h1 className="mt-6 text-5xl font-bold text-white">
              Academy Brochure
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Everything you need to know before joining our Luxury Beauty Academy.
            </p>
          </div>

          {/* Overview */}

          <div className="mt-16 rounded-3xl border border-white/10 bg-[#111111] p-10">
            <h2 className="text-3xl font-bold text-[#D4AF37]">
              About Academy
            </h2>

            <p className="mt-6 text-gray-400 leading-8">
              Royal Glow Academy is a premium beauty education institute
              providing international standard training in Hair Styling,
              Hair Coloring, Bridal Makeup, Skin Care, Nail Art,
              Spa Therapy and Salon Management.
            </p>
          </div>

          {/* Courses */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Courses
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="border border-white/10 rounded-xl p-6">
                <h3 className="text-white text-xl font-semibold">
                  Hair Styling
                </h3>
                <p className="text-gray-400 mt-2">
                  Duration : 3 Months
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-6">
                <h3 className="text-white text-xl font-semibold">
                  Hair Coloring
                </h3>
                <p className="text-gray-400 mt-2">
                  Duration : 2 Months
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-6">
                <h3 className="text-white text-xl font-semibold">
                  Bridal Makeup
                </h3>
                <p className="text-gray-400 mt-2">
                  Duration : 4 Months
                </p>
              </div>

              <div className="border border-white/10 rounded-xl p-6">
                <h3 className="text-white text-xl font-semibold">
                  Skin & Facial
                </h3>
                <p className="text-gray-400 mt-2">
                  Duration : 2 Months
                </p>
              </div>

            </div>
          </div>

          {/* Features */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Why Choose Us
            </h2>

            <ul className="mt-8 space-y-4 text-gray-300 text-lg">
              <li>✔ International Level Training</li>
              <li>✔ Live Practical Sessions</li>
              <li>✔ Professional Kits</li>
              <li>✔ Industry Expert Trainers</li>
              <li>✔ Internship Opportunities</li>
              <li>✔ 100% Placement Assistance</li>
              <li>✔ Government Recognized Certificate</li>
            </ul>

          </div>

          {/* Fees */}

          <div className="mt-12 rounded-3xl border border-white/10 bg-[#111111] p-10">

            <h2 className="text-3xl font-bold text-[#D4AF37]">
              Fees & Duration
            </h2>

            <table className="w-full mt-8 text-left">

              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 text-white">Course</th>
                  <th className="text-white">Duration</th>
                  <th className="text-white">Fees</th>
                </tr>
              </thead>

              <tbody className="text-gray-400">

                <tr className="border-b border-white/10">
                  <td className="py-4">Hair Styling</td>
                  <td>3 Months</td>
                  <td>₹35,000</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="py-4">Hair Coloring</td>
                  <td>2 Months</td>
                  <td>₹28,000</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="py-4">Bridal Makeup</td>
                  <td>4 Months</td>
                  <td>₹55,000</td>
                </tr>

                <tr>
                  <td className="py-4">Complete Master Course</td>
                  <td>12 Months</td>
                  <td>₹1,25,000</td>
                </tr>

              </tbody>

            </table>

          </div>

          {/* Download */}

          <div className="text-center mt-16">

            <a
              href="/brochure/RoyalGlowAcademy.pdf"
              download
              className="inline-block rounded-full border border-[#D4AF37] px-10 py-4 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
            >
              Download PDF Brochure
            </a>

          </div>

        </div>
      </section>
    </>
  );
};

export default AcademyBrochure;