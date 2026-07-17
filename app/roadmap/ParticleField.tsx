"use client";

import { motion } from "framer-motion";

export default function ParticleField() {

  return (

    <div className="absolute inset-0 overflow-hidden">

      {

        [...Array(80)].map((_, i) => (

          <motion.div

            key={i}

            initial={{
              y: Math.random() * 900,
              x: Math.random() * 1500,
              opacity: Math.random()
            }}

            animate={{
              y: "-100%",
              opacity: [0.2, 1, 0.2]
            }}

            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}

            className="absolute w-1 h-1 rounded-full bg-cyan-300"

          />

        ))

      }

    </div>

  );

}