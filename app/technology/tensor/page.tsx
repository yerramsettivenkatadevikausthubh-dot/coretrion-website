import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Brain,
  Cpu,
  Network,
  Zap,
} from "lucide-react";


const features = [

{
title:"AI Matrix Processing",
description:
"Dedicated tensor compute engine optimized for neural network operations, machine learning inference and AI workloads.",
icon:Brain
},

{
title:"Parallel Compute Engine",
description:
"High throughput architecture enabling parallel mathematical operations for intelligent applications.",
icon:Cpu
},

{
title:"Neural Data Flow",
description:
"Optimized data movement between memory systems and accelerator units for efficient AI processing.",
icon:Network
},

{
title:"Edge AI Acceleration",
description:
"Hardware acceleration designed for embedded intelligence and real-time AI applications.",
icon:Zap
}

];



export default function TensorPage(){


return(

<main className="bg-black min-h-screen overflow-hidden">


<Navbar />



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
text-purple-400
tracking-[0.4em]
uppercase
font-semibold
"
>

AI Acceleration Engine

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

Tensor Accelerator

</h1>



<p
className="
mt-8
text-xl
text-gray-400
leading-relaxed
"
>

A dedicated machine learning acceleration architecture
inside CORETRION™ designed for neural computation,
AI inference and intelligent edge processing.

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
"Matrix Compute",
"AI Inference",
"Machine Learning",
"Edge Intelligence"
].map(item=>(


<span
key={item}
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
bg-purple-500/20
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
border-purple-400/30
shadow-[0_0_120px_rgba(168,85,247,0.35)]
"
>


<Image

src="/images/tensor-engine.png"

alt="Tensor Accelerator"

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

Tensor Engine Capabilities

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
hover:border-purple-400/50
transition
"

>


<Icon

size={36}

className="text-purple-400"

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

CORETRION™ AI Compute Pipeline

</h2>



<p
className="
mt-8
text-xl
text-gray-400
"
>

Input Data → Tensor Engine → Neural Processing → AI Output

</p>


</div>


</section>



<Footer/>


</main>

)

}