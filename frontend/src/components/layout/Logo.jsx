const Logo = () => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">

      {/* Luxury Logo Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] bg-black/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
        <span className="text-[#D4AF37] text-2xl font-bold">
          R
        </span>
      </div>

      {/* Brand Name */}
      <div>
        <h1 className="text-xl md:text-2xl font-bold tracking-[3px] text-white">
          ROYAL{" "}
          <span className="text-[#D4AF37]">
            GLOW
          </span>
        </h1>

        <p className="text-[11px] uppercase tracking-[4px] text-gray-400">
          Luxury Beauty Redefined
        </p>
      </div>

    </div>
  );
};

export default Logo;