import hairStylingLadies from "../../assets/images/services/hair-styling-ladies.jpeg";
import hairColoringLadies from "../../assets/images/services/hair-coloring-ladies.jpeg";
import bridalMakeup from "../../assets/images/services/bridal-makeup.jpeg";
import skinCareLadies from "../../assets/images/services/skin-care-ladies.jpeg";
import spaLadies from "../../assets/images/services/spa-ladies.jpeg";
import manicurePedicureLadies from "../../assets/images/services/manicure-pedicure-ladies.jpeg";

import haircutGents from "../../assets/images/services/haircut-gents.jpeg";
import beardGrooming from "../../assets/images/services/beard-grooming.jpeg";
import facialGents from "../../assets/images/services/facial-gents.jpeg";
import spaGents from "../../assets/images/services/spa-gents.jpeg";
import hairWashGents from "../../assets/images/services/hair-wash-gents.jpeg";
import headMassageGents from "../../assets/images/services/head-massage-gents.jpeg";

const servicesData = [
  // =========================
  // Ladies Services
  // =========================

  {
    id: 1,
    title: "Hair Styling",
    category: "Ladies",
    image: hairStylingLadies,
    description:
      "Luxury hair styling by expert professionals for every occasion.",
      link: "/services/ladies/hair-styling",
  },
  {
    id: 2,
    title: "Hair Coloring",
    category: "Ladies",
    image: hairColoringLadies,
    description:
      "Premium hair coloring with world-class products and techniques.",
      link: "/services/ladies/hair-coloring",
  },
  {
    id: 3,
    title: "Bridal Makeup",
    category: "Ladies",
    image: bridalMakeup,
    description:
      "Exclusive bridal makeover for your special day.",
      link: "/services/ladies/bridal-makeup",
  },
  {
    id: 4,
    title: "Skin Care",
    category: "Ladies",
    image: skinCareLadies,
    description:
      "Advanced skin treatments for naturally glowing skin.",
      link: "/services/ladies/skin-care",
  },
  {
    id: 5,
    title: "Spa & Massage",
    category: "Ladies",
    image: spaLadies,
    description:
      "Relaxing luxury spa therapy for complete rejuvenation.",
      link: "/services/ladies/spa-massage",
  },
  {
    id: 6,
    title: "Manicure & Pedicure",
    category: "Ladies",
    image: manicurePedicureLadies,
    description:
      "Luxury manicure and pedicure services for beautiful and healthy nails.",
      link: "/services/ladies/manicure-pedicure",
  },

  // =========================
  // Gents Services
  // =========================

  {
    id: 7,
    title: "Haircut & Styling",
    category: "Gents",
    image: haircutGents,
    description:
      "Modern haircuts with premium styling by expert barbers.",
      link: "/services/gents/haircut-styling",
  },
  {
    id: 8,
    title: "Beard Grooming",
    category: "Gents",
    image: beardGrooming,
    description:
      "Professional beard shaping and grooming services.",
      link: "/services/gents/beard-grooming",
  },
  {
    id: 9,
    title: "Facial Treatment",
    category: "Gents",
    image: facialGents,
    description:
      "Luxury facial treatments for healthy and refreshed skin.",
      link: "/services/gents/facial-treatment",
  },
  {
    id: 10,
    title: "Spa & Massage",
    category: "Gents",
    image: spaGents,
    description:
      "Premium spa therapies for ultimate relaxation and wellness.",
      link: "/services/gents/spa-massage",
  },
  {
    id: 11,
    title: "Hair Wash",
    category: "Gents",
    image: hairWashGents,
    description:
      "Premium hair wash using luxury hair care products for a refreshing experience.",
      link: "/services/gents/hair-wash",
  },
  {
    id: 12,
    title: "Head Massage",
    category: "Gents",
    image: headMassageGents,
    description:
      "Relaxing head massage with premium aromatic oils to reduce stress and refresh your mind.",
      link: "/services/gents/head-massage",
  },
];

export default servicesData;