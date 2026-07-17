"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function Corelink(){

return(

<main
className="
min-h-screen
bg-black
text-white
"
>


<Navbar />



<section
className="
pt-32
max-w-7xl
mx-auto
px-6
"
>


{/* TITLE */}


<h1
className="
text-6xl
md:text-7xl
font-black
"
>

CORELINK™ Fabric

</h1>



<p
className="
mt-6
text-xl
text-gray-400
max-w-3xl
"
>

Custom compute interconnect fabric connecting
CPU, SIMD, Tensor and GPU processing engines.

</p>





{/* IMAGE AREA */}


<div
className="
mt-16
relative
h-[450px]
rounded-3xl
overflow-hidden
border
border-purple-400/30
bg-white/5
shadow-[0_0_80px_rgba(168,85,247,0.25)]
"
>


<Image

src="/images/corelink-fabric.png"

alt="CORELINK Fabric Architecture"

fill

className="
object-contain
p-8
"

/>


</div>







{/* FEATURES */}


<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>



<div
className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-purple-400
transition
"
>

<h2
className="
text-2xl
font-bold
"
>

Unified Compute Fabric

</h2>


<p
className="
mt-4
text-gray-400
"
>

High bandwidth communication layer
between heterogeneous compute engines.

</p>


</div>






<div
className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-purple-400
transition
"
>

<h2
className="
text-2xl
font-bold
"
>

Low Latency Communication

</h2>


<p
className="
mt-4
text-gray-400
"
>

Designed for efficient data movement
between CPU, SIMD, Tensor and GPU blocks.

</p>


</div>







<div
className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-purple-400
transition
"
>

<h2
className="
text-2xl
font-bold
"
>

Scalable Architecture

</h2>


<p
className="
mt-4
text-gray-400
"
>

Future-ready interconnect architecture
for multi-core CORETRION systems.

</p>


</div>



</div>





{/* ARCHITECTURE DETAILS */}


<div
className="
mt-20
grid
md:grid-cols-2
gap-10
"
>


<div
className="
bg-white/5
rounded-3xl
border
border-white/10
p-8
"
>


<h2
className="
text-3xl
font-bold
"
>

CORELINK Architecture

</h2>


<ul
className="
mt-6
space-y-3
text-gray-400
"
>

<li>✓ CPU Communication Interface</li>

<li>✓ SIMD Data Exchange</li>

<li>✓ Tensor Accelerator Link</li>

<li>✓ GPU Processing Connection</li>

<li>✓ Custom Packet Based Fabric</li>

</ul>


</div>





<div
className="
bg-white/5
rounded-3xl
border
border-white/10
p-8
"
>


<h2
className="
text-3xl
font-bold
"
>

Future Expansion

</h2>


<p
className="
mt-6
text-gray-400
"
>

CORELINK™ enables scalable designs for
future multi-core processors,
accelerator clusters and intelligent computing platforms.

</p>


</div>



</div>





</section>




<Footer />


</main>


)

}