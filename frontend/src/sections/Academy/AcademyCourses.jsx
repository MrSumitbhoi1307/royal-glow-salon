const courses = [
  {
    title: "Professional Hair Styling",
    duration: "3 Months",
    fees: "₹35,000",
    description:
      "Master haircutting, blow drying, styling techniques and luxury salon finishing.",
  },
  {
    title: "Hair Coloring Master",
    duration: "2 Months",
    fees: "₹28,000",
    description:
      "Learn global hair coloring, balayage, highlights and color correction.",
  },
  {
    title: "Professional Makeup Artist",
    duration: "4 Months",
    fees: "₹55,000",
    description:
      "Bridal, HD, Airbrush, Fashion & Celebrity Makeup with live practical sessions.",
  },
  {
    title: "Skin & Facial Expert",
    duration: "2 Months",
    fees: "₹25,000",
    description:
      "Advanced facial treatments, skincare consultation and luxury spa techniques.",
  },
  {
    title: "Nail Art Specialist",
    duration: "2 Months",
    fees: "₹22,000",
    description:
      "Gel extensions, acrylic nails, nail art designs and luxury manicure services.",
  },
  {
    title: "Complete Master Course",
    duration: "12 Months",
    fees: "₹1,25,000",
    description:
      "Complete professional salon training with internship and placement assistance.",
  },
];

const AcademyCourses = () => {
  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Our Courses
          </p>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Professional Beauty Courses
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-400 leading-8">
            Industry-ready beauty education with luxury practical training,
            internationally inspired curriculum and professional certification.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-20">

          {courses.map((course, index) => (

            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#111111] p-8 transition-all duration-500 hover:border-[#D4AF37] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
            >

              <h3 className="text-3xl font-bold text-white">
                {course.title}
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                {course.description}
              </p>

              {/* Details */}

              <div className="mt-8 space-y-3">

                <div className="flex items-center gap-3">
                  <span className="text-[#D4AF37]">✔</span>
                  <span className="text-gray-300">
                    Duration : {course.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#D4AF37]">✔</span>
                  <span className="text-gray-300">
                    Fees : {course.fees}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#D4AF37]">✔</span>
                  <span className="text-gray-300">
                    Live Practical Training
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#D4AF37]">✔</span>
                  <span className="text-gray-300">
                    Industry Certificate
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[#D4AF37]">✔</span>
                  <span className="text-gray-300">
                    Placement Assistance
                  </span>
                </div>

              </div>

              {/* Button */}

              <button className="mt-10 w-full rounded-full border border-[#D4AF37] py-3 text-[#D4AF37] font-semibold transition-all duration-500 hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                Enroll Now
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default AcademyCourses;