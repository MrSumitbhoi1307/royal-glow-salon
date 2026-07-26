import gallery1 from "../../assets/images/academy/gallery/gallery1.jpeg";
import gallery2 from "../../assets/images/academy/gallery/gallery2.jpeg";
import gallery3 from "../../assets/images/academy/gallery/gallery3.jpeg";
import gallery4 from "../../assets/images/academy/gallery/gallery4.jpeg";
import gallery5 from "../../assets/images/academy/gallery/gallery5.jpeg";
import gallery6 from "../../assets/images/academy/gallery/gallery6.jpeg";
import gallery7 from "../../assets/images/academy/gallery/gallery7.jpeg";
import gallery8 from "../../assets/images/academy/gallery/gallery8.jpeg";

const gallery = [
  {
    id: 1,
    title: "Professional Hair Styling Training",
    image: gallery1,
  },
  {
    id: 2,
    title: "Bridal Makeup Practical",
    image: gallery2,
  },
  {
    id: 3,
    title: "Hair Coloring Workshop",
    image: gallery3,
  },
  {
    id: 4,
    title: "Nail Art & Skin Care Practical",
    image: gallery4,
  },
  {
    id: 5,
    title: "Boys Haircut & Beard Grooming Training",
    image: gallery5,
  },
  {
    id: 6,
    title: "Boys Facial & Skin Treatment Training",
    image: gallery6,
  },
  {
    id: 7,
    title: "Graduation Ceremony (Mixed)",
    image: gallery7,
  },
  {
    id: 8,
    title: "Certificate Ceremony",
    image: gallery8,
  },
];

const AcademyStudentGallery = () => {
  return (
    <section className="bg-[#0B0B0B] py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Student Gallery
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Inside Royal Glow Academy
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Explore our luxury academy, live practical sessions,
            classroom learning, certification ceremonies and student success stories.
          </p>

        </div>

        {/* Gallery */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {gallery.map((item) => (

            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]"
            >

              <div className="relative overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold text-white group-hover:text-[#D4AF37] transition">
                  {item.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default AcademyStudentGallery;