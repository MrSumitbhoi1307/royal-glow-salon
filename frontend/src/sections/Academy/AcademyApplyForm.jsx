import { useState } from "react";
import axios from "axios";
import academyData from "./academyData";

const AcademyApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.course) {
      newErrors.course = "Please select a course";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setSubmitting(true);

      const { data } = await axios.post(
        "https://royal-glow-salon.onrender.com/api/academy",
        {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
        }
      );

      if (data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="bg-[#0B0B0B] py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10 text-4xl text-[#D4AF37]">
            ✓
          </div>
          <h2 className="text-4xl font-bold text-white">
            Application Received!
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Thank you for applying to Royal Glow Academy. Our admissions
            team will reach out to you within 24 hours to guide you through
            the next steps.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                course: "",
                message: "",
              });
            }}
            className="mt-10 rounded-full border border-[#D4AF37] px-8 py-3 font-semibold text-[#D4AF37] transition duration-300 hover:bg-[#D4AF37] hover:text-black"
          >
            Submit Another Application
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#0B0B0B] py-28">
      <div className="mx-auto max-w-3xl px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">
            Join The Academy
          </p>
          <h2 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl">
            Apply For Your Course
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Fill in your details below and our admissions team will get in
            touch to guide you through enrollment.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-16 space-y-6 rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-12"
        >

          {/* Full Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full rounded-xl border bg-[#0B0B0B] px-5 py-4 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] ${
                errors.fullName ? "border-red-500" : "border-white/10"
              }`}
            />
            {errors.fullName && (
              <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>
            )}
          </div>

          {/* Email + Phone */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-xl border bg-[#0B0B0B] px-5 py-4 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] ${
                  errors.email ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className={`w-full rounded-xl border bg-[#0B0B0B] px-5 py-4 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-[#D4AF37] ${
                  errors.phone ? "border-red-500" : "border-white/10"
                }`}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* Course Select */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Select Course
            </label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className={`w-full rounded-xl border bg-[#0B0B0B] px-5 py-4 text-white outline-none transition duration-300 focus:border-[#D4AF37] ${
                errors.course ? "border-red-500" : "border-white/10"
              }`}
            >
              <option value="" disabled>
                Choose a course
              </option>
              {academyData.courses.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title} ({course.duration})
                </option>
              ))}
            </select>
            {errors.course && (
              <p className="mt-2 text-sm text-red-500">{errors.course}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Message <span className="text-gray-500">(optional)</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell us anything else you'd like us to know..."
              className="w-full resize-none rounded-xl border border-white/10 bg-[#0B0B0B] px-5 py-4 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-[#D4AF37]"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-[#D4AF37] py-4 font-semibold text-black transition duration-300 hover:bg-[#c19f2f] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {submitting ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </section>
  );
};

export default AcademyApplyForm;