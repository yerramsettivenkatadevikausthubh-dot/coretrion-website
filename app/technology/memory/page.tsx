"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCBBackground from "@/components/PCBBackground";


export default function Memory(){


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



<section
className="
relative
pt-40
pb-32
"
>


<PCBBackground />



<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
"
>



<p
className="
text-cyan-400
uppercase
tracking-[0.4em]
"
>

Technology / Memory Architecture

</p>




<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

Memory System

</h1>




<p
className="
mt-8
text-xl
text-gray-400
max-w-3xl
"
>

High efficiency cache hierarchy and memory subsystem
designed for heterogeneous computing workloads across
CPU, SIMD, Tensor and GPU engines.

</p>





<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>


{


[

{
title:"Cache Hierarchy",
desc:"Optimized multi-level cache architecture for low latency data access."
},


{
title:"Unified Memory Fabric",
desc:"Shared memory communication between heterogeneous compute engines."
},


{
title:"High Bandwidth Access",
desc:"Designed to support AI workloads and parallel processing demands."
}


].map(item=>(


<div

key={item.title}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-cyan-400
transition
"

>


<h2
className="
text-2xl
font-bold
"
>

{item.title}

</h2>



<p
className="
mt-4
text-gray-400
"
>

{item.desc}

</p>



</div>


))


}



</div>





<div
className="
mt-20
grid
md:grid-cols-2
gap-8
"
>



<div
className="
bg-black
border
border-white/10
rounded-3xl
p-8
"
>


<h2
className="
text-3xl
font-bold
"
>

CORETRION Memory Flow

</h2>


<p
className="
mt-4
text-gray-400
"
>

Memory subsystem connects processor pipeline,
accelerators and CORELINK fabric to enable
efficient data movement.

</p>


</div>





<div
className="
bg-black
border
border-white/10
rounded-3xl
p-8
"
>


<h2
className="
text-3xl
font-bold
"
>

AI Workload Optimization

</h2>


<p
className="
mt-4
text-gray-400
"
>

Optimized memory access patterns for Tensor,
SIMD and GPU accelerated applications.

</p>


</div>



</div>





</div>


</section>




<Footer />


</main>


)

}