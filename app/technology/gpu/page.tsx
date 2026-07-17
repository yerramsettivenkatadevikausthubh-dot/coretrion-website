"use client";


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCBBackground from "@/components/PCBBackground";



export default function GPU(){


return(

<main
className="
min-h-screen
bg-black
text-white
overflow-hidden
"
>


<Navbar/>


<section
className="
relative
pt-40
pb-32
"
>


<PCBBackground/>


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

Technology / Acceleration

</p>



<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

GPU Architecture

</h1>




<p
className="
mt-8
text-xl
text-gray-400
max-w-3xl
"
>

Integrated programmable graphics and parallel compute
subsystem inside CORETRION.

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
"Parallel Processing",
"Graphics Acceleration",
"AI Compute Workloads"

].map(item=>(


<div

key={item}

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

{item}

</h2>


<p
className="
mt-4
text-gray-400
"
>

Dedicated hardware acceleration engine integrated with CORETRION.

</p>


</div>


))

}


</div>



</div>


</section>



<Footer/>


</main>


)

}