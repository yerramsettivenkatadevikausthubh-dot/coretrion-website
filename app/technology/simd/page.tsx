"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCBBackground from "@/components/PCBBackground";


export default function SIMD(){


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

Technology / Parallel Computing

</p>





<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

SIMD Engine

</h1>





<p
className="
mt-8
text-xl
text-gray-400
max-w-3xl
"
>

Parallel vector processing engine for high performance
data workloads and AI acceleration.

CORETRION SIMD architecture enables multiple data
operations to execute simultaneously for accelerated
computing performance.

</p>







<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>


{


[

{
title:"Vector Processing",
desc:
"Processes multiple data elements in parallel using optimized SIMD execution units."
},


{
title:"AI Acceleration",
desc:
"Accelerates machine learning workloads through parallel mathematical operations."
},


{
title:"High Throughput Compute",
desc:
"Improves performance for multimedia, scientific and AI applications."
}


].map(item=>(


<div

key={item.title}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-cyan-400
transition
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







<div
className="
mt-20
grid
md:grid-cols-2
gap-8
"
>



<div

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
text-3xl
font-bold
"
>

SIMD Execution Pipeline

</h2>


<p
className="
mt-4
text-gray-400
"
>

Dedicated vector execution paths integrated into
CORETRION pipeline for parallel instruction processing.

</p>


</div>







<div

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
text-3xl
font-bold
"
>

CPU + SIMD Integration

</h2>


<p
className="
mt-4
text-gray-400
"
>

CORETRION dynamically routes workloads between
scalar CPU execution and SIMD acceleration engines.

</p>


</div>





</div>







</div>


</section>





<Footer />


</main>


)

}