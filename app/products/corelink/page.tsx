"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Network,
  Zap,
  Layers,
  Activity,
} from "lucide-react";


const features = [

{
title:"Low Latency Fabric",
description:
"High-speed communication architecture designed for efficient data movement between compute engines and system resources.",
icon: Zap,
},


{
title:"Scalable Interconnect",
description:
"Modular fabric architecture enabling multi-core systems, accelerator communication and future expansion.",
icon: Network,
},


{
title:"Packet Based Communication",
description:
"Custom packet architecture optimized for reliable and intelligent data transfer.",
icon: Layers,
},


{
title:"QoS & Traffic Management",
description:
"Intelligent bandwidth management for processors, accelerators and memory subsystems.",
icon: Activity,
},


];


const applications=[

"Multi Core Processing",
"AI Acceleration",
"High Performance Computing",
"Embedded Systems"

];



export default function CorelinkPage(){


return(

<main className="bg-black min-h-screen overflow-hidden">


<Navbar />



{/* HERO SECTION */}


<section
className="
relative
pt-40
pb-24
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
bg-purple-500/10
blur-[180px]
"
/>



<motion.div

animate={{
x:[0,80,0],
opacity:[0.2,1,0.2]
}}

transition={{
duration:5,
repeat:Infinity
}}

className="
absolute
top-96
left-20
w-3
h-3
rounded-full
bg-purple-400
shadow-[0_0_25px_rgba(168,85,247,1)]
"

/>



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
"
>



{/* LEFT CONTENT */}


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
duration:0.8
}}

>


<p
className="
text-purple-400
tracking-[0.4em]
uppercase
font-semibold
"
>
Compute Interconnect Fabric
</p>



<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
text-white
"
>
CORELINK™
</h1>



<p
className="
mt-8
text-xl
text-gray-400
leading-relaxed
max-w-2xl
"
>
A custom high-performance communication fabric
designed to connect CORETRION™ compute engines,
accelerators, memory systems and intelligent
processing units.
</p>



<div
className="
mt-10
flex
flex-wrap
gap-4
"
>


<span
className="
px-5
py-3
rounded-full
bg-purple-500/10
border
border-purple-400/30
text-purple-400
"
>
High Bandwidth
</span>



<span
className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
"
>
Multi Core
</span>



<span
className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
"
>
AI Data Fabric
</span>


</div>


</motion.div>





{/* CORELINK IMAGE */}



<motion.div

initial={{
opacity:0,
scale:0.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:1
}}

className="
relative
flex
justify-center
"

>


<div
className="
absolute
w-[450px]
h-[450px]
rounded-full
bg-purple-500/20
blur-[130px]
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

style={{

transformStyle:"preserve-3d"

}}

className="
relative
w-[320px]
h-[320px]
md:w-[450px]
md:h-[450px]
rounded-3xl
border
border-purple-400/30
shadow-[0_0_120px_rgba(168,85,247,0.3)]
overflow-hidden
"

>


<Image

src="/images/corelink-fabric.png"

alt="CORELINK Fabric"

fill

priority

className="
object-contain
p-8
"

/>


</motion.div>


</motion.div>


</div>


</section>




{/* ARCHITECTURE SECTION */}


<section
className="
py-24
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

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>


<h2
className="
text-5xl
font-black
text-white
"
>
Fabric Architecture
</h2>



<p
className="
mt-6
text-xl
text-gray-400
"
>
Processor → CORELINK™ Fabric → Accelerators → Memory
</p>



</motion.div>




<div
className="
mt-14
rounded-3xl
border
border-purple-400/20
bg-white/5
p-10
"
>


<div
className="
grid
md:grid-cols-4
gap-6
items-center
"
>


{
[
"CORETRION CPU",
"CORELINK Fabric",
"AI Accelerators",
"Memory System"

].map((item,index)=>(


<motion.div

key={item}

whileHover={{
y:-8
}}

className="
p-6
rounded-2xl
bg-black
border
border-white/10
text-center
"

>


<p
className="
text-purple-400
font-bold
text-lg
"
>
{item}
</p>



{
index!==3 &&

<p
className="
mt-4
text-purple-400
text-2xl
animate-pulse
"
>
→
</p>

}


</motion.div>


))


}



</div>


</div>


</section>







{/* FEATURES */}



<section

className="
pb-24
max-w-7xl
mx-auto
px-6
"

>


<div

className="
grid
md:grid-cols-2
gap-8
"

>


{

features.map((item)=>{


const Icon=item.icon;


return(


<motion.div

key={item.title}

whileHover={{

y:-10

}}

className="
p-8
rounded-3xl
border
border-white/10
bg-white/5
hover:border-purple-400/50
transition
"

>


<Icon

size={38}

className="
text-purple-400
"

/>



<h3

className="
mt-6
text-2xl
font-bold
text-white
"

>

{item.title}

</h3>




<p

className="
mt-4
text-gray-400
leading-7
"

>

{item.description}

</p>


</motion.div>


)


})

}


</div>


</section>







{/* APPLICATIONS */}



<section

className="
border-t
border-white/10
py-20
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>


<h2

className="
text-4xl
font-black
text-white
"

>

Applications

</h2>




<div

className="
grid
md:grid-cols-4
gap-6
mt-10
"

>


{

applications.map(item=>(


<motion.div

key={item}

whileHover={{
y:-8
}}

className="
p-6
rounded-2xl
border
border-white/10
bg-white/5
text-gray-300
"

>

{item}

</motion.div>


))


}


</div>


</div>


</section>







{/* CTA */}



<section

className="
py-24
text-center
"

>


<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<h2

className="
text-4xl
md:text-5xl
font-black
text-white
"

>

Connecting The Future Of Compute

</h2>



<p

className="
mt-6
text-gray-400
text-lg
max-w-3xl
mx-auto
leading-relaxed
"

>

CORELINK™ creates a unified communication layer
between processors, accelerators and memory systems,
enabling scalable heterogeneous computing platforms.

</p>


</motion.div>


</section>







<Footer/>


</main>


)

}