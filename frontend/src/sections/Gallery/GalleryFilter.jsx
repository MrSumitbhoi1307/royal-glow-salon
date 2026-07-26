const filters = [
  "All",
  "Ladies",
  "Gents",
];

const GalleryFilter = ({ selected, setSelected }) => {
  return (
    <div className="mb-16 flex flex-wrap justify-center gap-4">

      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setSelected(filter)}
          className={`rounded-full border px-7 py-3 transition-all duration-300

          ${
            selected === filter
              ? "border-[#D4AF37] bg-[#D4AF37] text-black"
              : "border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37]"
          }

          `}
        >
          {filter}
        </button>
      ))}

    </div>
  );
};

export default GalleryFilter;