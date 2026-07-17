"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCBBackground from "@/components/PCBBackground";


export default function Pipeline(){


return(

<main
className="
min-h-screen
bg-black
text-white
overflow-hidden
"
>


<Navbar />



<section
className="
relative
pt-40
pb-32
"
>


<PCBBackground />



<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
"
>



<p
className="
text-cyan-400
uppercase
tracking-[0.4em]
"
>

Technology / Processor Core

</p>




<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

CORETRION Pipeline Architecture

</h1>




<p
className="
mt-8
text-xl
text-gray-400
max-w-3xl
"
>

Fetch → Decode → Execute → Memory → Writeback

Five stage processor pipeline optimized for hybrid workloads
combining scalar computing, SIMD, Tensor and GPU acceleration.

</p>





{/* PIPELINE STAGES */}


<div
className="
grid
md:grid-cols-5
gap-6
mt-20
"
>



{


[

"FETCH",
"DECODE",
"EXECUTE",
"MEMORY",
"WRITEBACK"


].map((stage,index)=>(


<div

key={stage}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-6
text-center
hover:border-cyan-400
transition
"

>


<div
className="
text-cyan-400
text-4xl
font-black
"
>

0{index+1}

</div>



<h2
className="
text-xl
font-bold
mt-4
"
>

{stage}

</h2>



<p
className="
text-gray-400
mt-3
text-sm
"
>

Pipeline stage optimized for
high performance execution.

</p>



</div>


))


}



</div>







{/* ARCHITECTURE DETAILS */}



<div
className="
grid
md:grid-cols-3
gap-8
mt-20
"
>



{


[

{
title:"Superscalar Execution",
desc:"Multiple execution paths enabling efficient instruction processing."
},


{
title:"Hybrid Compute Routing",
desc:"Dynamic scheduling between CPU, SIMD, Tensor and GPU engines."
},


{
title:"Low Latency Control",
desc:"Optimized pipeline control and hazard management."
}


].map(item=>(


<div

key={item.title}

className="
bg-black
border
border-white/10
rounded-3xl
p-8
"

>


<h2
className="
text-2xl
font-bold
"
>

{item.title}

</h2>



<p
className="
mt-4
text-gray-400
"
>

{item.desc}

</p>


</div>


))


}



</div>





</div>


</section>




<Footer />


</main>


)

}