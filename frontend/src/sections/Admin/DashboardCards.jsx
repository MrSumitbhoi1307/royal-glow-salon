import { useEffect, useState } from "react";
import axios from "axios";
import {
  CalendarDays,
  IndianRupee,
  Users,
  Scissors,
  Image,
  Star,
} from "lucide-react";

const DashboardCards = () => {
  const [stats, setStats] = useState({
    appointments: 0,
    services: 0,
    stylists: 0,
    gallery: 0,
    revenue: 0,
    reviews: "0",
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get(
        "https://royal-glow-salon.onrender.com/api/dashboard"
      );

      if (data.success) {
        setStats({
          appointments: data.stats.appointments,
          services: data.stats.services,
          stylists: data.stats.stylists,
          gallery: data.stats.gallery,
          revenue: data.stats.revenue || 0,
          reviews: data.stats.reviews || "0",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      title: "Appointments",
      value: stats.appointments,
      icon: CalendarDays,
      color: "text-blue-400",
    },

    {
      title: "Revenue",
      value: `₹${stats.revenue}`,
      icon: IndianRupee,
      color: "text-green-400",
    },

    {
      title: "Stylists",
      value: stats.stylists,
      icon: Users,
      color: "text-yellow-400",
    },

    {
      title: "Services",
      value: stats.services,
      icon: Scissors,
      color: "text-pink-400",
    },

    {
      title: "Gallery",
      value: stats.gallery,
      icon: Image,
      color: "text-purple-400",
    },

    {
      title: "Reviews",
      value: stats.reviews,
      icon: Star,
      color: "text-orange-400",
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-3xl border border-[#D4AF37]/20 bg-[#111111] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_20px_50px_rgba(212,175,55,.15)]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400">
                  {card.title}
                </p>

                <h2 className="mt-4 text-4xl font-bold text-white">
                  {card.value}
                </h2>
              </div>

              <div className="rounded-2xl bg-[#0B0B0B] p-5">
                <Icon
                  size={38}
                  className={card.color}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;