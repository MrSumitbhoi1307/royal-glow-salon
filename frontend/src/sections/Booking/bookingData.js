import stylist1 from "../../assets/images/stylists/stylist-1.jpeg";
import stylist2 from "../../assets/images/stylists/stylist-2.jpeg";
import stylist3 from "../../assets/images/stylists/stylist-3.jpeg";
import stylist4 from "../../assets/images/stylists/stylist-4.jpeg";
const bookingData = {
  title: "BOOK APPOINTMENT",

  heading: "Reserve Your Luxury Salon Experience",

  description:
    "Choose your preferred service, expert stylist and appointment time. Our professionals are ready to provide you with a premium luxury salon experience.",

  // ===========================
  // SERVICES
  // ===========================

  services: [
    {
      id: 1,
      name: "Hair Styling",
      price: "₹499",
      duration: "45 Min",
    },
    {
      id: 2,
      name: "Hair Coloring",
      price: "₹2,499",
      duration: "2 Hours",
    },
    {
      id: 3,
      name: "Bridal Makeup",
      price: "₹14,999",
      duration: "4 Hours",
    },
    {
      id: 4,
      name: "Skin Treatment",
      price: "₹999",
      duration: "60 Min",
    },
    {
      id: 5,
      name: "Spa Therapy",
      price: "₹1,499",
      duration: "90 Min",
    },
    {
      id: 6,
      name: "Beard Grooming",
      price: "₹399",
      duration: "30 Min",
    },
  ],

  // ===========================
  // STYLISTS
  // ===========================

  stylists: [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Senior Hair Stylist",
    rating: "4.9",
    experience: "10+ Years",
    image: stylist1,
  },
  {
    id: 2,
    name: "Priya Kapoor",
    role: "Bridal Makeup Artist",
    rating: "5.0",
    experience: "8+ Years",
    image: stylist2,
  },
  {
    id: 3,
    name: "Neha Verma",
    role: "Hair Color Expert",
    rating: "4.8",
    experience: "7+ Years",
    image: stylist3,
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "Skin Specialist",
    rating: "4.9",
    experience: "9+ Years",
    image: stylist4,
  },
],

  // ===========================
  // AVAILABLE TIME SLOTS
  // ===========================

  timings: [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ],
};

export default bookingData;