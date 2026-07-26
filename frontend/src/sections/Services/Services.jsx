import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#0B0B0B] pt-10 pb-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <ServicesHeader />

        <ServicesGrid />

      </div>
    </section>
  );
};

export default Services;