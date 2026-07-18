"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

export default function ParticleField() {
  const particles = useMemo(
    () =>
      Array.from({ length: 80 }, () => ({
        x: Math.random() * 1500,
        y: Math.random() * 900,
        opacity: Math.random(),
        duration: 10 + Math.random() * 20,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
          }}
          animate={{
            y: "-100%",
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-1 h-1 rounded-full bg-cyan-300"
        />
      ))}
    </div>
  );
}