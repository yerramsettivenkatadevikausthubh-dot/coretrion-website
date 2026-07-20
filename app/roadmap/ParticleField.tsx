"use client";

import { motion } from "framer-motion";


const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  delay: (i % 10) * 0.3,
  duration: 5 + (i % 5),
}));



export default function ParticleField() {


return (

<div
className="
absolute
inset-0
overflow-hidden
pointer-events-none
"
>


{
particles.map((particle)=>(


<motion.div

key={particle.id}

className="
absolute
w-1
h-1
rounded-full
bg-cyan-400
"

style={{

left:particle.left,

top:particle.top

}}

animate={{

opacity:[0,1,0],

scale:[1,2,1]

}}

transition={{

duration:particle.duration,

repeat:Infinity,

delay:particle.delay

}}


/>


))

}


</div>

)

}