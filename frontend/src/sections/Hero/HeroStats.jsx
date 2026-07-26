const HeroStats = () => {
  const stats = [
    { number: "10+", title: "Years Experience" },
    { number: "25+", title: "Professional Stylists" },
    { number: "10000+", title: "Happy Clients" },
  ];

  return (
    <div className="mt-20 md:mt-24 grid grid-cols-3 gap-4 md:gap-8">
      {stats.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#D4AF37]">
            {item.number}
          </h2>
          <p className="mt-1 text-sm md:text-base text-gray-300">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};
export default HeroStats;