import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "Do I need any previous experience to join?",
    answer:
      "No. Our courses are designed for complete beginners as well as professionals who want to upgrade their skills.",
  },
  {
    question: "Will I receive a certificate after course completion?",
    answer:
      "Yes. Every student receives a professional course completion certificate from Royal Glow Academy.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We provide 100% placement assistance through our salon network and partner beauty brands.",
  },
  {
    question: "Are practical sessions included?",
    answer:
      "Absolutely. Every course includes live practical training on real models under expert supervision.",
  },
  {
    question: "Can I pay the course fees in installments?",
    answer:
      "Yes. Easy installment options are available for selected professional courses.",
  },
  {
    question: "What is the duration of the Master Course?",
    answer:
      "Our Complete Master Course is a 12-month professional program with internship and placement support.",
  },
  {
    question: "Will I get internship opportunities?",
    answer:
      "Yes. Selected students receive internship opportunities at Royal Glow Salon and partner salons.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Simply click the 'Apply Now' button, complete the application form, and our admission team will contact you.",
  },
];

const AcademyFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            FAQ
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-lg text-gray-400 max-w-3xl mx-auto leading-8">
            Find answers to the most commonly asked questions about
            Royal Glow Academy, admissions, certification, placements
            and training.
          </p>

        </div>

        {/* FAQ */}

        <div className="mt-20 space-y-6">

          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#111111] overflow-hidden transition duration-500 hover:border-[#D4AF37]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-7 text-left"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.question}
                </h3>

                <ChevronDown
                  size={26}
                  className={`text-[#D4AF37] transition-transform duration-500 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  openIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-7 text-gray-400 leading-8">
                    {item.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AcademyFAQ;