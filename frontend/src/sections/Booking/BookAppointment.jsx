import BookingHero from "../sections/Booking/BookingHero";
import ServiceSelector from "../sections/Booking/ServiceSelector";
import StylistSelector from "../sections/Booking/StylistSelector";
import DateTimePicker from "../sections/Booking/DateTimePicker";
import BookingForm from "../sections/Booking/BookingForm";
import BookingSummary from "../sections/Booking/BookingSummary";

const BookAppointment = () => {
  return (
    <>
      <BookingHero />

      <section className="bg-[#0B0B0B] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <ServiceSelector />

          <StylistSelector />

          <DateTimePicker />

          <BookingForm />


          <BookingSummary />

        </div>

      </section>
    </>
  );
};
export default BookAppointment;