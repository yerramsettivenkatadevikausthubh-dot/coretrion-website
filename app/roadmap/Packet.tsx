"use client";


import { motion } from "framer-motion";


export default function Packet(){


return(

<motion.div

animate={{
x:["-20px","20px","-20px"]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
w-3
h-3
rounded-full
bg-purple-400
shadow-[0_0_20px_rgba(168,85,247,.8)]
"

/>

)

}