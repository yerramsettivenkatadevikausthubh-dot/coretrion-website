"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Scalar CPU Engine",
    desc: "High efficiency general purpose processing core."
  },
  {
    title: "SIMD Engine",
    desc: "Parallel vector computation for accelerated workloads."
  },
  {
    title: "Tensor Accelerator",
    desc: "Dedicated AI inference and matrix computation engine."
  },
  {
    title: "GPU Compute",
    desc: "Parallel execution architecture for graphics and AI workloads."
  }
];


const specs = [
"32-bit Proprietary ISA",
"Hybrid CPU Architecture",
"AI Acceleration",
"Tensor Processing",
"SIMD Vector Engine",
"FPGA Ready",
"ASIC Target 2027",
"Custom Semiconductor IP"
];


export default function CoretrionPage(){

return(

<main className="bg-black min-h-screen">

<Navbar/>


<section className="
relative
pt-40
pb-28
overflow-hidden
">


<div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[700px]
h-[700px]
bg-cyan-500/10
rounded-full
blur-[180px]
"/>



<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
">


<motion.div
initial={{opacity:0,y:40}}
animate={{opacity:1,y:0}}
transition={{duration:0.8}}
>


<p className="
text-cyan-400
tracking-[0.4em]
uppercase
text-sm
font-semibold
">

PROCESSOR ARCHITECTURE

</p>



<h1 className="
mt-6
text-6xl
md:text-8xl
font-black
text-white
">

CORETRION™

</h1>



<p className="
mt-8
max-w-4xl
text-xl
text-gray-400
leading-relaxed
">

A proprietary 32-bit hybrid compute architecture
combining scalar processing, SIMD acceleration,
Tensor computing and GPU execution engines
for next generation intelligent systems.

</p>


</motion.div>



{/* IMAGE */}


<motion.div

initial={{opacity:0,scale:.8}}

animate={{opacity:1,scale:1}}

transition={{duration:1}}

className="
mt-20
flex
justify-center
"

>


<div className="
relative
w-[320px]
h-[320px]
md:w-[500px]
md:h-[500px]
rounded-3xl
border
border-cyan-400/30
shadow-[0_0_120px_rgba(0,255,255,.35)]
overflow-hidden
">


<Image

src="/images/coretrion-chip.png"

alt="CORETRION"

fill

className="
object-contain
p-8
"

/>


</div>


</motion.div>




{/* FEATURES */}



<div className="
grid
md:grid-cols-4
gap-8
mt-24
">


{
features.map((item,index)=>(


<motion.div

key={item.title}

whileHover={{
y:-10
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
"


>


<h3 className="
text-xl
font-bold
text-white
">

{item.title}

</h3>


<p className="
mt-4
text-gray-400
">

{item.desc}

</p>


</motion.div>


))
}


</div>





{/* SPECIFICATIONS */}



<div className="
mt-24
rounded-3xl
border
border-cyan-400/20
bg-cyan-500/5
p-10
">


<h2 className="
text-4xl
font-black
text-white
">

Architecture Specifications

</h2>


<div className="
grid
md:grid-cols-4
gap-5
mt-10
">


{
specs.map(item=>(

<div

key={item}

className="
px-5
py-4
rounded-xl
border
border-white/10
text-cyan-300
bg-black/40
"

>

{item}

</div>

))
}


</div>


</div>




</div>


</section>



<Footer/>


</main>

)

}