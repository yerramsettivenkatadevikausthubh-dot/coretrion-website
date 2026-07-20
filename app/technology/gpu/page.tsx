import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Cpu,
  Layers,
  Zap,
  Grid3X3,
} from "lucide-react";


const features = [

{
title:"Parallel Processing Architecture",
description:
"Dedicated GPU compute subsystem enabling massive parallel execution for graphics, AI workloads and accelerated computing.",
icon:Grid3X3
},

{
title:"Compute Core Array",
description:
"Multiple parallel execution units designed for high throughput mathematical operations.",
icon:Cpu
},

{
title:"Accelerated Workloads",
description:
"Optimized for AI processing, image workloads, simulation and high performance computing.",
icon:Zap
},

{
title:"Heterogeneous Integration",
description:
"Seamless communication between GPU, CPU, Tensor accelerator and CORELINK™ fabric.",
icon:Layers
}

];



export default function GPUPage(){


return(

<main className="bg-black min-h-screen overflow-hidden">


<Navbar/>




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
w-[750px]
h-[750px]
rounded-full
bg-orange-500/10
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
grid
lg:grid-cols-2
gap-16
items-center
"
>


<div>


<p
className="
text-orange-400
tracking-[0.4em]
uppercase
font-semibold
"
>

Parallel Compute Engine

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

GPU Subsystem

</h1>



<p
className="
mt-8
text-xl
text-gray-400
leading-relaxed
"
>

CORETRION™ GPU architecture provides parallel
processing capability for graphics acceleration,
AI workloads and compute-intensive applications.

</p>



<div
className="
mt-10
flex
flex-wrap
gap-4
"
>


{
[
"Parallel Compute",
"GPU Core Array",
"AI Processing",
"High Throughput"
].map(item=>(


<span
key={item}
className="
px-5
py-3
rounded-full
bg-orange-500/10
border
border-orange-400/30
text-orange-400
"
>

{item}

</span>


))
}


</div>


</div>







<div
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
bg-orange-400/20
blur-[130px]
"
/>


<div
className="
relative
w-[420px]
h-[420px]
rounded-3xl
border
border-orange-400/30
shadow-[0_0_120px_rgba(251,146,60,0.35)]
"
>


<Image

src="/images/gpu-architecture.png"

alt="GPU Architecture"

fill

className="
object-contain
p-8
"

/>


</div>


</div>


</div>


</section>







<section
className="
max-w-7xl
mx-auto
px-6
pb-24
"
>


<h2
className="
text-4xl
md:text-5xl
font-black
text-white
"
>

GPU Architecture Features

</h2>




<div
className="
grid
md:grid-cols-2
gap-8
mt-12
"
>


{
features.map((item)=>{


const Icon=item.icon;


return(

<div

key={item.title}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
hover:border-orange-400/50
transition
"

>


<Icon

size={36}

className="text-orange-400"

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


</div>


)

})

}


</div>


</section>








<section
className="
border-t
border-white/10
py-20
"
>


<div
className="
max-w-5xl
mx-auto
px-6
text-center
"
>


<h2
className="
text-4xl
font-black
text-white
"
>

GPU Compute Flow

</h2>



<p
className="
mt-8
text-xl
text-gray-400
"
>

Data Input → GPU Scheduler → Parallel Compute Units → Result Output

</p>


</div>


</section>




<Footer/>


</main>

)

}