import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Database,
  Layers,
  Zap,
  Network,
} from "lucide-react";


const features = [

{
title:"High Performance Memory",
description:
"Optimized memory subsystem designed for efficient data access and high throughput computing workloads.",
icon:Database,
},

{
title:"Memory Hierarchy",
description:
"Structured memory architecture enabling efficient communication between processing units and storage resources.",
icon:Layers,
},

{
title:"Fast Data Movement",
description:
"Advanced data transfer mechanisms supporting AI acceleration and heterogeneous compute workloads.",
icon:Zap,
},

{
title:"Compute Memory Integration",
description:
"Designed to efficiently connect CPU, SIMD, Tensor and GPU execution engines.",
icon:Network,
},

];



export default function MemoryTechnologyPage(){


return(

<main className="bg-black min-h-screen overflow-hidden">


<Navbar />



<section className="
relative
pt-40
pb-24
">


<div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[700px]
h-[700px]
rounded-full
bg-blue-500/10
blur-[180px]
"/>



<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
grid
lg:grid-cols-2
gap-16
items-center
">


<div>


<p className="
text-blue-400
tracking-[0.4em]
uppercase
font-semibold
">

Memory Technology

</p>



<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
text-white
">

MEMORY SUBSYSTEM

</h1>



<p className="
mt-8
text-xl
text-gray-400
leading-relaxed
max-w-3xl
">

High-performance memory architecture enabling
efficient communication between CORETRION™ compute
engines, accelerators and intelligent workloads.

</p>



<div className="
mt-10
flex
flex-wrap
gap-4
">


<span className="
px-5
py-3
rounded-full
bg-blue-500/10
border
border-blue-400/30
text-blue-400
">

Data Efficiency

</span>


<span className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
">

High Bandwidth

</span>


<span className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
">

AI Ready

</span>


</div>


</div>





<div className="
flex
justify-center
relative
">


<div className="
absolute
w-[450px]
h-[450px]
rounded-full
bg-blue-400/20
blur-[120px]
"/>



<div className="
relative
w-[400px]
h-[400px]
rounded-3xl
border
border-blue-400/30
shadow-[0_0_120px_rgba(59,130,246,0.35)]
">


<Image

src="/images/memory-system.png"

alt="Memory Subsystem"

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





<section className="
py-24
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-5xl
font-black
text-white
">

Memory Architecture

</h2>



<div className="
grid
md:grid-cols-4
gap-6
mt-14
">


{
[
"L1 Cache",
"L2 Cache",
"System Memory",
"Accelerator Memory"
].map(item=>(


<div
key={item}
className="
rounded-2xl
border
border-blue-400/20
bg-white/5
p-7
text-center
text-blue-300
font-bold
"
>

{item}

</div>


))
}


</div>


</section>





<section className="
pb-24
max-w-7xl
mx-auto
px-6
">


<div className="
grid
md:grid-cols-2
gap-8
">


{
features.map((item)=>{

const Icon=item.icon;


return(

<div
key={item.title}
className="
p-8
rounded-3xl
border
border-white/10
bg-white/5
hover:border-blue-400/50
transition
"
>


<Icon
size={34}
className="text-blue-400"
/>


<h3 className="
mt-6
text-2xl
font-bold
text-white
">

{item.title}

</h3>


<p className="
mt-4
text-gray-400
leading-7
">

{item.description}

</p>


</div>

)

})
}


</div>


</section>



<Footer/>


</main>

)

}