"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Publications() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          left-1/2
          top-32
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          bg-cyan-500/10
          blur-[180px]
          "
        />

      </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6">

      {/* ============================== */}
{/* RESEARCH PUBLICATIONS HEADER */}
{/* ============================== */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="text-center mb-20"
>
  {/* Animated Title */}

  <motion.div
    className="relative inline-block"
    animate={{
      scale: [1, 1.03, 1],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    {/* Glow */}

    <motion.div
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
        absolute
        inset-0
        rounded-full
        bg-cyan-400/20
        blur-3xl
      "
    />

    <motion.h1
      animate={{
        opacity: [1, 0.8, 1],
        textShadow: [
          "0 0 10px rgba(34,211,238,.3)",
          "0 0 40px rgba(34,211,238,1)",
          "0 0 10px rgba(34,211,238,.3)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="
        relative
        text-4xl
        md:text-6xl
        font-black
        uppercase
        tracking-[0.3em]
        text-cyan-400
      "
    >
      TECHNICAL PUBLICATIONS
    </motion.h1>
  </motion.div>

  {/* Animated Underline */}

  <motion.div
    animate={{
      width: ["0%", "180px", "0%"],
    }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      h-1
      bg-cyan-400
      rounded-full
      mx-auto
      mt-5
      shadow-[0_0_25px_rgba(34,211,238,1)]
    "
  />

  <motion.p
    animate={{
      opacity: [0.5, 1, 0.5],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="
      mt-5
      uppercase
      tracking-[0.35em]
      text-gray-400
      text-sm
    "
  >
    Breakthroughs in Processor Architecture, AI Computing & Semiconductor Design
  </motion.p>

  {/* Published Badge */}

  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 10px rgba(34,197,94,.2)",
        "0 0 35px rgba(34,197,94,.9)",
        "0 0 10px rgba(34,197,94,.2)",
      ],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
    }}
    className="
      relative
      inline-flex
      items-center
      gap-4
      mt-12
      px-7
      py-3
      rounded-full
      border
      border-green-400/40
      bg-green-500/10
      overflow-hidden
      backdrop-blur-xl
    "
  >
    {/* Shine */}

    <motion.div
      animate={{
        x: ["-150%", "250%"],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        inset-y-0
        left-0
        w-24
        rotate-12
        bg-gradient-to-r
        from-transparent
        via-white/40
        to-transparent
      "
    />

    {/* Dot */}

    <motion.div
      animate={{
        scale: [1, 1.8, 1],
        opacity: [1, 0.35, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
      className="
        relative
        z-10
        w-3
        h-3
        rounded-full
        bg-green-400
        shadow-[0_0_18px_rgba(34,197,94,1)]
      "
    >
      <div className="absolute inset-0 rounded-full bg-green-400 blur-md" />
    </motion.div>

    <motion.span
      animate={{
        opacity: [1, 0.6, 1],
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
      }}
      className="
        relative
        z-10
        uppercase
        tracking-[0.35em]
        text-green-400
        text-sm
        font-bold
      "
    >
      Published Research
    </motion.span>
  </motion.div>

  {/* Section Heading */}

  <h2 className="mt-12 text-5xl md:text-6xl font-black text-white">
    Research & Publications
  </h2>

  <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
    Peer-reviewed publications demonstrating innovations within the
    CORETRION™ ecosystem, semiconductor architectures, intelligent
    controllers and heterogeneous embedded computing.
  </p>
</motion.div>

        {/* ===================== */}
        {/* Publication Card */}
        {/* ===================== */}

        <motion.div
  initial={{ opacity: 0, y: 70 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true }}
  className="
    mt-20
    rounded-3xl
    border
    border-cyan-500/20
    bg-white/5
    backdrop-blur-xl
    p-6
    md:p-10
  "
>

  {/* Tags */}

  <div className="flex flex-wrap gap-3 mb-8">

    <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-semibold">
      Journal Paper
    </span>

    <span className="px-4 py-2 rounded-full bg-white/10 text-white">
      VLSI
    </span>

    <span className="px-4 py-2 rounded-full bg-white/10 text-white">
      IoT
    </span>

    <span className="px-4 py-2 rounded-full bg-white/10 text-white">
      Edge Computing
    </span>

  </div>

  {/* Paper Title */}

  <h3
    className="
      text-2xl
      md:text-4xl
      font-black
      text-white
      leading-tight
    "
  >
    Chipsetron-Ultracore VX:
    <br />

    A Heterogeneous VLSI-Based Controller for Intelligent IoT Automation
    and Real-Time Edge Systems
  </h3>

  {/* Description */}

  <p
    className="
      mt-8
      text-base
      md:text-lg
      leading-8
      md:leading-9
      text-gray-300
    "
  >
    This publication introduces the CHIPSETRON™ heterogeneous controller
    architecture designed for intelligent IoT systems, industrial
    automation and real-time edge computing.

    The work explores custom VLSI architecture,
    embedded intelligence,
    heterogeneous processing,
    scalable controller design,
    and next-generation semiconductor platforms capable of supporting
    industrial automation, embedded AI, and intelligent edge computing.
  </p>

  {/* Information Cards */}

  <div className="grid md:grid-cols-3 gap-6 mt-12">

    <motion.div
      whileHover={{
        y: -6,
        borderColor: "#22d3ee",
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
      "
    >
      <p className="text-gray-500 text-sm uppercase">
        Journal
      </p>

      <h4 className="mt-3 text-xl font-bold text-white">
        Journal on Electronics Engineering
      </h4>

    </motion.div>

    <motion.div
      whileHover={{
        y: -6,
        borderColor: "#22d3ee",
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
      "
    >
      <p className="text-gray-500 text-sm uppercase">
        Publication Year
      </p>

      <h4 className="mt-3 text-xl font-bold text-white">
        2025
      </h4>

    </motion.div>

    <motion.div
      whileHover={{
        y: -6,
        borderColor: "#22d3ee",
      }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-6
      "
    >
      <p className="text-gray-500 text-sm uppercase">
        Domain
      </p>

      <h4 className="mt-3 text-xl font-bold text-white">
        VLSI • IoT • Edge AI
      </h4>

    </motion.div>

  </div>
            {/* ===================== */}
          {/* Authors */}
          {/* ===================== */}

          <div className="mt-16">

            <div className="flex items-center gap-4 mb-8">

              <div className="h-px flex-1 bg-gradient-to-r from-cyan-500 to-transparent" />

              <h3 className="text-3xl font-black text-cyan-400">
                Authors
              </h3>

              <div className="h-px flex-1 bg-gradient-to-l from-cyan-500 to-transparent" />

            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Author 1 */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "#22d3ee",
                }}
                transition={{ duration: 0.25 }}
                className="
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-br
                from-white/5
                to-cyan-500/5
                p-7
                "
              >

                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-5">

                  <span className="text-cyan-400 text-xl font-black">
                    YK
                  </span>

                </div>

                <h4 className="text-xl font-bold text-white leading-relaxed">
                  YERRAMSETTI VENKATA DEVI KAUSTHUBH
                </h4>

                <p className="mt-4 text-gray-400">
                  Lead Author
                </p>

              </motion.div>

              {/* Author 2 */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "#22d3ee",
                }}
                transition={{ duration: 0.25 }}
                className="
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-br
                from-white/5
                to-cyan-500/5
                p-7
                "
              >

                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-5">

                  <span className="text-cyan-400 text-xl font-black">
                    GR
                  </span>

                </div>

                <h4 className="text-xl font-bold text-white">
                  G. RAVI KISHORE
                </h4>

                <p className="mt-4 text-gray-400">
                  Co-Author
                </p>

              </motion.div>

              {/* Author 3 */}

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  borderColor: "#22d3ee",
                }}
                transition={{ duration: 0.25 }}
                className="
                rounded-2xl
                border
                border-white/10
                bg-gradient-to-br
                from-white/5
                to-cyan-500/5
                p-7
                "
              >

                <div className="w-14 h-14 rounded-full bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-5">

                  <span className="text-cyan-400 text-xl font-black">
                    CS
                  </span>

                </div>

                <h4 className="text-xl font-bold text-white">
                  CH. SANDEEP
                </h4>

                <p className="mt-4 text-gray-400">
                  Co-Author
                </p>

              </motion.div>

            </div>

          </div>

          {/* ===================== */}
          {/* Highlights */}
          {/* ===================== */}

          <div className="grid lg:grid-cols-2 gap-8 mt-20">

            <motion.div
              whileHover={{ y: -6 }}
              className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              p-8
              "
            >

              <h3 className="text-2xl font-black text-cyan-400">
                Research Contributions
              </h3>

              <ul className="mt-8 space-y-5 text-gray-300">

                <li>• Heterogeneous VLSI Controller Architecture</li>

                <li>• Intelligent IoT Automation Platform</li>

                <li>• Embedded Artificial Intelligence</li>

                <li>• Real-Time Edge Computing</li>

                <li>• Custom Semiconductor Design</li>

                <li>• High Performance Embedded Processing</li>

              </ul>

            </motion.div>

            <motion.div
              whileHover={{ y: -6 }}
              className="
              rounded-3xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              p-8
              "
            >

              <h3 className="text-2xl font-black text-cyan-400">
                Applications
              </h3>

              <ul className="mt-8 space-y-5 text-gray-300">

                <li>• Smart Manufacturing</li>

                <li>• Robotics & Automation</li>

                <li>• Intelligent IoT Systems</li>

                <li>• Industrial Controllers</li>

                <li>• Embedded AI Devices</li>

                <li>• Next Generation Edge Computing</li>

              </ul>

            </motion.div>

          </div>
                    {/* ===================== */}
          {/* Publication Link */}
          {/* ===================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >

            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-transparent p-8">

              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

                <div>

                  <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm font-semibold">
                    Published Paper
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-white">
                    Available on ResearchGate
                  </h3>

                  <p className="mt-4 text-gray-400 max-w-2xl leading-relaxed">
                    Read the complete research publication describing the
                    CHIPSETRON™ heterogeneous VLSI controller architecture,
                    intelligent IoT automation platform, embedded AI processing,
                    and real-time edge computing system.
                  </p>

                </div>

                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                >

                  <Link
                    href="https://www.researchgate.net/publication/400165265_Chipsetron-ultracore_VX_A_heterogeneous_VLSI-based_controller_for_intelligent_IoT_automation_and_real-time_edge_systems"
                    target="_blank"
                    className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-cyan-400
                    px-8
                    py-4
                    font-bold
                    text-black
                    transition-all
                    duration-300
                    hover:bg-cyan-300
                    hover:shadow-[0_0_35px_rgba(34,211,238,0.7)]
                    "
                  >

                    Read Publication

                    <motion.span
                      animate={{
                        x: [0, 6, 0],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                    >
                      →
                    </motion.span>

                  </Link>

                </motion.div>

              </div>

            </div>

          </motion.div>

          {/* Bottom Divider */}

          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          />

        </motion.div>

      </div>

    </section>
  );
}