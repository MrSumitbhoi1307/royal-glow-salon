import { motion } from "framer-motion";

import Button from "../../components/Common/Button";
import HeroStats from "./HeroStats";

const HeroText = () => {
  return (
    <div className="relative z-10 flex h-full items-center justify-center px-6 pt-6 md:pt-10">

      <div className="max-w-6xl text-center">

        {/* Tagline */}

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-3 uppercase tracking-[6px] text-[#D4AF37] text-sm md:text-base"
        >
          Luxury Beauty Redefined
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.9,
          }}
          className="text-4xl md:text-6xl font-bold leading-tight text-white"
        >
          Experience Luxury Beauty

          <br />

          Like Never Before
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 1,
          }}
          className="mx-auto mt-4 max-w-3xl text-base md:text-lg leading-7 text-gray-300"
        >
          Premium Unisex Luxury Salon for Ladies, Gentlemen,
          Brides & Grooms.

          Experience world-class beauty, grooming and bridal
          services with our certified professionals in a luxurious
          environment.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.9,
            duration: 0.8,
          }}
          className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          <Button
            text="Book Appointment"
            to="/book-appointment"
          />

          <Button
            text="Explore Services"
            to="/services"
            className="border-white text-white hover:bg-white hover:text-black"
          />

        </motion.div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
        >
          <HeroStats />
        </motion.div>

      </div>

    </div>
  );
};

export default HeroText;
