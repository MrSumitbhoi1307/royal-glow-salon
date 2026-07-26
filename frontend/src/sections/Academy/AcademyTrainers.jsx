import trainer1 from "../../assets/images/academy/trainers/trainer1.jpeg";
import trainer2 from "../../assets/images/academy/trainers/trainer2.jpeg";
import trainer3 from "../../assets/images/academy/trainers/trainer3.jpeg";
import trainer4 from "../../assets/images/academy/trainers/trainer4.jpeg";
import trainer5 from "../../assets/images/academy/trainers/trainer5.jpeg";
import trainer6 from "../../assets/images/academy/trainers/trainer6.jpeg";
import trainer7 from "../../assets/images/academy/trainers/trainer7.jpeg";
import trainer8 from "../../assets/images/academy/trainers/trainer8.jpeg";

const trainers = [
  {
    name: "Anjali Sharma",
    role: "International Hair Expert",
    experience: "12+ Years",
    image: trainer1,
  },
  {
    name: "Riya Kapoor",
    role: "Celebrity Makeup Artist",
    experience: "10+ Years",
    image: trainer2,
  },
  {
    name: "Meera Patel",
    role: "Skin Care Specialist",
    experience: "9+ Years",
    image: trainer3,
  },
  {
    name: "Priya Desai",
    role: "Nail Art Expert",
    experience: "8+ Years",
    image: trainer4,
  },
  {
    name: "Rahul Verma",
    role: "Beard Grooming Expert",
    experience: "11+ Years",
    image: trainer5,
  },
  {
    name: "Arjun Mehta",
    role: "Men's Skin Treatment Specialist",
    experience: "10+ Years",
    image: trainer6,
  },
  {
    name: "Vikram Singh",
    role: "Hair Color Expert",
    experience: "9+ Years",
    image: trainer7,
  },
  {
    name: "Karan Malhotra",
    role: "Men's Haircut & Styling Expert",
    experience: "12+ Years",
    image: trainer8,
  },
];

const AcademyTrainers = () => {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Expert Trainers
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Learn From Industry Experts
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400">
            Our trainers are internationally certified beauty professionals with
            years of luxury salon and academy experience.
          </p>
        </div>

        {/* Trainers */}
        <div className="grid gap-8 mt-20 sm:grid-cols-2 lg:grid-cols-4">

          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111111] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_0_35px_rgba(212,175,55,0.25)]"
            >

              <div className="overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="h-[430px] w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 text-center">

                <h3 className="text-2xl font-semibold text-white">
                  {trainer.name}
                </h3>

                <p className="mt-2 text-[#D4AF37]">
                  {trainer.role}
                </p>

                <div className="mt-5 inline-block rounded-full border border-[#D4AF37] px-5 py-2">
                  <span className="font-semibold text-[#D4AF37]">
                    {trainer.experience}
                  </span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AcademyTrainers;