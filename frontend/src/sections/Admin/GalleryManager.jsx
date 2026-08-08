import { useEffect, useState } from "react";
import axios from "axios";
import { Plus, Trash2, Eye } from "lucide-react";

const GalleryManager = () => {
  const [gallery, setGallery] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // ==========================
  // GET GALLERY
  // ==========================

  const fetchGallery = async () => {
    try {
      const { data } = await axios.get(
        "https://royal-glow-salon.onrender.com/api/gallery"
      );

      if (data.success) {
        setGallery(data.gallery);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // ==========================
  // UPLOAD IMAGE
  // ==========================

  const uploadImage = async () => {
    if (!file) {
      return alert("Please Select Image");
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", "Royal Glow");
      formData.append("image", file);

      const { data } = await axios.post(
        "https://royal-glow-salon.onrender.com/api/gallery",
        formData
      );

      if (data.success) {
        alert("Image Uploaded Successfully");

        setFile(null);

        fetchGallery();
      }
    } catch (error) {
      console.log(error);

      alert("Upload Failed");
    }

    setLoading(false);
  };

  // ==========================
  // DELETE IMAGE
  // ==========================

  const deleteImage = async (id) => {
    if (!window.confirm("Delete Image ?")) return;

    try {
      const { data } = await axios.delete(
        `https://royal-glow-salon.onrender.com/api/gallery/${id}`
      );

      if (data.success) {
        fetchGallery();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-3xl border border-[#D4AF37]/20 bg-[#111111] p-8">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold text-white">
          Gallery Manager
        </h2>

        <div className="flex items-center gap-4">

          <label className="cursor-pointer rounded-xl bg-[#D4AF37] px-5 py-3 font-semibold text-black transition hover:scale-105">

            <Plus size={18} className="inline mr-2" />

            Choose Image

            <input
              hidden
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files[0])}
            />

          </label>

          <button
            onClick={uploadImage}
            disabled={loading}
            className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:scale-105 disabled:opacity-50"
          >
            {loading ? "Uploading..." : "Upload"}
          </button>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {gallery.map((item) => (

          <div
            key={item._id}
            className="overflow-hidden rounded-2xl border border-white/10 bg-black"
          >

            <img
              src={item.image}
              alt=""
              className="h-64 w-full object-cover"
            />

            <div className="flex justify-center gap-3 p-5">

              <button
                onClick={() => window.open(item.image)}
                className="rounded-xl bg-blue-600 p-3"
              >

                <Eye
                  size={18}
                  className="text-white"
                />

              </button>

              <button
                onClick={() => deleteImage(item._id)}
                className="rounded-xl bg-red-600 p-3"
              >

                <Trash2
                  size={18}
                  className="text-white"
                />

              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default GalleryManager;