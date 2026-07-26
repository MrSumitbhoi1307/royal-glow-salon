const features = [
  {
    title: "Certified Beauty Experts",
    description:
      "Highly trained professionals delivering world-class beauty and grooming services.",
  },
  {
    title: "Luxury Hair Styling",
    description:
      "Premium haircuts, styling, hair coloring, keratin and advanced hair treatments.",
  },
  {
    title: "Bridal & Groom Makeover",
    description:
      "Exclusive bridal makeup, groom styling and complete wedding makeover packages.",
  },
  {
    title: "Premium Skin Care",
    description:
      "Luxury facials, HydraFacial, skin treatments and rejuvenation therapies.",
  },
  {
    title: "International Products",
    description:
      "We use only premium international brands for exceptional quality and safety.",
  },
  {
    title: "Luxury Salon Experience",
    description:
      "Elegant black & gold interiors with five-star hospitality and comfort.",
  },
];

const AboutFeatures = () => {
  return (
    <div className="mt-10 grid gap-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="rounded-2xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-lg p-5 transition-all duration-500 hover:border-[#D4AF37] hover:bg-white/10"
        >
          <h3 className="text-xl font-semibold text-white">
            {feature.title}
          </h3>

          <p className="mt-2 leading-7 text-gray-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AboutFeatures;