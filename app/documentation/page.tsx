"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

const docs = [

{
title:"Processor ISA",
description:
"Complete CORETRION™ instruction set architecture including opcode formats, execution classes, register design and custom instruction extensions.",
href:"/documentation/isa",
tag:"ARCHITECTURE"
},

{
title:"CORETRION Architecture",
description:
"Detailed processor architecture covering pipeline stages, compute engines, SIMD, Tensor accelerator and GPU subsystem.",
href:"/documentation/architecture",
tag:"PROCESSOR"
},

{
title:"RTL Documentation",
description:
"Hardware implementation documentation covering Verilog modules, datapath design, control logic and subsystem integration.",
href:"/documentation/rtl",
tag:"RTL DESIGN"
},

{
title:"Verification Framework",
description:
"Simulation methodology, testbench architecture, functional verification and performance validation results.",
href:"/documentation/verification",
tag:"VALIDATION"
},

{
title:"CORELINK Fabric",
description:
"Documentation of custom interconnect architecture, packet format, communication protocols and system connectivity.",
href:"/documentation/corelink",
tag:"INTERCONNECT"
},

{
title:"CHIPSETRON Controller",
description:
"Embedded controller architecture, peripheral management and intelligent system integration documentation.",
href:"/documentation/chipsetron",
tag:"SYSTEM"
}

];



export default function DocumentationPage(){


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
w-[700px]
h-[700px]
rounded-full
bg-cyan-500/10
blur-[180px]
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
font-semibold
"
>

CORETRION™ KNOWLEDGE BASE

</p>


<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
"
>

Technical Documentation

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

Engineering documentation for CORETRION™ processor architecture,
CORELINK™ communication fabric and CHIPSETRON™ embedded systems.

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
docs.map((doc,index)=>(


<motion.div

key={doc.title}

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

transition={{
delay:index*0.1
}}

whileHover={{
y:-8
}}

>


<Link

href={doc.href}

className="
block
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
hover:border-cyan-400/50
transition
"

>


<span
className="
text-xs
tracking-[0.3em]
text-cyan-400
font-bold
"
>

{doc.tag}

</span>



<h2
className="
mt-5
text-2xl
font-black
"
>

{doc.title}

</h2>



<p
className="
mt-4
text-gray-400
leading-7
"
>

{doc.description}

</p>



<div
className="
mt-8
text-cyan-400
font-semibold
"
>

Explore Documentation →

</div>


</Link>


</motion.div>


))

}



</div>





<section
className="
mt-24
rounded-3xl
border
border-cyan-400/20
bg-cyan-400/5
p-10
text-center
"
>


<h2
className="
text-4xl
font-black
"
>

Open Semiconductor Development Platform

</h2>


<p
className="
mt-5
text-gray-400
max-w-3xl
mx-auto
text-lg
"
>

Documentation covering the complete journey from architecture definition,
RTL implementation, verification, FPGA prototyping and ASIC readiness.

</p>


</section>



</div>


</section>



<Footer />


</main>

)

}