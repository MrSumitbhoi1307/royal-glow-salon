const WhyChooseCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-[#111111]
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#D4AF37]
        hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]
      "
    >
      {/* Gold Glow */}

      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/10 blur-3xl transition-all duration-500 group-hover:bg-[#D4AF37]/20"></div>

      {/* Icon */}

      <div
        className="
          relative
          z-10
          flex
          h-18
          w-18
          items-center
          justify-center
          rounded-full
          bg-[#D4AF37]/10
          transition-all
          duration-500
          group-hover:bg-[#D4AF37]
        "
      >
        <Icon
          size={34}
          className="text-[#D4AF37] transition-all duration-500 group-hover:text-black"
        />
      </div>

      {/* Title */}

      <h3 className="relative z-10 mt-8 text-2xl font-bold text-white">
        {item.title}
      </h3>

      {/* Description */}

      <p className="relative z-10 mt-5 leading-8 text-gray-400">
        {item.description}
      </p>
    </div>
  );
};

export default WhyChooseCard;