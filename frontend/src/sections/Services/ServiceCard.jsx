import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/70">

      {/* Service Image */}
      <div className="relative h-105 overflow-hidden">

        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>

        {/* Category Badge */}
        <div className="absolute top-5 left-5 rounded-full border border-[#D4AF37]/40 bg-black/60 px-4 py-2 backdrop-blur-md">
          <span className="text-sm font-medium text-[#D4AF37]">
            {service.category}
          </span>
        </div>

      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-7">

        <h3 className="text-2xl font-bold text-white">
          {service.title}
        </h3>

        <p className="mt-3 leading-7 text-gray-300">
          {service.description}
        </p>

        {/* Button */}
        <Link
  to={service.link}
  className="mt-6 inline-block rounded-full border border-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
>
  Explore Service
</Link>
      </div>

    </div>
  );
};

export default ServiceCard;