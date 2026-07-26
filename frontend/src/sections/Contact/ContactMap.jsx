const ContactMap = () => {
  return (
    <section className="mt-20">

      <div className="rounded-4xl border border-[#D4AF37]/20 bg-[#111111] px-10 py-16 text-center shadow-2xl">

        <p className="text-sm font-semibold uppercase tracking-[6px] text-[#D4AF37]">
          FIND US
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white">
          Visit Royal Glow Salon
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Experience luxury beauty and premium grooming at Royal Glow Salon.
          Click the button below to open our location in Google Maps and
          navigate directly to our salon with ease.
        </p>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center rounded-full border border-[#D4AF37] bg-[#D4AF37] px-10 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
        >
          Open Google Maps
        </a>

      </div>

    </section>
  );
};

export default ContactMap;