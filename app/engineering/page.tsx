"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


const flow = [
"Architecture Design",
"RTL Development",
"Functional Verification",
"FPGA Prototype",
"ASIC Fabrication"
];


const domains = [
{
title:"CPU Core",
desc:"32-bit hybrid processor pipeline with custom instruction architecture."
},

{
title:"SIMD Engine",
desc:"Parallel vector compute engine for high-performance workloads."
},

{
title:"Tensor Accelerator",
desc:"Dedicated AI acceleration layer for machine learning workloads."
},

{
title:"GPU Subsystem",
desc:"Graphics and parallel compute architecture."
},

{
title:"CORELINK Fabric",
desc:"Custom high-speed interconnect between compute engines."
},

{
title:"Security Engine",
desc:"Hardware security and system protection architecture."
}

];


const tools=[
"Vivado",
"OpenROAD",
"Yosys",
"Verilator",
"GTKWave",
"ASIC Design Flow"
];


export default function Engineering(){


return(

<main
className="
min-h-screen
bg-black
text-white
overflow-hidden
"
>


<Navbar />





{/* HERO */}


<section
className="
relative
pt-40
pb-24
"
>


<div
className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[600px]
h-[600px]
bg-cyan-400/20
blur-[160px]
rounded-full
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
duration:0.8
}}

>


<p
className="
text-cyan-400
tracking-[0.4em]
uppercase
"
>

CORETRION ENGINEERING

</p>


<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

Hardware
Engineering

</h1>


<p
className="
text-gray-400
text-xl
max-w-3xl
mt-6
"
>

From processor architecture and RTL development to FPGA prototyping and ASIC readiness, CORETRION engineering builds complete semiconductor systems.

</p>


</motion.div>


</div>

</section>









{/* DEVELOPMENT FLOW */}


<section
className="
py-24
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-black
"
>

Development Flow

</h2>



<div
className="
grid
md:grid-cols-5
gap-6
mt-12
"
>


{
flow.map((item,index)=>(

<motion.div

key={item}

whileHover={{
scale:1.05
}}

className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
text-center
"

>


<div
className="
text-cyan-400
text-3xl
font-black
"
>

0{index+1}

</div>


<p
className="
mt-4
font-semibold
"
>

{item}

</p>



</motion.div>


))
}


</div>


</div>


</section>









{/* DOMAINS */}


<section
className="
py-24
bg-white/5
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-black
"
>

Engineering Domains

</h2>




<div
className="
grid
md:grid-cols-3
gap-8
mt-12
"
>


{

domains.map(card=>(


<motion.div

key={card.title}

whileHover={{
y:-10
}}

className="
rounded-3xl
border
border-white/10
bg-black
p-8
"

>


<h3
className="
text-2xl
font-bold
text-cyan-400
"
>

{card.title}

</h3>


<p
className="
text-gray-400
mt-4
"
>

{card.desc}

</p>


</motion.div>


))


}


</div>


</div>


</section>









{/* VERIFICATION */}


<section
className="
py-24
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-black
"
>

Verification Pipeline

</h2>



<div
className="
grid
md:grid-cols-4
gap-6
mt-12
"
>


{
[
"Simulation",
"Testbench",
"Coverage",
"Performance Analysis"
].map(item=>(


<div

key={item}

className="
bg-white/5
border
border-white/10
rounded-xl
p-6
"

>

{item}

</div>


))
}


</div>


</div>


</section>









{/* TOOLS */}


<section
className="
py-24
bg-white/5
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-black
"
>

Engineering Tools

</h2>


<div
className="
flex
flex-wrap
gap-5
mt-10
"
>


{
tools.map(tool=>(


<div

key={tool}

className="
px-6
py-4
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
"

>

{tool}

</div>


))
}


</div>


</div>


</section>








{/* STATS */}


<section
className="
py-24
"
>


<div
className="
max-w-5xl
mx-auto
grid
md:grid-cols-4
gap-8
px-6
text-center
"
>


<div>
<h3 className="text-4xl font-black text-cyan-400">
32
</h3>
<p className="text-gray-400">
Bit Architecture
</p>
</div>


<div>
<h3 className="text-4xl font-black text-cyan-400">
5
</h3>
<p className="text-gray-400">
Pipeline Stages
</p>
</div>


<div>
<h3 className="text-4xl font-black text-cyan-400">
4
</h3>
<p className="text-gray-400">
Compute Engines
</p>
</div>


<div>
<h3 className="text-4xl font-black text-cyan-400">
2027
</h3>
<p className="text-gray-400">
ASIC Target
</p>
</div>


</div>


</section>





<Footer />


</main>

)

}