const supportSteps = [
  {
    number: "01",
    title: "Business Consultation",
    description:
      "Our experts help you choose the right franchise model, investment plan and location.",
  },
  {
    number: "02",
    title: "Luxury Salon Interior",
    description:
      "Complete black & gold premium salon interior planning, branding and equipment setup.",
  },
  {
    number: "03",
    title: "Academy Training",
    description:
      "Professional training for salon owners and staff through Royal Glow Academy.",
  },
  {
    number: "04",
    title: "Recruitment Support",
    description:
      "We help recruit experienced hairstylists, makeup artists and beauty professionals.",
  },
  {
    number: "05",
    title: "Marketing & Launch",
    description:
      "Digital marketing, social media campaigns and grand opening event support.",
  },
  {
    number: "06",
    title: "Lifetime Business Support",
    description:
      "Continuous operational guidance, software updates and business growth consultation.",
  },
];

const FranchiseSupport = () => {
  return (
    <section className="bg-[#0B0B0B] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Franchise Support
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            We Support You
            <span className="block text-[#D4AF37]">
              Every Step Of The Journey
            </span>
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            From planning your salon to growing your business, Royal Glow Salon
            provides complete franchise support for long-term success.
          </p>

        </div>

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 h-full w-[2px] bg-[#D4AF37]/30"></div>

          <div className="space-y-14">

            {supportSteps.map((step) => (

              <div
                key={step.number}
                className="relative flex gap-8"
              >

                {/* Circle */}

                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37] bg-[#111111] text-xl font-bold text-[#D4AF37]">
                  {step.number}
                </div>

                {/* Content */}

                <div className="flex-1 rounded-3xl border border-white/10 bg-[#111111] p-8 transition duration-500 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,.18)]">

                  <h3 className="text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 leading-8 text-gray-400">
                    {step.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default FranchiseSupport;