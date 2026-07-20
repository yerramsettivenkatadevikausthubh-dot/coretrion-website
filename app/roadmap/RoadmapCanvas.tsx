"use client";

import { motion } from "framer-motion";
import { roadmapData } from "./roadmapData";


export default function RoadmapCanvas(){

return(

<div className="
relative
w-full
">

{/* Timeline Core */}

<div className="
absolute
left-1/2
top-0
bottom-0
hidden
md:block
w-[2px]
bg-gradient-to-b
from-cyan-400
via-purple-500
to-green-400
"
/>



<div className="
space-y-20
">

{

roadmapData.map((item,index)=>(


<motion.div

key={item.year}

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
duration:.8,
delay:index*0.2
}}

className="
relative
grid
md:grid-cols-2
gap-10
items-center
"

>



{/* YEAR NODE */}

<div
className={`
${index%2===0
?
"md:text-right md:pr-20"
:
"md:order-2 md:text-left md:pl-20"
}
`}
>


<motion.div

whileHover={{
scale:1.08
}}

className="
inline-flex
items-center
justify-center
w-32
h-32
rounded-full
border
border-cyan-400/40
bg-cyan-400/10
shadow-[0_0_60px_rgba(34,211,238,0.4)]
"

>


<span
className="
text-3xl
font-black
text-cyan-400
"
>

{item.year}

</span>


</motion.div>




<h2
className="
mt-8
text-3xl
font-black
text-white
"
>

{item.phase}

</h2>



<p
className="
mt-5
text-gray-400
leading-8
"
>

{item.description}

</p>


</div>






{/* MILESTONE CARD */}


<div

className={`
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
p-8
relative
overflow-hidden
${index%2===0
?
""
:
"md:order-1"
}
`}

>


{/* Glow */}

<div
className="
absolute
top-0
right-0
w-40
h-40
bg-cyan-400/10
blur-3xl
"
/>



<div
className="
relative
z-10
"
>


<div
className="
flex
items-center
justify-between
"
>


<h3
className="
text-xl
font-bold
text-cyan-400
"
>

Milestones

</h3>



<span
className="
px-4
py-2
rounded-full
text-sm
border
border-white/10
text-gray-400
"
>

{item.status}

</span>


</div>




<ul
className="
mt-8
space-y-4
"
>


{

item.milestones.map((m)=>(


<li

key={m}

className="
flex
gap-4
text-gray-300
"

>


<span
className="
text-cyan-400
font-bold
"
>
▸
</span>


{m}


</li>


))

}


</ul>



</div>


</div>





{/* NODE POINT */}

<div
className="
absolute
hidden
md:block
left-1/2
-translate-x-1/2
w-5
h-5
rounded-full
bg-cyan-400
shadow-[0_0_25px_rgba(34,211,238,1)]
"
/>



</motion.div>


))


}


</div>


</div>


)

}