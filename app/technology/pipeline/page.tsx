import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Cpu,
  GitBranch,
  Activity,
  Zap,
} from "lucide-react";


const features = [

{
title:"Multi Stage Execution",
description:
"Optimized instruction processing flow designed for efficient execution across CORETRION™ compute engines.",
icon:Cpu
},

{
title:"Instruction Flow Control",
description:
"Advanced control logic manages instruction routing, execution stages and pipeline synchronization.",
icon:GitBranch
},

{
title:"High Performance Processing",
description:
"Pipeline architecture improves throughput by enabling parallel instruction execution.",
icon:Activity
},

{
title:"Accelerator Integration",
description:
"Native integration with SIMD, Tensor and GPU execution units.",
icon:Zap
}

];



export default function PipelinePage(){


return(

<main className="bg-black min-h-screen overflow-hidden">


<Navbar/>




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
bg-cyan-500/10
blur-[180px]
"
/>



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
text-cyan-400
tracking-[0.4em]
uppercase
font-semibold
">

Processor Pipeline Architecture

</p>



<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
text-white
">

Pipeline

</h1>



<p className="
mt-8
text-xl
text-gray-400
leading-relaxed
">

CORETRION™ pipeline architecture enables efficient
instruction processing through optimized execution stages,
control flow management and accelerator integration.

</p>



<div className="
mt-10
flex
flex-wrap
gap-4
">


{
[
"Fetch",
"Decode",
"Execute",
"Memory",
"Writeback"
].map(stage=>(


<span
key={stage}
className="
px-5
py-3
rounded-full
bg-cyan-500/10
border
border-cyan-400/30
text-cyan-400
"
>

{stage}

</span>


))
}


</div>


</div>





<div className="
relative
flex
justify-center
">


<div className="
absolute
w-[450px]
h-[450px]
rounded-full
bg-cyan-400/20
blur-[130px]
"
/>


<div className="
relative
w-[420px]
h-[420px]
rounded-3xl
border
border-cyan-400/30
shadow-[0_0_120px_rgba(34,211,238,0.3)]
">


<Image

src="/images/coretrion-datapath.png"

alt="CORETRION Pipeline Architecture"

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
max-w-7xl
mx-auto
px-6
pb-24
">


<h2 className="
text-4xl
md:text-5xl
font-black
text-white
">

Pipeline Features

</h2>



<div className="
grid
md:grid-cols-2
gap-8
mt-12
">


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
hover:border-cyan-400/40
transition
"

>


<Icon
size={34}
className="text-cyan-400"
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






<section className="
border-t
border-white/10
py-20
">


<div className="
max-w-5xl
mx-auto
px-6
text-center
">


<h2 className="
text-4xl
font-black
text-white
">

CORETRION™ Execution Flow

</h2>


<p className="
mt-8
text-xl
text-gray-400
">

Fetch → Decode → Execute → Memory → Writeback

</p>


</div>


</section>




<Footer/>


</main>

)

}