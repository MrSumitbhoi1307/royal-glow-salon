import contactData from "./contactData";
import ContactCard from "./ContactCard";

const cards = [
  contactData.address,
  contactData.phone,
  contactData.whatsapp,
  contactData.email,
  contactData.instagram,
  contactData.facebook,
  contactData.workingHours,
];

const ContactCards = () => {
  return (
    <div className="mt-16">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {cards.map((item, index) => (
          <ContactCard
            key={index}
            item={item}
          />
        ))}

      </div>

    </div>
  );
};

export default ContactCards;