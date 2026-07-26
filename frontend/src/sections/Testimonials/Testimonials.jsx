import TestimonialsHeader from "./TestimonialsHeader";
import TestimonialsGrid from "./TestimonialsGrid";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <TestimonialsHeader />

        {/* Cards */}

        <TestimonialsGrid />

      </div>
    </section>
  );
};

export default Testimonials;