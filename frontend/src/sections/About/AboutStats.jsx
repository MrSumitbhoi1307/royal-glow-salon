const AboutStats = () => {
  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "25+", label: "Professional Stylists" },
    { number: "10000+", label: "Happy Clients" },
  ];

  return (
    <div className="grid grid-cols-3 gap-6 mt-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="rounded-2xl bg-white/5 border border-[#D4AF37]/20 p-6 text-center"
        >
          <h3 className="text-3xl font-bold text-[#D4AF37]">
            {item.number}
          </h3>

          <p className="text-gray-300 mt-2 text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutStats;