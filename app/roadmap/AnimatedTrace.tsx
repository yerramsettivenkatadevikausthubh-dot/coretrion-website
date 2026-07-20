"use client";


import { motion } from "framer-motion";


export default function AnimatedTrace(){


return(

<motion.div

animate={{
backgroundPosition:[
"0% 50%",
"100% 50%",
"0% 50%"
]
}}

transition={{
duration:6,
repeat:Infinity,
ease:"linear"
}}

className="
absolute
top-1/2
left-0
right-0
h-[2px]
bg-gradient-to-r
from-transparent
via-cyan-400
to-transparent
bg-[length:200%_100%]
"
/>


)

}