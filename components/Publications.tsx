"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  Cpu,
  Microscope,
  ExternalLink
} from "lucide-react";


const research=[

{
title:"CHIPSETRON™ Ultracore VX",
category:"VLSI CONTROLLER ARCHITECTURE",
description:
"Heterogeneous VLSI based controller architecture for intelligent IoT automation and real-time edge computing systems.",
icon:Cpu
},


{
title:"CORETRION™ Hybrid Compute Architecture",
category:"PROCESSOR RESEARCH",
description:
"Research on custom ISA based 32-bit processor architecture integrating CPU, SIMD, Tensor and GPU acceleration.",
icon:Microscope
},


{
title:"AI Accelerated Semiconductor Platforms",
category:"EDGE AI COMPUTING",
description:
"Exploration of intelligent hardware architectures for next generation embedded AI applications.",
icon:FileText
}


];



export default function Publications(){


return (

<section

className="
relative
py-28
bg-[#020617]
overflow-hidden
"

>


<div

className="
absolute
left-1/2
top-0
-translate-x-1/2
w-[800px]
h-[400px]
bg-cyan-500/10
blur-[150px]
"

/>



<div

className="
relative
z-10
max-w-7xl
mx-auto
px-6
"

>



<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-center
"

>


<p

className="
text-cyan-400
uppercase
tracking-[0.5em]
text-sm
font-semibold
"

>

RESEARCH & DEVELOPMENT

</p>


<h2

className="
text-white
text-5xl
lg:text-6xl
font-black
mt-6
"

>

Technical Publications

</h2>


<p

className="
mt-8
text-gray-400
text-lg
max-w-3xl
mx-auto
leading-8
"

>

Research initiatives covering processor architecture,
semiconductor design, VLSI systems and intelligent computing.

</p>


</motion.div>






<div

className="
grid
lg:grid-cols-3
gap-8
mt-20
"

>


{

research.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={item.title}

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.15
}}

whileHover={{
y:-10
}}


className="
rounded-3xl
border
border-white/10
bg-white/[0.03]
backdrop-blur-xl
p-8
hover:border-cyan-400/40
transition
"

>


<div

className="
w-14
h-14
rounded-xl
bg-cyan-500/10
border
border-cyan-400/30
flex
items-center
justify-center
text-cyan-400
"

>

<Icon/>

</div>




<h3

className="
text-white
text-2xl
font-black
mt-8
"

>

{item.title}

</h3>




<p

className="
text-cyan-400
text-xs
tracking-widest
font-bold
mt-4
"

>

{item.category}

</p>




<p

className="
text-gray-400
mt-5
leading-7
"

>

{item.description}

</p>



</motion.div>


)

})


}


</div>






<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mt-16
rounded-3xl
border
border-cyan-400/20
bg-cyan-500/5
p-8
flex
flex-col
lg:flex-row
items-center
justify-between
gap-6
"

>


<div>


<h3

className="
text-white
text-3xl
font-black
"

>

Explore Complete Research Portfolio

</h3>


<p

className="
text-gray-400
mt-3
"

>

Access technical papers, architecture documents and
verification studies.

</p>


</div>



<Link

href="/documentation/publications"

className="
flex
items-center
gap-3
px-7
py-4
rounded-full
bg-cyan-400
text-black
font-bold
hover:bg-cyan-300
transition
"

>

View Publications

<ExternalLink size={18}/>


</Link>



</motion.div>





</div>


</section>


);


}