import Navbar from "../components/layout/Navbar";
import Footer from "../sections/Footer/Footer";

const TermsConditions = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0B0B0B] text-white pt-40 pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold text-center">
            Terms & Conditions
          </p>

          <h1 className="text-5xl font-bold text-center mt-6">
            Royal Glow Salon
          </h1>

          <p className="text-gray-400 text-center mt-4">
            Last Updated : July 2026
          </p>

          <div className="mt-20 space-y-12">

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                1. Acceptance
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                By using our website or booking any service,
                you agree to these Terms & Conditions.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                2. Appointment Policy
              </h2>

              <ul className="mt-6 text-gray-400 list-disc ml-6 space-y-3">
                <li>Please arrive at least 10 minutes before your appointment.</li>
                <li>Late arrivals may result in reduced service time.</li>
                <li>Appointments may be cancelled if customers arrive excessively late.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                3. Academy Admissions
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Academy admissions are subject to seat availability,
                eligibility verification and successful fee payment.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                4. Payments
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                All payments made towards salon services or academy
                courses are subject to our payment policies.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                5. Intellectual Property
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                All content including images, videos, branding,
                logos and designs are the property of Royal Glow Salon.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                6. Limitation of Liability
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Royal Glow Salon shall not be responsible for
                any indirect or incidental damages arising from
                the use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                7. Contact
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Email : info@royalglowsalon.com <br />
                Phone : +91 XXXXX XXXXX
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default TermsConditions;