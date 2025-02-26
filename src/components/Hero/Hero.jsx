import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative  innerWidth paddings ">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between  z-10">
        {/* Left Section */}
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
          className="hero-left flex flex-col justify-center items-center md:items-start py-14 md:py-0"
        >
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug">
              Innovative <br />
              Tech for <br />
              <span className="text-blue-500">Everyday</span> Life
            </h1>
            <p className="text-gray-600 xl:max-w-lg">
              Empowering homes, businesses, and individuals with smart solutions
              in automation, software, and IoT integration.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="btn flex items-center gap-2 bg-blue-500 text-white py-2 px-6 rounded-md mt-4 hover:bg-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center items-center mt-8 md:mt-0">
          <img
            src="./Home.svg"
            alt="Tech illustration"
            className="w-[350px] md:w-[550px] xl-w-[700px] rounded drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
