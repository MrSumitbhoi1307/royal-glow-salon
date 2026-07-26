import ContactHeader from "./ContactHeader";
import ContactCards from "./ContactCards";
import ContactBanner from "./ContactBanner";
import ContactCTA from "./ContactCTA";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="max-w-7xl mx-auto px-6">

        <ContactHeader />

        <ContactCards />

        <ContactBanner />

        <ContactCTA />

        <ContactMap />

      </div>
    </section>
  );
};

export default Contact;