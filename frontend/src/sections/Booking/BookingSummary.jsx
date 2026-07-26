import useBooking from "../../hooks/useBooking";

const BookingSummary = () => {

const { booking } = useBooking();

return(

<section className="mt-24">

<div className="rounded-3xl border border-[#D4AF37]/20 bg-[#111111] p-10">

<h2 className="text-4xl font-bold text-white">

Review Your Appointment

</h2>

<div className="mt-10 space-y-5 text-lg">

<div className="flex justify-between">

<span className="text-gray-400">

Service

</span>

<span className="text-white">

{booking.service || "-"}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Stylist

</span>

<span className="text-white">

{booking.stylist || "-"}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Date

</span>

<span className="text-white">

{booking.date || "-"}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Time

</span>

<span className="text-white">

{booking.time || "-"}

</span>

</div>

<div className="flex justify-between">

<span className="text-gray-400">

Duration

</span>

<span className="text-white">

{booking.duration || "-"}

</span>

</div>

<hr className="border-white/10"/>

<div className="flex justify-between text-2xl">

<span className="text-[#D4AF37]">

Total

</span>

<span className="font-bold text-[#D4AF37]">

₹{booking.price || 0}

</span>

</div>

</div>

</div>

</section>

);

};

export default BookingSummary;