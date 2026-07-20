import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


const technologies = [

{
title:"CORETRION™ Pipeline",
description:
"Multi-stage processor execution pipeline designed for efficient instruction processing.",
image:"/images/coretrion-datapath.png",
href:"/technology/pipeline"
},

{
title:"SIMD Engine",
description:
"Parallel vector computation architecture for high performance workloads.",
image:"/images/simd.png",
href:"/technology/simd"
},

{
title:"Tensor Accelerator",
description:
"Dedicated AI acceleration engine for machine learning workloads.",
image:"/images/tensor-engine.png",
href:"/technology/tensor"
},

{
title:"GPU Subsystem",
description:
"Parallel compute architecture for graphics and AI acceleration.",
image:"/images/gpu-architecture.png",
href:"/technology/gpu"
},

{
title:"Memory Architecture",
description:
"High bandwidth memory subsystem for intelligent data movement.",
image:"/images/memory-system.png",
href:"/technology/memory"
},

{
title:"Security Architecture",
description:
"Hardware security layer for reliable semiconductor platforms.",
image:"/images/security.png",
href:"/technology/security"
},

{
title:"CORELINK™ Fabric",
description:
"Custom interconnect architecture connecting compute engines.",
image:"/images/corelink-fabric.png",
href:"/technology/corelink"
}

];



export default function TechnologyPage(){

return(

<main className="bg-black min-h-screen">


<Navbar/>


<section className="
pt-40
pb-20
text-center
max-w-7xl
mx-auto
px-6
">


<p className="
text-cyan-400
tracking-[0.4em]
uppercase
font-semibold
">

Engineering Platform

</p>


<h1 className="
mt-6
text-6xl
md:text-7xl
font-black
text-white
">

Technology

</h1>


<p className="
mt-8
text-xl
text-gray-400
max-w-3xl
mx-auto
">

Explore the hardware technologies powering
CORETRION™, CORELINK™ and CHIPSETRON™ platforms.

</p>


</section>




<section className="
max-w-7xl
mx-auto
px-6
pb-28
">


<div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{
technologies.map((item)=>(


<div
key={item.title}
className="
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
hover:border-cyan-400/40
transition
"
>


<div className="
relative
h-56
">


<Image

src={item.image}

alt={item.title}

fill

className="
object-cover
"

/>


</div>



<div className="p-7">


<h2 className="
text-2xl
font-bold
text-white
">

{item.title}

</h2>


<p className="
mt-4
text-gray-400
leading-7
">

{item.description}

</p>


<Link

href={item.href}

className="
mt-6
inline-flex
items-center
gap-3
text-cyan-400
font-semibold
"

>

Explore

<ArrowRight size={18}/>

</Link>


</div>


</div>


))

}


</div>


</section>


<Footer/>


</main>

)

}