const TeamCard = ({ member }) => {
  const Icon = member.icon;

  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[30px]
        border
        border-white/10
        bg-[#111111]
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#D4AF37]
        hover:shadow-[0_25px_60px_rgba(212,175,55,0.18)]
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={member.image}
          alt={member.name}
          className="
            h-[420px]
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        {/* Experience Badge */}

        <div className="absolute left-6 top-6 rounded-full bg-[#D4AF37] px-5 py-2 text-sm font-semibold text-black shadow-lg">

          {member.experience}

        </div>

      </div>

      {/* Content */}

      <div className="p-8">

        {/* Icon */}

        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-all duration-500 group-hover:bg-[#D4AF37]">

          <Icon
            size={30}
            className="text-[#D4AF37] transition-all duration-500 group-hover:text-black"
          />

        </div>

        {/* Name */}

        <h3 className="text-3xl font-bold text-white">

          {member.name}

        </h3>

        {/* Role */}

        <p className="mt-3 text-lg font-medium text-[#D4AF37]">

          {member.role}

        </p>

        {/* Description */}

        <p className="mt-6 leading-8 text-gray-400">

          {member.description}

        </p>

      </div>

    </div>
  );
};

export default TeamCard;