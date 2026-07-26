import galleryData from "./galleryData";
import GalleryCard from "./GalleryCard";

const GalleryGrid = ({ selected }) => {
  const filteredGallery =
    selected === "All"
      ? galleryData
      : galleryData.filter((item) => item.category === selected);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {filteredGallery.map((item) => (
        <GalleryCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
};

export default GalleryGrid;