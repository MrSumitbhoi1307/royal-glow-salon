import bannerImage from "../../assets/images/contact/contact-banner.jpeg";

const ContactBanner = () => {
  return (
    <section className="mt-20">

      <div
        className="
          relative
          overflow-hidden
         rounded-4xl
          border
          border-[#D4AF37]/20
          shadow-2xl
        "
      >

        {/* Image */}

        <img
          src={bannerImage}
          alt="Royal Glow Salon"
          className="
            h-105
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/45"></div>

        {/* Content */}

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="max-w-4xl text-center px-8">

            <p className="mb-4 uppercase tracking-[8px] text-[#D4AF37] font-semibold">
              Royal Glow Salon
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight">

              Experience Luxury
              <br />
              Beauty & Grooming

            </h2>

            <p className="mt-6 text-xl text-gray-200 leading-9">

              Discover premium hair styling, bridal makeup,
              luxury spa therapies and professional grooming
              inside an elegant black & gold salon experience.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactBanner;