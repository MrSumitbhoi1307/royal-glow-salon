import { useState } from "react";
import GalleryHeader from "./GalleryHeader";
import GalleryFilter from "./GalleryFilter";
import GalleryGrid from "./GalleryGrid";

const Gallery = () => {
  const [selected, setSelected] = useState("All");

  return (
    <section
      id="gallery"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <GalleryHeader />

        <GalleryFilter
          selected={selected}
          setSelected={setSelected}
        />

        <GalleryGrid
          selected={selected}
        />

      </div>
    </section>
  );
};

export default Gallery;