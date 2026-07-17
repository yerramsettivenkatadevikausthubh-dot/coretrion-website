import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function CoretrionPage(){

return (

<main className="bg-black min-h-screen">

<Navbar/>


<section className="
pt-40
pb-20
max-w-7xl
mx-auto
px-6
">


<p className="
text-cyan-400
tracking-widest
uppercase
">

Processor Architecture

</p>



<h1 className="
text-7xl
font-black
text-white
mt-5
">

CORETRION™

</h1>



<p className="
mt-8
text-xl
text-gray-400
max-w-3xl
">

A proprietary 32-bit hybrid compute architecture
combining scalar processing, SIMD acceleration,
tensor computing and GPU execution engines.

</p>



<div className="
grid
md:grid-cols-4
gap-6
mt-16
">


{
[
"CPU Core",
"SIMD Engine",
"Tensor Accelerator",
"GPU Compute"
].map(item=>(


<div
key={item}
className="
border
border-white/10
rounded-2xl
p-8
bg-white/5
"
>


<h3 className="
text-white
font-bold
text-xl
">

{item}

</h3>


<p className="
mt-3
text-gray-400
">

Integrated compute module

</p>


</div>


))

}


</div>



</section>


<Footer/>


</main>

)

}