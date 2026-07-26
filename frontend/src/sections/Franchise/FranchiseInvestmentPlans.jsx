const plans = [
  {
    name: "Silver Franchise",
    badge: "",
    investment: "₹15 Lakhs",
    area: "800 – 1000 Sq.ft.",
    roi: "18 - 24 Months",
    support: "3 Months",
    features: [
      "Royal Glow Branding Kit",
      "Academy Training",
      "Interior Design Guidance",
      "Basic Marketing Support",
      "Salon Setup Assistance",
      "Business Launch Support",
    ],
  },

  {
    name: "Gold Franchise",
    badge: "Most Popular",
    investment: "₹30 Lakhs",
    area: "1200 – 1800 Sq.ft.",
    roi: "15 - 20 Months",
    support: "12 Months",
    features: [
      "Luxury Interior Design",
      "Complete Staff Training",
      "Hiring Assistance",
      "Digital Marketing",
      "Grand Opening Event",
      "Priority Business Support",
    ],
  },

  {
    name: "Platinum Franchise",
    badge: "Premium",
    investment: "₹50 Lakhs+",
    area: "2000+ Sq.ft.",
    roi: "12 - 18 Months",
    support: "Lifetime",
    features: [
      "Ultra Luxury Salon Setup",
      "Celebrity Launch Support",
      "Dedicated Business Manager",
      "Lifetime Marketing",
      "Premium Branding",
      "Lifetime Business Consultancy",
    ],
  },
];

const FranchiseInvestmentPlans = () => {
  return (
    <section className="bg-[#0B0B0B] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Investment Plans
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Choose Your
            <span className="block text-[#D4AF37]">
              Franchise Plan
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Select the investment package that best suits your business goals.
            Every plan includes complete Royal Glow support and training.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`relative overflow-hidden rounded-3xl border transition duration-500 hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(212,175,55,.25)]
              ${
                plan.badge
                  ? "border-[#D4AF37] bg-[#161616]"
                  : "border-white/10 bg-[#111111]"
              }`}
            >

              {/* Badge */}

              {plan.badge && (

                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#D4AF37] px-6 py-2 font-semibold text-black">
                  {plan.badge}
                </div>

              )}

              <div className="p-10">

                <h3 className="text-3xl font-bold text-white">
                  {plan.name}
                </h3>

                <h4 className="mt-8 text-5xl font-bold text-[#D4AF37]">
                  {plan.investment}
                </h4>

                <div className="mt-10 space-y-5">

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Area Required</span>
                    <span className="text-white">{plan.area}</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Expected ROI</span>
                    <span className="text-white">{plan.roi}</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-gray-400">Business Support</span>
                    <span className="text-white">{plan.support}</span>
                  </div>

                </div>

                {/* Features */}

                <div className="mt-10">

                  <h4 className="text-xl font-semibold text-white mb-6">
                    Included
                  </h4>

                  <ul className="space-y-4">

                    {plan.features.map((item, i) => (

                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <span className="text-[#D4AF37]">✔</span>
                        {item}
                      </li>

                    ))}

                  </ul>

                </div>

                <button className="mt-12 w-full rounded-full border border-[#D4AF37] py-4 font-semibold text-[#D4AF37] transition duration-500 hover:bg-[#D4AF37] hover:text-black">
                  Apply Now
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl border border-[#D4AF37]/20 bg-[#111111] p-16 text-center">

          <h3 className="text-4xl font-bold text-white">
            Need a Custom Franchise Plan?
          </h3>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Our franchise consultants will help you choose the perfect
            investment plan according to your city, budget and business goals.
          </p>

          <button className="mt-10 rounded-full bg-[#D4AF37] px-10 py-4 font-semibold text-black transition duration-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(212,175,55,.35)]">
            Talk To Our Expert
          </button>

        </div>

      </div>

    </section>
  );
};

export default FranchiseInvestmentPlans;