import testimonialsData from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";

const TestimonialsGrid = () => {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

      {testimonialsData.map((testimonial) => (

        <TestimonialCard
          key={testimonial.id}
          testimonial={testimonial}
        />

      ))}

    </div>
  );
};

export default TestimonialsGrid;