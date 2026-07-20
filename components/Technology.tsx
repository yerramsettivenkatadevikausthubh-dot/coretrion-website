"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  BrainCircuit,
  Network,
  Shield,
  MemoryStick,
  Workflow
} from "lucide-react";


const architecture = [

{
title:"CORETRION™ Core Architecture",
category:"PROCESSOR CORE",
icon:Cpu,
image:"/images/coretrion_overall.png",
description:
"Unified 32-bit hybrid compute architecture integrating scalar processing, SIMD execution, Tensor AI acceleration and GPU compute."
},


{
title:"Pipeline Architecture",
category:"EXECUTION ENGINE",
icon:Workflow,
image:"/images/coretrion-datapath.png",
description:
"Optimized instruction pipeline designed for efficient fetch, decode, execute, memory and writeback operations."
},


{
title:"Tensor Accelerator",
category:"AI COMPUTE",
icon:BrainCircuit,
image:"/images/tensor-engine.png",
description:
"Dedicated machine learning acceleration engine for neural workloads and intelligent edge applications."
},


{
title:"GPU Compute Subsystem",
category:"PARALLEL COMPUTE",
icon:Network,
image:"/images/gpu-architecture.png",
description:
"Parallel processing architecture enabling graphics, simulation and AI acceleration workloads."
},


{
title:"Memory Subsystem",
category:"DATA ARCHITECTURE",
icon:MemoryStick,
image:"/images/memory-system.png",
description:
"High performance memory hierarchy designed for efficient data movement and compute scaling."
},


{
title:"Security Architecture",
category:"HARDWARE SECURITY",
icon:Shield,
image:"/images/security.png",
description:
"Integrated hardware security mechanisms providing reliable and protected computation."
}

];



export default function Technology(){


return (

<section

className="
relative
py-32
bg-[#020617]
overflow-hidden
"

>


<div

className="
absolute
top-0
left-1/2
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

PROCESSOR ARCHITECTURE

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

CORETRION Technology

</h2>


<p

className="
mt-8
text-gray-400
max-w-3xl
text-lg
leading-8
"

>

Explore the hardware architecture powering the CORETRION™
computing ecosystem.

</p>


</motion.div>




<div

className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-20
"

>


{

architecture.map((item,index)=>{


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
duration:.6,
delay:index*.1
}}



whileHover={{
y:-10
}}


className="

group

rounded-3xl

overflow-hidden

border

border-white/10

bg-white/[0.03]

backdrop-blur-xl

hover:border-cyan-400/40

transition

"


>


<div

className="
relative
h-56
"

>


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
group-hover:scale-110
transition
duration-700
"

/>


<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-transparent
"

/>


</div>





<div

className="
p-7
"

>


<div

className="
flex
items-center
gap-3
text-cyan-400
text-xs
tracking-widest
font-bold
"

>

<Icon size={18}/>

{item.category}

</div>




<h3

className="
text-white
text-2xl
font-black
mt-5
"

>

{item.title}

</h3>




<p

className="
text-gray-400
mt-4
leading-7
"

>

{item.description}

</p>



<button

className="
mt-6
text-cyan-400
font-semibold
"

>

Explore Architecture →

</button>


</div>


</motion.div>


)


})


}


</div>



</div>


</section>


);


}