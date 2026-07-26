const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
      <span className="mb-3 text-xs uppercase tracking-[4px] text-[#D4AF37]">
        Scroll
      </span>

      <div className="flex h-14 w-8 justify-center rounded-full border-2 border-[#D4AF37]">
        <div className="mt-2 h-3 w-3 animate-bounce rounded-full bg-[#D4AF37]" />
      </div>
    </div>
  );
};

export default ScrollIndicator;