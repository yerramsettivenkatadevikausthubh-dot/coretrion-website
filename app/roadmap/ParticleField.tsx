"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 80 }, (_, i) => ({
  x: (i * 37) % 1500,
  y: (i * 53) % 900,
  opacity: 0.2 + (i % 5) * 0.15,
  duration: 10 + (i % 20),
}));

export default function ParticleField() {
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
          className="absolute h-1 w-1 rounded-full bg-cyan-300"
        />
      ))}
    </div>
  );
}