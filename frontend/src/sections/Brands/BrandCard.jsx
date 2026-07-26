const BrandCard = ({ brand }) => {
  return (
    <div
      className="
        group
        flex
        h-44
        items-center
        justify-center
        rounded-3xl
        border
        border-[#D4AF37]/20
        bg-gradient-to-br
        from-[#FAF8F5]
        to-[#ECE7DF]
        p-8
        transition-all
        duration-500
        hover:-translate-y-3
        hover:border-[#D4AF37]
        hover:shadow-[0_25px_60px_rgba(212,175,55,0.28)]
      "
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="
          max-h-24
          w-auto
          object-contain
          transition-all
          duration-500
          group-hover:scale-110
        "
      />
    </div>
  );
};

export default BrandCard;