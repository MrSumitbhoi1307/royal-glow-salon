import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const services = [
  { name: "Beard Trim", description: "Precision beard trimming for a neat, defined shape.", price: "₹199" },
  { name: "Beard Styling", description: "Custom beard styling to match your face shape.", price: "₹349" },
  { name: "Beard Coloring", description: "Natural-looking beard color for grey coverage.", price: "₹599" },
  { name: "Hot Towel Shave", description: "Traditional hot towel shave for a smooth, clean finish.", price: "₹399" },
  { name: "Beard Spa", description: "Nourishing beard spa treatment for healthy facial hair.", price: "₹499" },
];

const BeardGrooming = () => {
  return (
    <div className="min-h-screen bg-[#0B0B0B] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <Link
  to="/#services"
  className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-white transition"
>
  <ArrowLeft size={22} />
  Back to Services
</Link>
        <p className="mb-3 uppercase tracking-[5px] text-[#D4AF37] font-medium text-sm md:text-base">Gents Services</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">Beard Grooming</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          Professional beard shaping and grooming services to keep you looking sharp and well-maintained.
        </p>

        <div className="mt-14 grid gap-5">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-6 backdrop-blur-lg transition-all duration-500 hover:border-[#D4AF37] hover:bg-white/10">
              <div>
                <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                <p className="mt-1 text-gray-400 leading-6">{service.description}</p>
              </div>
              <div className="shrink-0 text-2xl font-bold text-[#D4AF37]">{service.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-5 text-gray-300">Ready to transform your look?</p>
          <button className="rounded-full border border-[#D4AF37] px-10 py-3.5 text-sm md:text-base font-semibold uppercase tracking-[2px] text-[#D4AF37] transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_35px_rgba(212,175,55,0.5)]">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeardGrooming;