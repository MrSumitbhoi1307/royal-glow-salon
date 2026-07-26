import bookingData from "./bookingData";

import heroImage from "../../assets/images/booking/booking-banner.jpeg";

const BookingHero = () => {
  return (
    <section className="relative overflow-hidden">

      <img
        src={heroImage}
        alt="Booking Banner"
        className="h-[650px] w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[8px] text-[#D4AF37]">

            {bookingData.title}

          </p>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-white">

            {bookingData.heading}

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">

            {bookingData.description}

          </p>

        </div>

      </div>

    </section>
  );
};

export default BookingHero;