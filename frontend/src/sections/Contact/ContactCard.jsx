const ContactCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-[#111111]
        p-7
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4AF37]
        hover:shadow-[0_20px_60px_rgba(212,175,55,0.18)]
      "
    >
      {/* Icon */}

      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/10 transition-all duration-300 group-hover:bg-[#D4AF37]">

        <Icon
          size={30}
          className="text-[#D4AF37] transition-all duration-300 group-hover:text-black"
        />

      </div>

      {/* Title */}

      <h3 className="mb-4 text-2xl font-bold text-white">
        {item.title}
      </h3>

      {/* Working Hours */}

      {item.title === "Working Hours" ? (
        <div className="space-y-3 text-gray-300 leading-7">

          <div>
            <p className="font-semibold text-white">
              {item.weekday}
            </p>

            <p>{item.weekdayTime}</p>
          </div>

          <div>
            <p className="font-semibold text-white">
              {item.sunday}
            </p>

            <p>{item.sundayTime}</p>
          </div>

        </div>
      ) : (
        <p className="whitespace-pre-line leading-8 text-gray-300">
          {item.value}
        </p>
      )}
    </div>
  );
};

export default ContactCard;