import bookingData from "./bookingData";
import useBooking from "../../hooks/useBooking";

const StylistSelector=()=>{

const {booking,setBooking}=useBooking();

return(

<section className="mt-28">

<div className="text-center">

<p className="text-sm font-semibold uppercase tracking-[8px] text-[#D4AF37]">

OUR EXPERTS

</p>

<h2 className="mt-5 text-5xl font-bold text-white">

Choose Your Stylist

</h2>

</div>

<div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 mt-16">

{

bookingData.stylists.map((stylist)=>(

<div

key={stylist.id}

onClick={()=>setBooking({

...booking,

stylist:stylist.name

})}

className={`

overflow-hidden

rounded-[28px]

cursor-pointer

border

transition

duration-300

${

booking.stylist===stylist.name

?

"border-[#D4AF37] bg-[#D4AF37]/10 scale-105"

:

"border-white/10 bg-[#111111] hover:border-[#D4AF37]"

}

`}

>

<img

src={stylist.image}

className="h-[320px] w-full object-cover"

/>

<div className="p-6">

<h3 className="text-2xl font-bold text-white">

{stylist.name}

</h3>

<p className="text-[#D4AF37] mt-2">

{stylist.role}

</p>

<div className="flex justify-between mt-5 text-gray-400">

<span>

⭐ {stylist.rating}

</span>

<span>

{stylist.experience}

</span>

</div>

</div>

</div>

))

}

</div>

</section>

);

};

export default StylistSelector;