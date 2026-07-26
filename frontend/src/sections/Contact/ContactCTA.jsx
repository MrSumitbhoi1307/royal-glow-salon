import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="mt-20">

      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-[#D4AF37]/20
          bg-[#111111]
          px-10
          py-16
          shadow-2xl
        "
      >

        {/* Background Glow */}

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]"></div>

        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-[120px]"></div>

        {/* Content */}

        <div className="relative z-10 text-center">

          {/* Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10">

            <CalendarDays
              size={38}
              className="text-[#D4AF37]"
            />

          </div>

          {/* Heading */}

          <p className="mt-8 text-sm font-semibold uppercase tracking-[8px] text-[#D4AF37]">
            BOOK APPOINTMENT
          </p>

          <h2 className="mt-5 text-5xl font-bold leading-tight text-white">

            Ready For Your
            <br />

            <span className="text-[#D4AF37]">
              Luxury Makeover?
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">

            Reserve your premium salon experience with our expert
            stylists and beauty professionals. Choose your preferred
            service, date and time in just a few simple steps.

          </p>

          {/* Button */}

          <div className="mt-12">

            <Link
              to="/book-appointment"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-[#D4AF37]
                px-10
                py-4
                text-lg
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-yellow-400
                hover:shadow-[0_15px_45px_rgba(212,175,55,0.35)]
              "
            >
              Book Appointment

              <ArrowRight size={22} />

            </Link>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;