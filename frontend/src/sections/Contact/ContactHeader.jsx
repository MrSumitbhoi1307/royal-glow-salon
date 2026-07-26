import contactData from "./contactData";

const ContactHeader = () => {
  return (
    <div className="mx-auto mb-20 max-w-4xl text-center">

      {/* Small Heading */}

      <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-6 py-2 text-sm font-semibold uppercase tracking-[6px] text-[#D4AF37]">

        {contactData.title}

      </span>

      {/* Main Heading */}

      <h2 className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl">

        {contactData.heading}

      </h2>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">

        {contactData.description}

      </p>

    </div>
  );
};

export default ContactHeader;