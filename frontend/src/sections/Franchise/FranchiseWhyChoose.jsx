const features = [
  {
    title: "Premium Brand Recognition",
    icon: "👑",
    description:
      "Build your business with the trusted Royal Glow Salon luxury brand and premium market reputation.",
  },
  {
    title: "High Profit Potential",
    icon: "📈",
    description:
      "Enjoy excellent ROI with India's rapidly growing luxury beauty and wellness industry.",
  },
  {
    title: "Complete Training",
    icon: "🎓",
    description:
      "Receive professional salon management, staff training, and Royal Glow Academy certification support.",
  },
  {
    title: "Luxury Interior Setup",
    icon: "🎨",
    description:
      "Get complete black & gold salon interior guidance with premium equipment and elegant design.",
  },
  {
    title: "Marketing Support",
    icon: "📢",
    description:
      "Digital marketing, social media campaigns, branding materials and grand opening promotions included.",
  },
  {
    title: "Lifetime Business Support",
    icon: "🤝",
    description:
      "Continuous operational guidance, software support, consultation and business growth assistance.",
  },
];

const FranchiseWhyChoose = () => {
  return (
    <section className="bg-[#0B0B0B] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Why Partner With
            <span className="block text-[#D4AF37]">
              Royal Glow Salon?
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Become a part of India's premium luxury salon brand with complete
            business guidance, branding, training, marketing and lifetime
            operational support.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-[#111111] p-10 transition duration-500 hover:-translate-y-3 hover:border-[#D4AF37] hover:shadow-[0_0_40px_rgba(212,175,55,.20)]"
            >

              <div className="flex items-center justify-center w-20 h-20 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-5xl transition duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-bold text-white group-hover:text-[#D4AF37] transition">
                {item.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {item.description}
              </p>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 text-center rounded-3xl border border-[#D4AF37]/20 bg-[#111111] p-16">

          <h3 className="text-4xl font-bold text-white">
            Ready To Start Your
            <span className="block mt-2 text-[#D4AF37]">
              Luxury Business?
            </span>
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-400">
            Join Royal Glow Salon and build your own successful premium beauty
            business with complete support from our experienced team.
          </p>

          <button className="mt-10 rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,.40)]">
            Apply For Franchise
          </button>

        </div>

      </div>

    </section>
  );
};

export default FranchiseWhyChoose;