"use client";

import { motion } from "framer-motion";

export default function Beacon() {
  return (
    <div className="absolute left-[700px] top-[270px] -translate-x-1/2 -translate-y-1/2">

      {/* Radar Ring */}

      <motion.div
        animate={{
          scale: [1, 2.8],
          opacity: [0.8, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity
        }}
        className="absolute w-20 h-20 rounded-full border-2 border-cyan-400"
      />

      <motion.div
        animate={{
          scale: [1, 2.3],
          opacity: [0.6, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5
        }}
        className="absolute w-20 h-20 rounded-full border border-cyan-300"
      />

      <div className="absolute left-10 -top-10 text-cyan-300 font-bold">

        YOU ARE HERE

      </div>

    </div>
  );
}