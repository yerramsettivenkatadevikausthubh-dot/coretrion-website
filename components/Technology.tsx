import Link from "next/link";


const architecture=[

{
title:"CORETRION Architecture",
image:"/images/coretrion-overall.png",
description:
"Complete processor architecture integrating scalar compute, SIMD, Tensor and GPU engines."
},

{
title:"Pipeline Architecture",
image:"/images/coretrion-datapath.png",
description:
"Multi-stage execution pipeline with optimized instruction flow."
},

{
title:"GPU Subsystem",
image:"/images/gpu-architecture.png",
description:
"Parallel compute architecture for graphics and AI workloads."
},

{
title:"Tensor Accelerator",
image:"/images/tensor-engine.png",
description:
"Dedicated AI acceleration engine for machine learning workloads."
},

{
title:"Memory System",
image:"/images/memory-system.png",
description:
"Cache hierarchy and memory communication architecture."
},

{
title:"Security Architecture",
image:"/images/security.png",
description:
"Hardware security and system protection mechanisms."
}

];



export default function Technology(){


return(

<section className="
bg-black
py-24
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-5xl
font-black
text-white
">

Technology

</h2>


<p className="
mt-5
text-gray-400
max-w-3xl
text-lg
">

Explore the engineering architecture behind the CORETRION™ computing platform.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-14
">


{
architecture.map(item=>(


<div

key={item.title}

className="
rounded-3xl
border
border-white/10
overflow-hidden
bg-white/5
hover:border-cyan-400
transition
"


>


<img

src={item.image}

alt={item.title}

className="
h-56
w-full
object-cover
"

/>



<div className="p-7">


<h3 className="
text-2xl
font-bold
text-white
">

{item.title}

</h3>



<p className="
mt-4
text-gray-400
">

{item.description}

</p>


<button className="
mt-6
text-cyan-400
">

View Architecture →

</button>



</div>


</div>


))

}


</div>


</div>


</section>

)

}