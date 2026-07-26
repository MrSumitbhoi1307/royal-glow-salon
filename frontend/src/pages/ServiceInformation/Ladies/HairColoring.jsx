import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const hairColorServices = [
  {
    name: "Root Touch-Up",
    description: "Quick and precise root coloring to maintain a fresh, seamless look.",
    price: "₹899",
  },
  {
    name: "Global Hair Color",
    description: "Full head coloring with premium international color brands.",
    price: "₹2,499",
  },
  {
    name: "Highlights",
    description: "Face-framing or full highlights for a dimensional, vibrant look.",
    price: "₹2,999",
  },
  {
    name: "Balayage",
    description: "Hand-painted, sun-kissed color technique for a natural gradient.",
    price: "₹3,999",
  },
  {
    name: "Ombre Coloring",
    description: "Smooth color transition from roots to tips for a bold statement.",
    price: "₹3,499",
  },
  {
    name: "Fashion Colors",
    description: "Vibrant fantasy shades — pastels, pinks, blues and more.",
    price: "₹4,499",
  },
  {
    name: "Color Correction",
    description: "Expert correction for uneven, damaged or previously mismatched color.",
    price: "₹5,999",
  },
  {
    name: "Post-Color Gloss Treatment",
    description: "Shine-enhancing gloss to lock in color and add radiant luster.",
    price: "₹1,299",
  },
];

const HairColoring = () => {
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
          Hair Color
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          From subtle root touch-ups to bold fashion shades, our expert
          colorists use premium international brands to give you
          vibrant, long-lasting, and healthy-looking hair color.
        </p>

        {/* Services List */}
        <div className="mt-14 grid gap-5">
          {hairColorServices.map((service, index) => (
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

export default HairColoring;