import { useState } from "react";
import bookingData from "./bookingData";
import useBooking from "../../hooks/useBooking";

const DateTimePicker = () => {

  const { booking, setBooking } = useBooking();

  const [date, setDate] = useState("");

  const handleDate = (e) => {

    setDate(e.target.value);

    setBooking({
      ...booking,
      date: e.target.value,
    });

  };

  const handleTime = (time) => {

    setBooking({
      ...booking,
      time,
    });

  };

  return (

    <section className="mt-28">

      <div className="text-center">

        <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm">

          SELECT DATE & TIME

        </p>

        <h2 className="mt-5 text-5xl font-bold text-white">

          Choose Your Appointment

        </h2>

      </div>

      {/* Date */}

      <div className="mt-16">

        <input

          type="date"

          value={date}

          onChange={handleDate}

          className="w-full rounded-2xl border border-white/10 bg-[#111111] p-5 text-white"

        />

      </div>

      {/* Time */}

      <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-5 mt-10">

        {

          bookingData.timings.map((time)=>(

            <button

              key={time}

              onClick={()=>handleTime(time)}

              className={`

              rounded-xl

              py-4

              transition

              duration-300

              ${

                booking.time===time

                ?

                "bg-[#D4AF37] text-black"

                :

                "bg-[#111111] text-white border border-white/10 hover:border-[#D4AF37]"

              }

              `}

            >

              {time}

            </button>

          ))

        }

      </div>

    </section>

  );

};

export default DateTimePicker;