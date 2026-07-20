import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";


const products = [

{
title:"CORETRION™",
tag:"32-Bit Hybrid Compute Processor",
description:
"Proprietary processor architecture combining scalar computing, SIMD acceleration, tensor processing and GPU compute.",
href:"/products/coretrion"
},


{
title:"CORELINK™",
tag:"Compute Interconnect Fabric",
description:
"High performance communication fabric connecting processors, accelerators, memory and system components.",
href:"/products/corelink"
},


{
title:"CHIPSETRON™",
tag:"System Controller Platform",
description:
"Embedded controller architecture for intelligent systems and CORETRION based platforms.",
href:"/products/chipsetron"
}

];



export default function ProductsPage(){


return(

<main className="bg-black min-h-screen text-white">


<Navbar/>


<section className="pt-40 pb-24">


<div className="max-w-7xl mx-auto px-6">


<p className="
text-cyan-400
tracking-[0.4em]
uppercase
">

CORETRION™ PRODUCTS

</p>



<h1 className="
mt-6
text-6xl
font-black
">

Compute Systems Ecosystem

</h1>



<p className="
mt-8
text-xl
text-gray-400
max-w-3xl
">

A complete semiconductor ecosystem combining
processor intelligence, high speed interconnect
and embedded control architectures.

</p>




<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
products.map(product=>(


<Link

href={product.href}

key={product.title}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
hover:border-cyan-400/50
transition
"


>


<h2 className="
text-3xl
font-black
text-white
">

{product.title}

</h2>


<p className="
mt-4
text-cyan-400
font-semibold
">

{product.tag}

</p>


<p className="
mt-5
text-gray-400
leading-7
">

{product.description}

</p>


</Link>


))

}


</div>


</div>


</section>


<Footer/>


</main>

)

}