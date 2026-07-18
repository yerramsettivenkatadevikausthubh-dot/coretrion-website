"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  x: number;
  y: number;
  opacity: number;
  duration: number;
}

export default function ParticleField() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 80 }, () => ({
      x: Math.random() * 1500,
      y: Math.random() * 900,
      opacity: Math.random(),
      duration: 10 + Math.random() * 20,
    }));

    setParticles(generated);
  }, []);

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