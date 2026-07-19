"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import PCBBackground from "./PCBBackground";

const slides = [
  {
    title: "CORETRION™",
    subtitle: "32-Bit Hybrid Compute Architecture",
    description:
      "CPU + SIMD + Tensor + GPU acceleration designed for intelligent computing.",
  },
  {
    title: "CORELINK™",
    subtitle: "Custom Compute Interconnect Fabric",
    description:
      "High-performance communication fabric connecting processing engines.",
  },
  {
    title: "CHIPSETRON™",
    subtitle: "System Controller Platform",
    description:
      "Dedicated controller architecture for CORETRION based systems.",
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
pt-28
pb-20
lg:pt-0
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
grid-cols-1
lg:grid-cols-2
gap-12
lg:gap-16
        items-center
        w-full
        "
      >
        {/* LEFT CONTENT */}

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
            tracking-[0.45em]
            text-sm
            font-semibold
            "
          >
            {slides[index].subtitle}
          </p>

          <h1
            className="
            text-white
            text-2xl
sm:text-3xl
lg:text-4xl
            font-black
            leading-tight
            mt-6
            "
          >
            {slides[index].title}
          </h1>

          <p
            className="
            text-gray-400
            text-base
sm:text-lg
lg:text-xl
            mt-8
            max-w-xl
            leading-relaxed
            "
          >
            {slides[index].description}
          </p>

          <div
            className="
           flex
flex-col
sm:flex-row
gap-4
mt-10
            "
          >
            <a
              href="/products/coretrion"
              className="
              bg-white
              text-black
              px-8
              py-4
              rounded-full
              font-bold
              hover:bg-cyan-400
              transition-all
              duration-300
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
              transition-all
              duration-300
              "
            >
              Architecture
            </a>
          </div>

          {/* STATS */}

          <div
            className="
            grid
            grid-cols-3
gap-4
sm:gap-8
            mt-16
            max-w-xl
            "
          >
            <div>
              <h3 className="text-cyan-400 text-4xl font-black">
                32
              </h3>

              <p className="text-gray-500 mt-2">
                Bit Architecture
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-4xl font-black">
                4
              </h3>

              <p className="text-gray-500 mt-2">
                Compute Engines
              </p>
            </div>

            <div>
              <h3 className="text-cyan-400 text-4xl font-black">
                2027
              </h3>

              <p className="text-gray-500 mt-2">
                ASIC Target
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CHIP */}

        <div
          className="
          relative
          flex
          justify-center
          items-center
h-[350px]
sm:h-[450px]
lg:h-[650px]          "
        >
          {/* LARGE CYAN GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            w-[260px]
h-[260px]
sm:w-[360px]
sm:h-[360px]
lg:w-[560px]
lg:h-[560px]
            rounded-full
            bg-cyan-400/20
            blur-[140px]
            "
          />

          {/* ROTATING CHIP */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              rotateX: -15,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateY: [0, 360],
              rotateX: [-6, 6, -6],
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              rotateY: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              rotateX: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
            className="
            relative
            w-[240px]
h-[240px]
sm:w-[320px]
sm:h-[320px]
lg:w-[430px]
lg:h-[430px]
            rounded-3xl
            overflow-hidden
            border
            border-cyan-400/30
            shadow-[0_0_120px_rgba(0,255,255,0.35)]
            "
          >
            <Image
              src="/images/coretrion.png"
              alt="CORETRION Processor"
              fill
              priority
              className="
              object-contain
              p-6
              drop-shadow-[0_0_60px_rgba(0,255,255,0.4)]
              "
            />
          </motion.div>
                    {/* SIMD */}

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
           left-2
top-6
sm:left-0
sm:top-20
            bg-cyan-500/10
            border
            border-cyan-500/30
            backdrop-blur-xl
            rounded-xl
            px-5
            py-3
            shadow-[0_0_30px_rgba(0,255,255,0.15)]
            "
          >
            <p className="text-cyan-400 font-semibold">
              SIMD
            </p>
          </motion.div>

          {/* TENSOR */}

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
           right-2
top-10
sm:right-0
sm:top-28
            bg-cyan-500/10
            border
            border-cyan-500/30
            backdrop-blur-xl
            rounded-xl
            px-5
            py-3
            shadow-[0_0_30px_rgba(0,255,255,0.15)]
            "
          >
            <p className="text-cyan-400 font-semibold">
              Tensor
            </p>
          </motion.div>

          {/* GPU */}

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            left-2
bottom-8
sm:left-5
sm:bottom-16
            bg-cyan-500/10
            border
            border-cyan-500/30
            backdrop-blur-xl
            rounded-xl
            px-5
            py-3
            shadow-[0_0_30px_rgba(0,255,255,0.15)]
            "
          >
            <p className="text-cyan-400 font-semibold">
              GPU
            </p>
          </motion.div>

          {/* CORELINK */}

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
            absolute
            right-2
bottom-10
sm:right-5
sm:bottom-20right-5
            bottom-20
            bg-cyan-500/10
            border
            border-cyan-500/30
            backdrop-blur-xl
            rounded-xl
            px-5
            py-3
            shadow-[0_0_30px_rgba(0,255,255,0.15)]
            "
          >
            <p className="text-cyan-400 font-semibold">
              CORELINK
            </p>
          </motion.div>

          {/* LIGHT PARTICLES */}

          <motion.div
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            absolute
            top-10
            left-1/2
            w-2
            h-2
            rounded-full
            bg-cyan-400
            blur-[2px]
            "
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            bottom-12
            right-24
            w-3
            h-3
            rounded-full
            bg-cyan-300
            blur-[3px]
            "
          />

          <motion.div
            animate={{
              x: [0, 15, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="
            absolute
            top-1/2
            left-10
            w-2
            h-2
            rounded-full
            bg-cyan-500
            blur-[2px]
            "
          />
        </div>
      </div>

      {/* SCROLL INDICATOR */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        "
      >
        <div
          className="
          w-7
          h-12
          rounded-full
          border-2
          border-cyan-400
          flex
          justify-center
          "
        >
          <div
            className="
            w-2
            h-2
            rounded-full
            bg-cyan-400
            mt-2
            "
          />
        </div>
      </motion.div>
    </section>
  );
}