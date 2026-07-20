import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Cpu,
  MoveHorizontal,
  Zap,
  Activity,
} from "lucide-react";


const features = [

{
title:"Vector Processing Engine",
description:
"SIMD architecture enables multiple data operations to execute simultaneously for improved compute efficiency.",
icon:Cpu
},

{
title:"Parallel Data Execution",
description:
"Processes multiple data elements in a single instruction cycle for accelerated workloads.",
icon:MoveHorizontal
},

{
title:"High Performance Computing",
description:
"Optimized execution unit for multimedia, AI preprocessing and numerical computation.",
icon:Activity
},

{
title:"Accelerator Integration",
description:
"Connected with CORETRION™ pipeline and other compute engines through the internal architecture.",
icon:Zap
}

];



export default function SIMDPage(){


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
w-[700px]
h-[700px]
rounded-full
bg-blue-500/10
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
text-blue-400
tracking-[0.4em]
uppercase
font-semibold
"
>

Vector Compute Architecture

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

SIMD Engine

</h1>



<p
className="
mt-8
text-xl
text-gray-400
leading-relaxed
"
>

CORETRION™ SIMD engine provides parallel vector
processing capability enabling multiple arithmetic
operations to execute efficiently in parallel.

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
"Vector ALU",
"Parallel Execution",
"Data Acceleration",
"AI Support"
].map(item=>(


<span
key={item}
className="
px-5
py-3
rounded-full
bg-blue-500/10
border
border-blue-400/30
text-blue-400
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
bg-blue-400/20
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
border-blue-400/30
shadow-[0_0_120px_rgba(59,130,246,0.35)]
"
>


<Image

src="/images/simd.png"

alt="SIMD Architecture"

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

SIMD Capabilities

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
hover:border-blue-400/50
transition
"

>


<Icon

size={36}

className="text-blue-400"

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

SIMD Execution Flow

</h2>


<p
className="
mt-8
text-xl
text-gray-400
"
>

Instruction → Vector Decode → Parallel ALU Operations → Writeback

</p>


</div>


</section>




<Footer/>


</main>

)

}