import { useState } from "react";
import Button from "../../components/common/Button";
import AboutFeatures from "./AboutFeatures";
import { X } from "lucide-react";

const AboutContent = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="max-w-xl">
      {/* Small Heading */}
      <p className="mb-3 uppercase tracking-[5px] text-[#D4AF37] font-medium">
        About Royal Glow Salon
      </p>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
        Where Luxury Meets
        <br />
        Perfection
      </h2>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-gray-300">
        Royal Glow Salon is a premium luxury unisex salon designed for
        ladies, gentlemen, brides and grooms. We combine world-class
        beauty expertise with luxurious interiors to deliver an
        unforgettable salon experience.
      </p>

      {/* Features (short list) */}
      <div className="mt-8 space-y-5">
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-[#D4AF37]" />
          <p className="text-gray-300">Certified Professional Hair Stylists</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-[#D4AF37]" />
          <p className="text-gray-300">Luxury Bridal Makeup & Grooming</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-[#D4AF37]" />
          <p className="text-gray-300">Premium Hair, Skin & Spa Treatments</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 rounded-full bg-[#D4AF37]" />
          <p className="text-gray-300">International Quality Products & Hygiene</p>
        </div>
      </div>

      {/* Experience + Button */}
      <div className="mt-10 flex items-center gap-8">
        <div>
          <h3 className="text-5xl font-bold text-[#D4AF37]">10+</h3>
          <p className="mt-2 text-gray-300">Years Experience</p>
        </div>

        <Button text="Learn More" onClick={() => setShowModal(true)} />
      </div>

      {/* Full-Screen Modal */}
      {showModal && (
        <div className="fixed inset-0 z-100 bg-[#0B0B0B]/98 backdrop-blur-xl overflow-y-auto">
          <div className="relative mx-auto max-w-5xl px-6 py-16">

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="fixed top-6 right-6 z-110 flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Modal Heading */}
            <div className="text-center">
              <p className="mb-3 uppercase tracking-[5px] text-[#D4AF37] font-medium">
                Why Choose Us
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Our Premium Features
              </h2>
            </div>

            {/* Features List */}
            <AboutFeatures />

          </div>
        </div>
      )}
    </div>
  );
};

export default AboutContent;