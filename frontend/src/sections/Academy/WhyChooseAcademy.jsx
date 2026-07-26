const features = [
  {
    title: "International Certification",
    desc: "Industry-recognized certification that helps you build a successful beauty career worldwide.",
    icon: "🎓",
  },
  {
    title: "100% Practical Training",
    desc: "Hands-on salon experience with live clients and premium professional products.",
    icon: "💇",
  },
  {
    title: "Expert Trainers",
    desc: "Learn directly from experienced beauty professionals with years of industry expertise.",
    icon: "👩‍🏫",
  },
  {
    title: "Placement Assistance",
    desc: "Dedicated placement support with leading salons, spas and luxury beauty brands.",
    icon: "💼",
  },
  {
    title: "Luxury Infrastructure",
    desc: "Modern classrooms, luxury salon labs and world-class learning environment.",
    icon: "🏢",
  },
  {
    title: "Career Support",
    desc: "Portfolio building, interview preparation and business guidance for future entrepreneurs.",
    icon: "🚀",
  },
];

const WhyChooseAcademy = () => {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Why Choose Us
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Why Choose Royal Glow Academy
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Experience premium beauty education designed to transform beginners
            into industry professionals through luxury training standards.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {features.map((item, index) => (

            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-[#111111] p-8 transition duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
            >

              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-3xl transition duration-500 group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-white group-hover:text-[#D4AF37] transition">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-400">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseAcademy;