import { Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#111111]
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#D4AF37]
        hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]
      "
    >
      {/* Gold Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/20"></div>

      {/* Client Image */}

      <div className="relative z-10 flex justify-center">

        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="
            h-28
            w-28
            rounded-full
            border-4
            border-[#D4AF37]
            object-cover
            shadow-xl
          "
        />

      </div>

      {/* Stars */}

      <div className="relative z-10 mt-7 flex justify-center gap-1">

        {[...Array(testimonial.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            fill="#D4AF37"
            color="#D4AF37"
          />
        ))}

      </div>

      {/* Review */}

      <p className="relative z-10 mt-7 text-center leading-8 text-gray-300">

        "{testimonial.review}"

      </p>

      {/* Name */}

      <h3 className="relative z-10 mt-8 text-center text-2xl font-bold text-white">

        {testimonial.name}

      </h3>

      {/* Service */}

      <div className="relative z-10 mt-4 flex justify-center">

        <span
          className="
            rounded-full
            border
            border-[#D4AF37]/40
            bg-[#D4AF37]/10
            px-5
            py-2
            text-sm
            font-semibold
            text-[#D4AF37]
          "
        >
          {testimonial.service}
        </span>

      </div>

    </div>
  );
};

export default TestimonialCard;