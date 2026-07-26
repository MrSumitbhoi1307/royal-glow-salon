import {
  Scissors,
  Sparkles,
  Palette,
  HeartHandshake,
} from "lucide-react";

import member1 from "../../assets/images/team/member1.jpeg";
import member2 from "../../assets/images/team/member2.jpeg";
import member3 from "../../assets/images/team/member3.jpeg";
import member4 from "../../assets/images/team/member4.jpeg";

const teamData = [
  {
    id: 1,
    image: member1,
    name: "Aarav Sharma",
    role: "Senior Hair Stylist",
    experience: "10+ Years Experience",
    icon: Scissors,
    description:
      "Expert in luxury haircuts, styling and premium grooming.",
  },

  {
    id: 2,
    image: member2,
    name: "Priya Kapoor",
    role: "Bridal Makeup Artist",
    experience: "8+ Years Experience",
    icon: Sparkles,
    description:
      "Luxury bridal makeup specialist with flawless finishing.",
  },

  {
    id: 3,
    image: member3,
    name: "Neha Verma",
    role: "Hair Color Expert",
    experience: "9+ Years Experience",
    icon: Palette,
    description:
      "International hair coloring and premium transformation expert.",
  },

  {
    id: 4,
    image: member4,
    name: "Rahul Mehta",
    role: "Skin & Spa Specialist",
    experience: "11+ Years Experience",
    icon: HeartHandshake,
    description:
      "Luxury facials, skin treatments and relaxing spa therapies.",
  },
];

export default teamData;