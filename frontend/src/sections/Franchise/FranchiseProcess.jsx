const process = [
  {
    step: "01",
    title: "Apply Online",
    description:
      "Submit your franchise application with your preferred city, investment budget and contact details.",
  },
  {
    step: "02",
    title: "Business Discussion",
    description:
      "Our franchise consultants discuss investment, location, business model and expected returns.",
  },
  {
    step: "03",
    title: "Agreement & Approval",
    description:
      "After approval, franchise agreement and business documentation are completed.",
  },
  {
    step: "04",
    title: "Salon Setup",
    description:
      "Luxury interior design, furniture, branding, equipment and software installation.",
  },
  {
    step: "05",
    title: "Staff Training",
    description:
      "Complete training through Royal Glow Academy including salon operations and customer service.",
  },
  {
    step: "06",
    title: "Grand Opening",
    description:
      "Launch your salon with marketing campaigns, promotions and continuous business support.",
  },
];

const FranchiseProcess = () => {
  return (
    <section className="bg-[#080808] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Franchise Process
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Start Your
            <span className="block text-[#D4AF37]">
              Royal Glow Journey
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
            Our franchise process is simple, transparent and designed to help
            you launch your luxury salon successfully.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {process.map((item) => (

            <div
              key={item.step}
              className="rounded-3xl border border-white/10 bg-[#111111] p-10 hover:border-[#D4AF37] transition duration-500 hover:-translate-y-3"
            >

              <span className="text-6xl font-bold text-[#D4AF37]/30">
                {item.step}
              </span>

              <h3 className="mt-8 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FranchiseProcess;