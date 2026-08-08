import React from "react";
import { motion } from "framer-motion";

import HeroText from "./HeroText";
import heroVideo from "../../assets/videos/hero.mp4";

import Reveal from "../../components/Common/Reveal";
import { fadeUp } from "../../animations/fadeUp";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-dvh overflow-hidden bg-[#0B0B0B]"
    >

      {/* Background Video */}

      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
        className="absolute inset-0 overflow-hidden z-0"
      >

        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

      </motion.div>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* Gradient */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-[1]" />

      {/* Gold Glow Left */}

      <motion.div

        animate={{
          y: [-20, 20, -20],
          opacity: [0.25, 0.45, 0.25],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-[150px] z-[1]"
      />

      {/* Gold Glow Right */}

      <motion.div

        animate={{
          y: [20, -20, 20],
          opacity: [0.2, 0.4, 0.2],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#D4AF37]/20 blur-[150px] z-[1]"
      />

      {/* Hero */}

      <Reveal variant={fadeUp}>

        <div className="relative z-10 h-full pt-20 pb-6">

          <HeroText />

        </div>

      </Reveal>

    </section>
  );
};

export default Hero;