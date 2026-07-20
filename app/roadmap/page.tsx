"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import RoadmapBackground from "./RoadmapBackground";
import RoadmapCanvas from "./RoadmapCanvas";


const metrics = [

{
value:"32-bit",
label:"Hybrid Compute Architecture"
},

{
value:"4+",
label:"Integrated Compute Engines"
},

{
value:"2027",
label:"ASIC Silicon Target"
},

{
value:"100%",
label:"Custom IP Development"
}

];



const status = [

"Custom ISA Architecture ✓",

"RTL Processor Core ✓",

"SIMD Accelerator ✓",

"Tensor Engine ✓",

"GPU Subsystem ✓",

"ASIC Preparation →"

];




export default function RoadmapPage(){


return(


<main
className="
bg-black
min-h-screen
text-white
overflow-hidden
"
>


<Navbar />



<section
className="
relative
pt-40
pb-28
"
>


<RoadmapBackground />



<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
"
>



{/* HERO */}


<motion.div

initial={{
opacity:0,
y:50
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

CORETRION™ DEVELOPMENT ROADMAP

</p>




<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
"
>

Architecture
<br/>
To Silicon

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

A complete semiconductor development journey
from processor architecture and RTL implementation
to FPGA validation and ASIC realization.

</p>


</motion.div>







{/* METRICS */}


<div
className="
grid
grid-cols-2
md:grid-cols-4
gap-6
mt-20
"
>


{

metrics.map(item=>(


<div

key={item.label}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-7
text-center
"

>


<h3
className="
text-3xl
md:text-4xl
font-black
text-cyan-400
"
>

{item.value}

</h3>



<p
className="
mt-3
text-gray-400
"
>

{item.label}

</p>



</div>


))


}


</div>








{/* ROADMAP TIMELINE */}


<div
className="
mt-28
"
>

<RoadmapCanvas />

</div>








{/* CURRENT STATUS */}


<section
className="
mt-32
"
>


<div
className="
grid
lg:grid-cols-2
gap-10
"
>





<motion.div

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-green-400/30
bg-green-400/5
p-10
"

>


<p
className="
text-green-400
tracking-[0.3em]
uppercase
font-bold
"
>

CURRENT DEVELOPMENT STATUS

</p>




<h2
className="
mt-5
text-4xl
font-black
"
>

CORETRION Prototype Phase

</h2>




<p
className="
mt-5
text-gray-400
leading-8
"
>

The processor architecture is progressing through
RTL development, verification and FPGA prototype
validation before ASIC implementation.

</p>



</motion.div>








<motion.div

whileHover={{
y:-8
}}

className="
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

Engineering Completion

</h2>




<div
className="
mt-8
space-y-5
"
>


{

status.map(item=>(


<div

key={item}

className="
flex
items-center
gap-4
text-gray-300
"

>


<div
className="
w-3
h-3
rounded-full
bg-cyan-400
shadow-[0_0_15px_cyan]
"
/>



{item}


</div>


))


}



</div>


</motion.div>




</div>


</section>








{/* ASIC TARGET */}



<section
className="
mt-28
"
>


<div

className="
rounded-3xl
border
border-yellow-400/30
bg-yellow-400/5
p-10
text-center
"

>


<p
className="
uppercase
tracking-[0.4em]
text-yellow-400
"
>

NEXT MAJOR MILESTONE

</p>




<h2
className="
mt-5
text-5xl
font-black
"
>

ASIC Silicon Target : 2027

</h2>




<p
className="
mt-6
text-gray-400
text-lg
max-w-3xl
mx-auto
"
>

RTL freeze, synthesis, physical design,
DRC/LVS verification, tapeout and silicon validation.

</p>


</div>


</section>









{/* SILICON READINESS */}



<section
className="
mt-28
"
>


<div

className="
rounded-3xl
border
border-cyan-400/30
bg-cyan-400/5
p-10
"

>



<div
className="
grid
lg:grid-cols-2
gap-10
items-center
"
>



<div>


<p
className="
text-cyan-400
tracking-[0.35em]
uppercase
font-bold
"
>

ASIC READINESS

</p>




<h2
className="
mt-5
text-4xl
md:text-5xl
font-black
"
>

Validated Architecture
Moving Toward Silicon

</h2>




<p
className="
mt-6
text-gray-400
text-lg
leading-8
"
>

CORETRION™ has progressed from architectural
definition to RTL implementation and subsystem
verification. The next phase focuses on FPGA
validation, physical design preparation and ASIC
realization.

</p>


</div>








<div
className="
space-y-5
"
>


{

[
"✓ Custom ISA Architecture",
"✓ Processor RTL Implementation",
"✓ SIMD Compute Engine",
"✓ Tensor Accelerator",
"✓ GPU Subsystem",
"→ ASIC Fabrication 2027"

].map((item,index)=>(


<motion.div

key={item}

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.1
}}

className="
flex
items-center
gap-4
rounded-xl
border
border-white/10
bg-black/40
px-6
py-4
text-gray-300
"

>


<div
className="
w-3
h-3
rounded-full
bg-cyan-400
shadow-[0_0_20px_cyan]
"
/>


{item}


</motion.div>


))


}



</div>



</div>


</div>


</section>





</div>


</section>



<Footer />


</main>


)

}