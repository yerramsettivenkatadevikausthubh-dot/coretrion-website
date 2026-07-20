"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PCBBackground from "./PCBBackground";


export default function Hero(){


const blocks=[

{
name:"CPU CORE",
desc:"Scalar Compute"
},

{
name:"SIMD ENGINE",
desc:"Parallel Processing"
},

{
name:"TENSOR",
desc:"AI Acceleration"
},

{
name:"CORELINK",
desc:"Interconnect Fabric"
}

];



return (

<section

className="
relative
min-h-screen
overflow-hidden
bg-[#020617]
flex
items-center
pt-28
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
grid
lg:grid-cols-2
gap-16
items-center
w-full
"

>



{/* LEFT */}


<motion.div

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>


<p

className="
text-cyan-400
uppercase
tracking-[0.5em]
text-sm
font-semibold
"

>

NEXT GENERATION COMPUTE PLATFORM

</p>



<h1

className="
text-white
font-black
text-5xl
lg:text-7xl
leading-tight
mt-6
"

>

CORETRION™

<br/>

<span

className="
text-transparent
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
"

>

Hybrid Compute Processor

</span>


</h1>



<p

className="
text-gray-400
text-lg
lg:text-xl
mt-8
max-w-xl
leading-relaxed
"

>

A proprietary 32-bit architecture integrating

CPU,

SIMD,

Tensor AI acceleration,

and GPU compute into a unified intelligent processing platform.

</p>




<div

className="
flex
gap-5
mt-10
flex-wrap
"

>


<a

href="/products/coretrion"

className="
px-8
py-4
rounded-full
bg-cyan-400
text-black
font-bold
hover:scale-105
transition
"

>

Explore CORETRION™

</a>



<a

href="/technology"

className="
px-8
py-4
rounded-full
border
border-white/20
text-white
hover:border-cyan-400
hover:text-cyan-400
transition
"

>

Architecture

</a>


</div>





{/* SPECS */}


<div

className="
grid
grid-cols-3
gap-8
mt-16
"

>


<div>

<h3

className="
text-cyan-400
text-3xl
font-black
"

>
32
</h3>

<p className="text-gray-500 text-sm">
Bit ISA
</p>


</div>



<div>

<h3

className="
text-cyan-400
text-3xl
font-black
"

>
4
</h3>

<p className="text-gray-500 text-sm">
Compute Units
</p>


</div>



<div>

<h3

className="
text-cyan-400
text-3xl
font-black
"

>
2027
</h3>

<p className="text-gray-500 text-sm">
ASIC Target
</p>


</div>



</div>



</motion.div>





{/* CHIP AREA */}



<div

className="
relative
flex
justify-center
items-center
h-[550px]
"

>



<motion.div

animate={{

scale:[1,1.15,1]

}}

transition={{

duration:5,
repeat:Infinity

}}

className="
absolute
w-[450px]
h-[450px]
bg-cyan-400/20
blur-[120px]
rounded-full
"

/>




<motion.div

animate={{

rotateY:[0,360]

}}

transition={{

duration:25,
repeat:Infinity,
ease:"linear"

}}

className="
relative
w-[330px]
h-[330px]
lg:w-[430px]
lg:h-[430px]
rounded-3xl
border
border-cyan-400/40
overflow-hidden
shadow-[0_0_120px_rgba(0,229,255,0.4)]
"

>


<Image

src="/images/coretrion.png"

alt="CORETRION silicon processor"

fill

priority

className="
object-contain
p-8
"

/>


</motion.div>





{/* FLOATING BLOCKS */}


{

blocks.map((b,i)=>(


<motion.div

key={b.name}

animate={{

y:[0,i%2?15:-15,0]

}}

transition={{

duration:4+i,
repeat:Infinity

}}

className={`

absolute

glass-panel

rounded-xl

px-5
py-3

${

i===0?
"left-0 top-20":
i===1?
"right-0 top-32":
i===2?
"left-4 bottom-32":
"right-0 bottom-20"

}

`}


>


<p className="
text-cyan-400
font-bold
text-sm
">

{b.name}

</p>

<p className="
text-gray-400
text-xs
">

{b.desc}

</p>


</motion.div>


))

}



</div>



</div>

</section>


);


}