"use client";

import { motion } from "framer-motion";

interface PacketProps {
  delay: number;
}

export default function Packet({ delay }: PacketProps) {

  return (

    <motion.div

      initial={{
        offsetDistance: "0%"
      }}

      animate={{
        offsetDistance: "100%"
      }}

      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}

      style={{
        offsetPath:
          "path('M100 520 L260 430 L470 350 L700 270 L930 180 L1160 90')"
      }}

      className="absolute"

    >

      <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_25px_#00ffff]" />

    </motion.div>

  );
}