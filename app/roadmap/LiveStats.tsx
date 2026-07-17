"use client";

import { motion } from "framer-motion";

const stats = [

["RTL Modules",62],

["Verified",47],

["Architecture Blocks",18],

["ISA Instructions",64]

];

export default function LiveStats(){

return(

<div className="

grid

grid-cols-4

gap-8

mb-20

">

{

stats.map(([title,value])=>(

<div

key={title}

className="

bg-[#0b1018]

border

border-cyan-500/20

rounded-2xl

p-8

text-center

"

>

<p className="text-gray-400">

{title}

</p>

<motion.h2

initial={{number:0}}

animate={{number:value}}

transition={{duration:2}}

>

{value}

</motion.h2>

</div>

))

}

</div>

)

}