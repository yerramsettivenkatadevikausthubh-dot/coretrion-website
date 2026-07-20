"use client";

import { motion } from "framer-motion";


export default function RoadmapBackground(){

return(

<div
className="
absolute
inset-0
overflow-hidden
pointer-events-none
"
>


{/* Main Glow */}

<motion.div

animate={{
scale:[1,1.15,1],
opacity:[0.15,0.35,0.15]
}}

transition={{
duration:8,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[900px]
h-[900px]
rounded-full
bg-cyan-500/20
blur-[180px]
"

/>





{/* PCB Grid */}

<div

className="
absolute
inset-0
opacity-[0.15]
"

style={{

backgroundImage:

`
linear-gradient(
rgba(34,211,238,0.3) 1px,
transparent 1px
),

linear-gradient(
90deg,
rgba(34,211,238,0.3) 1px,
transparent 1px
)
`,

backgroundSize:
"80px 80px"

}}

/>






{/* Floating Silicon Nodes */}


{

[
{
x:"15%",
y:"25%"
},

{
x:"80%",
y:"35%"
},

{
x:"20%",
y:"75%"
},

{
x:"75%",
y:"80%"
}

].map((node,index)=>(


<motion.div

key={index}

animate={{

opacity:[0.2,1,0.2],

scale:[1,1.4,1]

}}

transition={{

duration:3+index,
repeat:Infinity

}}

className="
absolute
w-3
h-3
rounded-full
bg-cyan-400
shadow-[0_0_30px_rgba(34,211,238,1)]
"

style={{

left:node.x,

top:node.y

}}

/>


))


}





{/* Data Flow Lines */}


<motion.div

animate={{
x:["-20%","120%"]
}}

transition={{

duration:6,
repeat:Infinity,
ease:"linear"

}}

className="
absolute
top-1/3
left-0
h-[2px]
w-full
bg-gradient-to-r
from-transparent
via-cyan-400
to-transparent
opacity-40
"

/>





<motion.div

animate={{

x:["120%","-20%"]

}}

transition={{

duration:8,
repeat:Infinity,
ease:"linear"

}}

className="
absolute
top-2/3
left-0
h-[2px]
w-full
bg-gradient-to-r
from-transparent
via-purple-400
to-transparent
opacity-30
"

/>






{/* Bottom Semiconductor Glow */}

<div

className="
absolute
bottom-0
left-1/2
-translate-x-1/2
w-[1000px]
h-[300px]
bg-green-400/10
blur-[150px]
"

/>


</div>


)

}