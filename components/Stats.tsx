"use client";

import { motion } from "framer-motion";


const stats=[

{
number:"32",
unit:"BIT",
label:"Hybrid Compute Architecture",
description:"Custom processor ISA"
},


{
number:"4+",
unit:"ENGINES",
label:"Compute Accelerators",
description:"CPU • SIMD • Tensor • GPU"
},


{
number:"2027",
unit:"",
label:"ASIC Fabrication Target",
description:"Silicon roadmap"
},


{
number:"100%",
unit:"",
label:"Custom IP",
description:"Independent architecture"
}


];



export default function Stats(){


return (

<section

className="
relative
py-24
bg-[#020617]
overflow-hidden
"

>


<div

className="
absolute
left-1/2
top-0
-translate-x-1/2
w-[700px]
h-[300px]
bg-cyan-500/10
blur-[120px]
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


<div

className="
grid
grid-cols-2
lg:grid-cols-4
gap-6
"

>


{

stats.map((item,index)=>(


<motion.div


key={item.label}


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

duration:.6,
delay:index*.15

}}


whileHover={{

y:-8

}}


className="

group

rounded-3xl

border

border-white/10

bg-white/[0.03]

backdrop-blur-xl

p-8

text-center

hover:border-cyan-400/40

transition

"

>


<h3

className="
text-5xl
font-black
text-cyan-400
"

>


{item.number}

<span

className="
text-xl
ml-2
text-cyan-300
"

>

{item.unit}

</span>


</h3>



<p

className="
mt-5
text-white
font-bold
text-lg
"

>

{item.label}

</p>



<p

className="
mt-3
text-gray-500
text-sm
"

>

{item.description}

</p>




<div

className="
mt-6
h-[2px]
w-full
bg-gradient-to-r
from-transparent
via-cyan-400
to-transparent
opacity-40
"

/>



</motion.div>


))


}



</div>


</div>


</section>


);


}