const GalleryCard = ({ item }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111111] shadow-xl transition-all duration-500 hover:border-[#D4AF37]/60">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.service}
          className="h-130 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"></div>

      {/* Category Badge */}
      <div className="absolute top-5 left-5 rounded-full border border-[#D4AF37]/40 bg-black/70 px-4 py-2 backdrop-blur-md">

        <span className="text-sm font-medium text-[#D4AF37]">
          {item.category}
        </span>

      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-8 p-7 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

        <h3 className="text-3xl font-bold text-white">
          {item.service}
        </h3>

        <p className="mt-2 text-lg text-gray-300">
          {item.client}
        </p>

      </div>

    </div>
  );
};

export default GalleryCard;