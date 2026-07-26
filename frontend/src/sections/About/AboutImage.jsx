import { useEffect, useRef, useState } from "react";
import about1 from "../../assets/images/about/about-1.jpg.jpeg";
import about2 from "../../assets/images/about/about-2.jpg.jpeg";
import about3 from "../../assets/images/about/about-3.jpg.jpeg";

const AboutImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.25 }
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">

      <div className="relative overflow-hidden rounded-4xl shadow-2xl">
        <img
          src={about1}
          alt="Royal Glow Salon"
          style={{
            transform: isVisible ? "scale(1)" : "scale(1.15)",
            opacity: isVisible ? 1 : 0,
            transition: "transform 1.5s ease-out, opacity 1.5s ease-out",
          }}
          className="w-full h-150 object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-3 p-3">

          <div className="overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl">
            <img
              src={about2}
              alt="Ladies Luxury Salon"
              style={{
                transform: isVisible ? "scale(1)" : "scale(1.15)",
                opacity: isVisible ? 1 : 0,
                transition: "transform 1.5s ease-out 0.2s, opacity 1.5s ease-out 0.2s",
              }}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl">
            <img
              src={about3}
              alt="Gents Luxury Salon"
              style={{
                transform: isVisible ? "scale(1)" : "scale(1.15)",
                opacity: isVisible ? 1 : 0,
                transition: "transform 1.5s ease-out 0.35s, opacity 1.5s ease-out 0.35s",
              }}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

        </div>
      </div>

      <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[#D4AF37]/20 blur-3xl"></div>

    </div>
  );
};

export default AboutImage;