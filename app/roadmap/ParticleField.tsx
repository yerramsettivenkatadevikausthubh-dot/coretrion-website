"use client";

import { motion } from "framer-motion";


const particles=new Array(25).fill(0);



export default function ParticleField(){


return(

<div
className="
absolute
inset-0
overflow-hidden
pointer-events-none
"
>


{

particles.map((_,i)=>(


<motion.div

key={i}

animate={{

y:[
0,
-120,
0
],

opacity:[
0,
1,
0
]

}}

transition={{

duration:
4+(i%5),

repeat:Infinity,

delay:
i*0.2

}}

className="
absolute
w-1
h-1
rounded-full
bg-cyan-400
"

style={{

left:`${Math.random()*100}%`,
top:`${Math.random()*100}%`

}}

/>


))


}


</div>

)

}