import { useState } from "react";
import axios from "axios";
import useBooking from "../../hooks/useBooking";

const BookingForm = () => {
  const { booking, setBooking } = useBooking();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setBooking({
      ...booking,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!booking.service) {
      return alert("Please Select Service");
    }

    if (!booking.stylist) {
      return alert("Please Select Stylist");
    }

    if (!booking.date) {
      return alert("Please Select Date");
    }

    if (!booking.time) {
      return alert("Please Select Time");
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        "https://royal-glow-salon.onrender.com/api/appointment/book",
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          service: booking.service,
          stylist: booking.stylist,
          date: booking.date,
          time: booking.time,
          price: booking.price,
          duration: booking.duration,
          message: formData.message,
        }
      );

      if (data.success) {
        alert("Appointment Booked Successfully ✅");

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          address: "",
          message: "",
        });

        setBooking({
          service: "",
          stylist: "",
          date: "",
          time: "",
          duration: "",
          price: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Booking Failed ❌");
    }

    setLoading(false);
  };

  return (
    <section className="mt-28">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[8px] text-[#D4AF37]">
          CUSTOMER DETAILS
        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Tell Us About Yourself
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
          Fill in your information so our salon team can confirm your
          appointment.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-5xl"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="rounded-2xl border border-white/10 bg-[#111111] px-6 py-5 text-white outline-none focus:border-[#D4AF37]"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="rounded-2xl border border-white/10 bg-[#111111] px-6 py-5 text-white outline-none focus:border-[#D4AF37]"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="rounded-2xl border border-white/10 bg-[#111111] px-6 py-5 text-white outline-none focus:border-[#D4AF37]"
          />

          <input
            type="text"
            name="address"
            placeholder="City / Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="rounded-2xl border border-white/10 bg-[#111111] px-6 py-5 text-white outline-none focus:border-[#D4AF37]"
          />
        </div>

        <textarea
          rows="6"
          name="message"
          placeholder="Special Request (Optional)"
          value={formData.message}
          onChange={handleChange}
          className="mt-8 w-full rounded-2xl border border-white/10 bg-[#111111] px-6 py-5 text-white outline-none focus:border-[#D4AF37]"
        />

        <div className="mt-10 text-center">
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-[#D4AF37] px-12 py-5 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400 disabled:opacity-50"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;