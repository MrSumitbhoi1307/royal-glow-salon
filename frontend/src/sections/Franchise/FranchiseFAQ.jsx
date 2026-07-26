import { useState } from "react";

const faq = [
  {
    question: "What is the minimum investment required?",
    answer:
      "Our franchise investment starts from ₹15 Lakhs depending on the city, salon size and business model.",
  },
  {
    question: "Do I need salon experience?",
    answer:
      "No. Royal Glow Academy provides complete training for salon owners and staff.",
  },
  {
    question: "Do you provide interior design?",
    answer:
      "Yes. We provide complete luxury black & gold salon interior planning and setup guidance.",
  },
  {
    question: "Will I receive marketing support?",
    answer:
      "Yes. Digital marketing, branding, launch campaigns and promotional strategies are included.",
  },
  {
    question: "How long does salon setup take?",
    answer:
      "Generally between 45 to 90 days depending on location and project size.",
  },
  {
    question: "Do you provide lifetime support?",
    answer:
      "Yes. Business consultation, software support and operational guidance are provided continuously.",
  },
];

const FranchiseFAQ = () => {

  const [open, setOpen] = useState(0);

  return (

    <section className="bg-[#0B0B0B] py-28">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            FAQ
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

        </div>

        <div className="mt-20 space-y-5">

          {faq.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-[#111111]"
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-8 text-left"
              >

                <span className="text-xl font-semibold text-white">
                  {item.question}
                </span>

                <span className="text-3xl text-[#D4AF37]">
                  {open === index ? "−" : "+"}
                </span>

              </button>

              {open === index && (

                <div className="px-8 pb-8">

                  <p className="text-gray-400 leading-8">
                    {item.answer}
                  </p>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default FranchiseFAQ;