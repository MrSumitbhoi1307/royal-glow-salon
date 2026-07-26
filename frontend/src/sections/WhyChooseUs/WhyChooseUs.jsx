import WhyChooseHeader from "./WhyChooseHeader";
import WhyChooseGrid from "./WhyChooseGrid";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <WhyChooseHeader />

        {/* Cards */}

        <WhyChooseGrid />

      </div>
    </section>
  );
};

export default WhyChooseUs;