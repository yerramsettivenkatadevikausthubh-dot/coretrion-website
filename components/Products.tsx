"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "CORETRION™",
    image: "/images/coretrion-chip.png",
    description:
      "32-bit hybrid processor architecture combining CPU, SIMD, Tensor and GPU acceleration.",
    specs: [
      "32-bit ISA",
      "SIMD",
      "Tensor",
      "GPU",
      "FPGA Ready",
      "AI Accelerated",
    ],
    href: "/products/coretrion",
    glow: "shadow-[0_0_80px_rgba(0,255,255,0.25)]",
  },

  {
    name: "CORELINK™",
    image: "/images/corelink-fabric.png",
    description:
      "Custom compute interconnect fabric designed for scalable intelligent systems.",
    specs: [
      "Low Latency",
      "Packet Fabric",
      "Scalable",
      "High Bandwidth",
      "QoS",
      "Multi-Core",
    ],
    href: "/products/corelink",
    glow: "shadow-[0_0_80px_rgba(140,82,255,0.25)]",
  },

  {
    name: "CHIPSETRON™",
    image: "/images/chipsetron-controller.png",
    description:
      "Dedicated controller ecosystem powering CORETRION-based embedded platforms.",
    specs: [
      "Security",
      "I/O",
      "Power Mgmt",
      "Control Logic",
      "Monitoring",
      "Boot System",
    ],
    href: "/products/chipsetron",
    glow: "shadow-[0_0_80px_rgba(0,255,170,0.25)]",
  },
];

export default function Products() {
  return (
    <section
      className="
      relative
      py-32
      bg-black
      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        left-1/2
        top-20
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        "
      >
        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >
          <p
            className="
            uppercase
            tracking-[0.4em]
            text-cyan-400
            text-sm
            font-semibold
            "
          >
            Semiconductor Platforms
          </p>

          <h2
            className="
            mt-6
            text-white
            text-5xl
            lg:text-6xl
            font-black
            "
          >
            Our Products
          </h2>

          <p
            className="
            mt-8
            text-gray-400
            text-lg
            max-w-3xl
            mx-auto
            leading-8
            "
          >
            Building the next generation of intelligent semiconductor
            platforms through custom compute architectures, scalable
            interconnects and advanced system technologies.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          className="
          grid
          lg:grid-cols-3
          gap-10
          mt-20
          "
        >
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className={`
                group
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                overflow-hidden
                transition-all
                duration-500
                ${product.glow}
              `}
            >
              {/* Image */}

              <div
                className="
                relative
                h-72
                bg-gradient-to-b
                from-cyan-500/10
                to-transparent
                flex
                items-center
                justify-center
                "
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                  className="
                  object-contain
                  transition-transform
                  duration-700
                  group-hover:scale-110
                  "
                />

                <div
                  className="
                  absolute
                  inset-0
                  bg-cyan-400/5
                  opacity-0
                  group-hover:opacity-100
                  transition
                  "
                />
              </div>

              <div className="p-8">
                <h3
                  className="
                  text-3xl
                  font-black
                  text-white
                  "
                >
                  {product.name}
                </h3>

                <p
                  className="
                  mt-5
                  text-gray-400
                  leading-7
                  "
                >
                  {product.description}
                </p>

                {/* Specs */}

                <div
                  className="
                  flex
                  flex-wrap
                  gap-3
                  mt-8
                  "
                >
                  {product.specs.map((spec) => (
                    <span
                      key={spec}
                      className="
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      bg-cyan-500/10
                      border
                      border-cyan-500/20
                      text-cyan-300
                      "
                    >
                      {spec}
                    </span>
                  ))}
                </div>
                                {/* Action Button */}

                <Link
                  href={product.href}
                  className="
                  mt-10
                  inline-flex
                  items-center
                  gap-3
                  text-cyan-400
                  font-semibold
                  group/link
                  "
                >
                  <span>Learn More</span>

                  <ArrowRight
                    size={18}
                    className="
                    transition-transform
                    duration-300
                    group-hover/link:translate-x-2
                    "
                  />
                </Link>

                {/* Bottom Accent */}

                <motion.div
                  initial={{
                    width: "0%",
                  }}
                  whileInView={{
                    width: "100%",
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                  }}
                  className="
                  mt-8
                  h-[2px]
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-400
                  via-cyan-300
                  to-transparent
                  "
                />
              </div>

              {/* Hover Glow */}

              <div
                className="
                absolute
                inset-0
                rounded-3xl
                border
                border-cyan-400/0
                group-hover:border-cyan-400/30
                transition-all
                duration-500
                pointer-events-none
                "
              />

              <div
                className="
                absolute
                -inset-10
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
                bg-cyan-500/5
                blur-3xl
                pointer-events-none
                "
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
          mt-24
          text-center
          "
        >
          <h3
            className="
            text-3xl
            md:text-4xl
            font-black
            text-white
            "
          >
            Designing the Future of Intelligent Computing
          </h3>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-gray-400
            text-lg
            leading-8
            "
          >
            CORETRION™, CORELINK™, and CHIPSETRON™ form a unified semiconductor
            ecosystem built for AI acceleration, scalable computing, and
            next-generation embedded platforms.
          </p>

          <Link
            href="/products"
            className="
            inline-flex
            items-center
            gap-3
            mt-10
            px-8
            py-4
            rounded-full
            bg-cyan-500
            hover:bg-cyan-400
            text-black
            font-bold
            transition
            "
          >
            Explore All Products

            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}