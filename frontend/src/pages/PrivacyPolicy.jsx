import Navbar from "../components/layout/Navbar";
import Footer from "../sections/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />

      <section className="bg-[#0B0B0B] text-white pt-40 pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold text-center">
            Privacy Policy
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
                1. Information We Collect
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                We collect personal information such as your name,
                phone number, email address, appointment details and
                academy registration information whenever you contact
                us or book an appointment.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                2. How We Use Your Information
              </h2>

              <ul className="mt-6 text-gray-400 space-y-3 list-disc ml-6">
                <li>Appointment Booking</li>
                <li>Academy Registration</li>
                <li>Customer Support</li>
                <li>Service Updates</li>
                <li>Promotional Offers</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                3. Data Protection
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                We implement industry-standard security measures to
                protect your personal information from unauthorized
                access, misuse or disclosure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                4. Third Party Services
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                We may use trusted third-party payment gateways,
                analytics and communication platforms for better
                customer experience.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                5. Cookies
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Our website may use cookies to improve user experience
                and website performance.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#D4AF37]">
                6. Contact Us
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Royal Glow Salon <br />
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

export default PrivacyPolicy;