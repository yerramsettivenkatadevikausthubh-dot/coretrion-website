"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PCBBackground from "./PCBBackground";

const slides = [
  {
    title: "CORETRION™",
    subtitle: "Intelligent Computing Processor",
    description:
      "32-bit hybrid compute architecture combining CPU, SIMD, Tensor and GPU acceleration.",
  },

  {
    title: "CORELINK™",
    subtitle: "Compute Interconnect Fabric",
    description:
      "Custom high-performance communication fabric designed for scalable computing systems.",
  },

  {
    title: "CHIPSETRON™",
    subtitle: "System Controller Platform",
    description:
      "Dedicated controller ecosystem enabling CORETRION based intelligent systems.",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      bg-black
    "
    >
      <PCBBackground />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        gap-12
        items-center
        w-full
      "
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
            text-cyan-400
            uppercase
            tracking-[0.4em]
            text-sm
          "
          >
            {slides[index].subtitle}
          </p>

          <h1
            className="
            text-white
            text-6xl
            md:text-7xl
            font-black
            mt-6
          "
          >
            {slides[index].title}
          </h1>

          <p
            className="
            text-gray-400
            text-xl
            mt-6
            max-w-xl
          "
          >
            {slides[index].description}
          </p>

          <div className="flex gap-5 mt-10">
            <a
              href="/products/coretrion"
              className="
                bg-cyan-400
                text-black
                px-8
                py-4
                rounded-full
                font-bold
                hover:bg-cyan-300
                transition
              "
            >
              Explore
            </a>

            <a
              href="/technology"
              className="
                border
                border-white/20
                text-white
                px-8
                py-4
                rounded-full
                hover:border-cyan-400
                hover:text-cyan-400
                transition
              "
            >
              Architecture
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div
            className="
            absolute
            w-96
            h-96
            bg-cyan-400/20
            blur-3xl
            rounded-full
          "
          />

          <Image
            src="/images/CORETRTION.png"
            alt="CORETRION Processor"
            width={650}
            height={650}
            priority
            className="
              relative
              rounded-3xl
              border
              border-cyan-500/30
              shadow-[0_0_80px_rgba(0,255,255,0.25)]
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}