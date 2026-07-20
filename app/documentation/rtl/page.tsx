"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


const rtlModules = [

{
name:"coretrion_soc_top.v",
description:
"Top-level System-on-Chip integration module connecting processor core, accelerators, memory and external interfaces."
},


{
name:"coretrion_pipeline_core.v",
description:
"Main processor pipeline implementation containing instruction fetch, decode, execution routing, memory and writeback stages."
},


{
name:"coretrion_simd_alu.v",
description:
"Parallel arithmetic logic unit implementing SIMD vector operations."
},


{
name:"coretrion_tensor_accelerator.v",
description:
"AI acceleration hardware performing tensor and matrix computation operations."
},


{
name:"coretrion_gpu_core.v",
description:
"Parallel compute subsystem supporting GPU style execution workloads."
},


{
name:"corelink_packet.v",
description:
"CORELINK communication packet definition and interconnect protocol implementation."
},


{
name:"coretrion_memory_subsystem.v",
description:
"Memory hierarchy, data access control and processor-memory communication layer."
},


{
name:"coretrion_tb.v",
description:
"Verification testbench environment used for functional validation and simulation."
}

];



const flow=[

"RTL Design",

"Lint Analysis",

"Simulation",

"Functional Verification",

"Synthesis",

"ASIC Preparation"

];



export default function RTLDocumentation(){


return(

<main className="bg-black min-h-screen text-white overflow-hidden">


<Navbar />



<section
className="
relative
pt-40
pb-28
"
>


<div
className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[750px]
h-[750px]
rounded-full
bg-cyan-500/10
blur-[200px]
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

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="text-center"

>


<p
className="
text-cyan-400
tracking-[0.5em]
uppercase
font-bold
"
>

CORETRION™ RTL DESIGN

</p>



<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
"
>

Hardware Implementation

</h1>



<p
className="
mt-8
max-w-3xl
mx-auto
text-xl
text-gray-400
leading-relaxed
"
>

RTL documentation describing the Verilog implementation,
hardware hierarchy and semiconductor development flow
of the CORETRION™ processor ecosystem.

</p>


</motion.div>








{/* RTL HIERARCHY */}



<section className="mt-24">


<h2
className="
text-4xl
font-black
"
>

RTL Module Hierarchy

</h2>



<div
className="
grid
md:grid-cols-2
gap-8
mt-12
"
>


{
rtlModules.map((module,index)=>(


<motion.div

key={module.name}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
"

>


<div
className="
text-cyan-400
font-mono
text-sm
"
>

MODULE_{String(index+1).padStart(2,"0")}

</div>



<h3
className="
mt-5
text-xl
font-black
"
>

{module.name}

</h3>



<p
className="
mt-4
text-gray-400
leading-7
"
>

{module.description}

</p>


</motion.div>


))

}


</div>


</section>









{/* HARDWARE FLOW */}



<section
className="
mt-28
rounded-3xl
border
border-cyan-400/20
bg-cyan-400/5
p-10
"
>


<h2
className="
text-4xl
font-black
"
>

ASIC Development Flow

</h2>



<div
className="
grid
md:grid-cols-6
gap-5
mt-10
"
>


{
flow.map((item,index)=>(


<div

key={item}

className="
rounded-xl
bg-black
border
border-white/10
p-5
text-center
"

>


<div
className="
text-cyan-400
font-black
text-2xl
"
>

0{index+1}

</div>



<p
className="
mt-3
text-sm
text-gray-300
"
>

{item}

</p>


</div>


))

}


</div>


</section>









{/* DESIGN PRINCIPLES */}



<section
className="
mt-20
grid
md:grid-cols-3
gap-8
"
>


{
[
"Custom Processor RTL",
"Heterogeneous Compute Integration",
"ASIC Ready Architecture"
].map(item=>(


<div
key={item}
className="
rounded-2xl
border
border-white/10
bg-white/5
p-7
text-center
"
>

<h3
className="
text-xl
font-bold
text-cyan-400
"
>

{item}

</h3>

</div>


))

}


</section>






</div>


</section>



<Footer />



</main>

)

}