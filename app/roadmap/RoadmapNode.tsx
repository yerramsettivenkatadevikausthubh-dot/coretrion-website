"use client";

import { motion } from "framer-motion";


interface Props {
  year:string;
  phase:string;
  status:string;
  index:number;
}


export default function RoadmapNode({
year,
phase,
status,
index
}:Props){


return(

<motion.div

initial={{
scale:0,
opacity:0
}}

whileInView={{
scale:1,
opacity:1
}}

viewport={{
once:true
}}

transition={{
duration:0.6,
delay:index*0.2
}}

className="
relative
flex
items-center
justify-center
"


>


<div
className="
absolute
w-8
h-8
rounded-full
bg-cyan-400
blur-xl
opacity-70
"
/>


<div
className="
relative
w-16
h-16
rounded-full
border
border-cyan-400
bg-black
flex
items-center
justify-center
shadow-[0_0_40px_rgba(34,211,238,0.8)]
"
>


<span className="
text-cyan-400
font-black
">

{index+1}

</span>


</div>


<div
className="
absolute
top-20
text-center
w-40
"
>


<h3
className="
text-white
font-black
text-lg
"
>

{year}

</h3>


<p
className="
text-gray-400
text-sm
mt-2
"
>

{phase}

</p>


<span
className="
inline-block
mt-3
px-3
py-1
rounded-full
bg-cyan-500/10
border
border-cyan-400/30
text-cyan-400
text-xs
"
>

{status}

</span>


</div>


</motion.div>

)

}
