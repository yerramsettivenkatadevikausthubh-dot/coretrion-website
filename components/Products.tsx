"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Network, ShieldCheck } from "lucide-react";


const products=[

{
name:"CORETRION™",

category:"COMPUTE PROCESSOR",

icon:Cpu,

image:"/images/coretrion-chip.png",

description:
"32-bit hybrid compute processor architecture combining scalar CPU, SIMD acceleration, Tensor AI processing and GPU compute.",

features:[
"Custom ISA",
"CPU Core",
"SIMD Engine",
"Tensor Accelerator",
"GPU Compute"
],

status:"PROCESSOR PLATFORM",

href:"/products/coretrion",

glow:
"shadow-[0_0_80px_rgba(0,229,255,0.25)]"

},


{
name:"CORELINK™",

category:"INTERCONNECT FABRIC",

icon:Network,

image:"/images/corelink-fabric.png",

description:
"High performance communication fabric enabling scalable connection between heterogeneous compute engines.",

features:[
"Packet Fabric",
"Low Latency",
"High Bandwidth",
"QoS",
"Multi Core"
],

status:"SYSTEM INTERCONNECT",

href:"/products/corelink",

glow:
"shadow-[0_0_80px_rgba(168,85,247,0.25)]"

},



{
name:"CHIPSETRON™",

category:"CONTROLLER PLATFORM",

icon:ShieldCheck,

image:"/images/chipsetron-controller.png",

description:
"Embedded controller ecosystem designed for intelligent CORETRION based computing platforms.",

features:[
"Security",
"I/O Control",
"Power Management",
"Boot System",
"Monitoring"
],

status:"EMBEDDED PLATFORM",

href:"/products/chipsetron",

glow:
"shadow-[0_0_80px_rgba(34,197,94,0.25)]"

}

];



export default function Products(){


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
w-[900px]
h-[900px]
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



{/* HEADER */}


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

className="
text-center
"

>


<p

className="
text-cyan-400
tracking-[0.5em]
uppercase
text-sm
font-semibold
"

>

SEMICONDUCTOR ECOSYSTEM

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

Compute Platforms

</h2>


<p

className="
text-gray-400
max-w-3xl
mx-auto
mt-8
text-lg
leading-8
"

>

A complete hardware ecosystem combining processors,
interconnect technology and intelligent controllers.

</p>


</motion.div>





{/* PRODUCTS */}



<div

className="
grid
lg:grid-cols-3
gap-10
mt-20
"

>


{

products.map((product,index)=>{


const Icon=product.icon;


return (

<motion.div


key={product.name}


initial={{
opacity:0,
y:60
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}


transition={{
duration:.7,
delay:index*.2
}}


whileHover={{
y:-12
}}


className={`

relative

rounded-3xl

border

border-white/10

bg-white/[0.03]

backdrop-blur-xl

overflow-hidden

${product.glow}

`}


>


{/* IMAGE */}



<div

className="
relative
h-72
flex
items-center
justify-center
bg-gradient-to-b
from-white/5
to-transparent
"

>


<Image

src={product.image}

alt={product.name}

width={300}

height={300}

className="
object-contain
group-hover:scale-110
transition
duration-700
"

/>


</div>





<div className="p-8">


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

{product.category}


</div>




<h3

className="
text-white
text-3xl
font-black
mt-5
"

>

{product.name}

</h3>




<span

className="
inline-block
mt-4
px-4
py-2
rounded-full
bg-cyan-500/10
border
border-cyan-500/20
text-cyan-300
text-xs
"

>

{product.status}

</span>




<p

className="
text-gray-400
mt-6
leading-7
"

>

{product.description}

</p>




<div

className="
flex
flex-wrap
gap-3
mt-8
"

>


{

product.features.map(feature=>(


<span

key={feature}

className="
px-3
py-2
rounded-full
text-xs
bg-white/5
border
border-white/10
text-gray-300
"

>

{feature}

</span>


))

}


</div>





<Link

href={product.href}

className="
inline-flex
items-center
gap-3
mt-10
text-cyan-400
font-semibold
"

>

Explore Platform

<ArrowRight size={18}/>


</Link>


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