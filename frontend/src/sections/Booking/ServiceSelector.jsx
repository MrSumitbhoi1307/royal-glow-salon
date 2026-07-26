import bookingData from "./bookingData";
import useBooking from "../../hooks/useBooking";

const ServiceSelector = () => {

const { booking, setBooking } = useBooking();

const handleSelect = (service)=>{

setBooking({

...booking,

service:service.name,

price:service.price,

duration:service.duration,

});

};

return (

<section className="mt-24">

<div className="text-center">

<p className="text-sm uppercase tracking-[8px] text-[#D4AF37] font-semibold">
SELECT SERVICE
</p>

<h2 className="mt-5 text-5xl font-bold text-white">
Choose Your Premium Service
</h2>

<p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-400">
Select the luxury salon service you would like to book.
</p>

</div>

<div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 mt-16">

{bookingData.services.map((service)=>(

<div

key={service.id}

onClick={()=>handleSelect(service)}

className={`

cursor-pointer

rounded-[28px]

border

p-8

transition-all

duration-300

${
booking.service===service.name
?

"border-[#D4AF37] bg-[#D4AF37]/10 scale-105"

:

"border-white/10 bg-[#111111] hover:border-[#D4AF37] hover:-translate-y-2"

}

`}

>

<h3 className="text-3xl font-bold text-white">

{service.name}

</h3>

<p className="mt-5 text-4xl font-bold text-[#D4AF37]">

{service.displayPrice}

</p>

<p className="mt-3 text-gray-400">

Duration : {service.duration}

</p>

</div>

))}

</div>

</section>

);

};

export default ServiceSelector;