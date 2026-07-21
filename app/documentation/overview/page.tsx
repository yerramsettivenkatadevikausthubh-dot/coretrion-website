"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
FileText,
Download,
Cpu
} from "lucide-react";


export default function OverviewPage(){

return(

<main className="min-h-screen bg-black text-white">

<Navbar/>


<section
className="
pt-40
pb-32
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

>


<p
className="
text-cyan-400
uppercase
tracking-[0.5em]
font-semibold
"
>

DOCUMENTATION

</p>


<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
"
>

CORETRION™
<br/>

Product Overview

</h1>



<p
className="
mt-8
max-w-3xl
text-xl
text-gray-400
leading-8
"
>

A comprehensive technical overview describing
the CORETRION™ 32-bit Hybrid Compute Processor,
architecture vision,
compute engines,
development roadmap and product direction.

</p>


</motion.div>




<div
className="
mt-20
max-w-3xl
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-10
"
>


<div
className="
flex
items-center
gap-5
"
>

<div
className="
w-16
h-16
rounded-2xl
bg-cyan-500/10
border
border-cyan-400/30
flex
items-center
justify-center
"
>

<FileText
className="text-cyan-400"
size={32}
/>

</div>


<div>

<h2
className="
text-3xl
font-black
"
>

CORETRION™ Product Overview

</h2>


<p
className="
text-gray-400
mt-2
"
>

Preliminary Technical Product Brief

</p>

</div>

</div>




<div
className="
mt-10
flex
items-center
gap-4
"
>

<Cpu
className="text-cyan-400"
/>

<span>
32-bit Hybrid Compute Processor
</span>

</div>



<a

href="/documents/CORETRION_Product_Overview.pdf"

download

className="
mt-10
inline-flex
items-center
gap-3
px-8
py-4
rounded-full
bg-cyan-400
text-black
font-bold
hover:bg-cyan-300
transition
"

>


Download Product Overview


<Download
size={20}
/>


</a>



</div>



</section>



<Footer/>

</main>

)

}