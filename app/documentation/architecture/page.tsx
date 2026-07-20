"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


const pipeline = [

"Instruction Fetch",

"Instruction Decode",

"Execute / Route",

"Memory Access",

"Write Back"

];


const engines = [

{
title:"Scalar Processing Unit",
description:
"General purpose execution engine responsible for arithmetic operations, control instructions and sequential workloads."
},


{
title:"SIMD Compute Engine",
description:
"Parallel vector processing unit designed for accelerated mathematical and multimedia workloads."
},


{
title:"Tensor Accelerator",
description:
"Dedicated AI computation engine optimized for matrix multiplication and machine learning operations."
},


{
title:"GPU Compute Subsystem",
description:
"Parallel execution architecture for graphics processing and massively parallel workloads."
},


{
title:"CORELINK Fabric",
description:
"Custom communication infrastructure connecting processor cores, accelerators and memory systems."
},


{
title:"Memory Subsystem",
description:
"High-performance data storage and movement architecture supporting compute engines."
}

];



export default function ArchitectureDocumentation(){


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
w-[800px]
h-[800px]
rounded-full
bg-purple-500/10
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
text-purple-400
tracking-[0.5em]
uppercase
font-bold
"
>

CORETRION™ ARCHITECTURE

</p>



<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
"
>

Processor Architecture

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

A heterogeneous 32-bit compute architecture
combining CPU execution, AI acceleration,
vector processing and GPU computing.

</p>


</motion.div>







{/* PIPELINE */}


<section className="mt-24">


<h2
className="
text-4xl
font-black
"
>

Pipeline Architecture

</h2>



<div
className="
grid
md:grid-cols-5
gap-6
mt-10
"
>


{
pipeline.map((item,index)=>(


<motion.div

key={item}

whileHover={{
scale:1.05
}}

className="
rounded-2xl
border
border-purple-400/30
bg-white/5
p-6
text-center
"

>


<div
className="
text-purple-400
font-black
text-3xl
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


</section>








{/* COMPUTE ENGINES */}



<section className="mt-28">


<h2
className="
text-4xl
font-black
"
>

Compute Architecture

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
engines.map((engine,index)=>(


<motion.div

key={engine.title}

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


<p
className="
text-purple-400
font-bold
"
>

MODULE 0{index+1}

</p>


<h3
className="
mt-5
text-2xl
font-black
"
>

{engine.title}

</h3>


<p
className="
mt-5
text-gray-400
leading-7
"
>

{engine.description}

</p>


</motion.div>


))

}


</div>


</section>








{/* SYSTEM FLOW */}



<section
className="
mt-28
rounded-3xl
border
border-purple-400/20
bg-purple-400/5
p-10
"
>


<h2
className="
text-4xl
font-black
"
>

System Data Flow

</h2>



<div
className="
mt-10
flex
flex-wrap
items-center
justify-center
gap-5
"
>


{
[
"Instruction Memory",
"CORETRION Core",
"CORELINK",
"Accelerators",
"Memory System"
].map((item,index)=>(


<div
key={item}
className="
px-6
py-5
rounded-2xl
bg-black
border
border-white/10
text-purple-400
font-bold
"
>

{item}

{index!==4 && 
<span className="ml-5 text-gray-500">
→
</span>
}

</div>


))
}


</div>


</section>







</div>


</section>



<Footer />



</main>

)

}