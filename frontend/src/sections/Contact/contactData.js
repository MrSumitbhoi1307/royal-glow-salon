import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const contactData = {
  title: "CONTACT US",

  heading: "Let's Begin Your Luxury Experience",

  description:
    "Whether you're looking for a stunning makeover, premium hair styling, luxurious spa therapies or expert grooming, our team is here to provide an unforgettable salon experience.",

  address: {
    icon: MapPin,
    title: "Address",
    value: `Royal Glow Salon
Near Main Market,
Shirpur,
Dhule,
Maharashtra - 425405`,
  },

  phone: {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
  },

  whatsapp: {
    icon: FaWhatsapp,
    title: "WhatsApp",
    value: "+91 98765 43210",
  },

  email: {
    icon: Mail,
    title: "Email",
    value: "info@royalglowsalon.com",
  },

  instagram: {
    icon: FaInstagram,
    title: "Instagram",
    value: "@royalglowsalon",
  },

  facebook: {
    icon: FaFacebookF,
    title: "Facebook",
    value: "Royal Glow Salon",
  },

  workingHours: {
    icon: Clock3,
    title: "Working Hours",

    weekday: "Monday - Saturday",
    weekdayTime: "10:00 AM - 8:00 PM",

    sunday: "Sunday",
    sundayTime: "10:00 AM - 5:00 PM",
  },

  services: [
    "Hair Styling",
    "Hair Coloring",
    "Bridal Makeup",
    "Skin Care",
    "Spa & Massage",
    "Manicure & Pedicure",
    "Haircut",
    "Beard Grooming",
    "Hair Wash",
    "Head Massage",
    "Facial Treatment",
  ],
};

export default contactData;