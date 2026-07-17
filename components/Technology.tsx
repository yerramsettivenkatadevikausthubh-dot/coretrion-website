"use client";


const architecture = [

{
title:"CORETRION™ Architecture",
image:"/images/coretrion_overall.png",
description:
"Complete processor architecture combining scalar execution, SIMD acceleration, Tensor compute and GPU processing."
},


{
title:"Pipeline Architecture",
image:"/images/coretrion-datapath.png",
description:
"Multi-stage instruction pipeline optimized for high performance computing."
},


{
title:"GPU Subsystem",
image:"/images/gpu-architecture.png",
description:
"Parallel processing architecture for graphics and AI workloads."
},


{
title:"Tensor Accelerator",
image:"/images/tensor-engine.png",
description:
"Dedicated machine learning acceleration engine."
},


{
title:"Memory Subsystem",
image:"/images/memory-system.png",
description:
"High performance memory hierarchy and data movement architecture."
},


{
title:"Security Architecture",
image:"/images/security.png",
description:
"Hardware security mechanisms for reliable computing."
}


];



export default function Technology(){


return (

<section className="
py-24
bg-black
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-5xl
font-bold
text-white
">

Technology

</h2>



<p className="
mt-5
text-gray-400
text-lg
max-w-3xl
">

Explore the engineering blocks behind the CORETRION™ computing ecosystem.

</p>




<div className="
grid
md:grid-cols-3
gap-8
mt-14
">


{

architecture.map((item)=>(


<div

key={item.title}

className="
bg-white/5
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-cyan-400
transition-all
duration-300
"


>


<div className="
h-56
bg-black
overflow-hidden
">


<img

src={item.image}

alt={item.title}

className="
w-full
h-full
object-cover
hover:scale-110
transition
duration-500
"

/>


</div>



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


<button

className="
mt-6
text-cyan-400
"

>

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