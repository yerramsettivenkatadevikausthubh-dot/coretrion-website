"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


const instructionGroups = [

{
title:"R TYPE Instructions",
color:"cyan",
items:[
"OP_ADD 000000",
"OP_SUB 000001",
"OP_MUL 000010",
"OP_AND 000011",
"OP_OR  000100"
]
},


{
title:"I TYPE Instructions",
color:"purple",
items:[
"OP_LOAD 000101",
"OP_STORE 000110",
"OP_ADDI 000111"
]
},


{
title:"Control Instructions",
color:"green",
items:[
"OP_BEQ 001000",
"OP_JUMP 001001",
"OP_SYSCALL 111000",
"OP_ERET 111001"
]
},


{
title:"Accelerator Instructions",
color:"yellow",
items:[
"OP_TENSOR 101000",
"OP_SIMD 101001",
"OP_ML 101010",
"OP_SIMD_ADD 110000",
"OP_SIMD_SUB 110001",
"OP_SIMD_MUL 110010"
]
}

];




export default function ISADocumentation(){


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
font-bold
"
>

CORETRION™ ISA

</p>



<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
"
>

Instruction Set Architecture

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

A proprietary 32-bit instruction architecture
designed for heterogeneous computing with
scalar processing, SIMD acceleration,
Tensor computation and GPU execution.

</p>


</motion.div>







<div
className="
mt-20
grid
md:grid-cols-2
gap-8
"
>


{
instructionGroups.map((group,index)=>(


<motion.div

key={group.title}

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
delay:index*0.15
}}

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


<h2
className="
text-2xl
font-black
text-cyan-400
"
>

{group.title}

</h2>



<div
className="
mt-6
space-y-3
"
>


{
group.items.map(item=>(


<div

key={item}

className="
rounded-xl
bg-black
border
border-white/10
px-5
py-4
font-mono
text-gray-300
"

>

{item}

</div>


))

}


</div>


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
"
>


<h2
className="
text-4xl
font-black
"
>

Execution Classes

</h2>



<div
className="
grid
md:grid-cols-3
gap-6
mt-10
"
>


{
[
"EXEC_SCALAR 000",
"EXEC_MEMORY 001",
"EXEC_SIMD 010",
"EXEC_TENSOR 011",
"EXEC_GPU 100",
"EXEC_SYSTEM 101"
].map(item=>(


<div
key={item}
className="
rounded-2xl
border
border-white/10
bg-black
p-6
text-cyan-400
font-mono
"
>

{item}

</div>


))
}


</div>


</section>






<section
className="
mt-16
rounded-3xl
border
border-white/10
bg-white/5
p-10
"
>


<h2
className="
text-3xl
font-black
"
>

Architecture Philosophy

</h2>


<p
className="
mt-5
text-gray-400
leading-8
"
>

CORETRION™ ISA is designed as a custom instruction
framework optimized for heterogeneous workloads,
allowing direct execution of AI, vector processing,
graphics and general-purpose computing operations
within a unified processor architecture.

</p>


</section>





</div>


</section>



<Footer />


</main>

)

}