import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const hairServices = [
  {
    name: "Basic Haircut",
    description: "Precision haircut styled to suit your face shape and personality.",
    price: "₹499",
  },
  {
    name: "Hair Wash & Blow Dry",
    description: "Deep cleansing wash followed by professional blow-dry styling.",
    price: "₹399",
  },
  {
    name: "Hair Spa Treatment",
    description: "Nourishing hair spa to repair damage and restore natural shine.",
    price: "₹899",
  },
  {
    name: "Global Hair Coloring",
    description: "Full hair coloring with premium international color brands.",
    price: "₹2,499",
  },
  {
    name: "Highlights & Balayage",
    description: "Trendy highlights or balayage for a natural, sun-kissed look.",
    price: "₹3,499",
  },
  {
    name: "Keratin Treatment",
    description: "Smoothening keratin treatment for frizz-free, silky hair.",
    price: "₹4,999",
  },
  {
    name: "Hair Straightening",
    description: "Long-lasting straightening treatment for sleek, manageable hair.",
    price: "₹5,499",
  },
  {
    name: "Bridal Hairstyling",
    description: "Exclusive bridal hairstyle with trial session included.",
    price: "₹6,999",
  },
];

const HairStyling = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-20">
      <div className="mx-auto max-w-5xl">

        {/* Back Link */}
       <Link
  to="/#services"
  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition"
>
  <ArrowLeft size={22} />
  Back to Services
</Link>

        {/* Heading */}
        <p className="mb-3 uppercase tracking-[5px] text-[#D4AF37] font-medium text-sm md:text-base">
          Ladies Services
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Hair Styling
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          From classic haircuts to premium global coloring and bridal
          hairstyling, our certified stylists use world-class techniques
          and products to give you a look that truly reflects your
          personality.
        </p>

        {/* Services List */}
        <div className="mt-14 grid gap-5">
          {hairServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-6 backdrop-blur-lg transition-all duration-500 hover:border-[#D4AF37] hover:bg-white/10"
            >
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {service.name}
                </h3>
                <p className="mt-1 text-gray-400 leading-6">
                  {service.description}
                </p>
              </div>

              <div className="shrink-0 text-2xl font-bold text-[#D4AF37]">
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="mb-5 text-gray-300">
            Ready to transform your look?
          </p>
          <button className="rounded-full border border-[#D4AF37] px-10 py-3.5 text-sm md:text-base font-semibold uppercase tracking-[2px] text-[#D4AF37] transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]">
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default HairStyling;