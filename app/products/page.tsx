import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Cpu, Network, Settings } from "lucide-react";


const products = [

{
title:"CORETRION™",
category:"PROCESSOR ARCHITECTURE",
description:
"Proprietary 32-bit hybrid compute processor integrating scalar execution, SIMD acceleration, tensor computing and GPU processing.",
icon:Cpu,
href:"/products/coretrion",
color:"cyan"
},


{
title:"CORELINK™",
category:"INTERCONNECT FABRIC",
description:
"Custom high-performance communication fabric connecting compute engines, accelerators and memory systems.",
icon:Network,
href:"/products/corelink",
color:"purple"
},


{
title:"CHIPSETRON™",
category:"SYSTEM CONTROLLER",
description:
"Embedded controller architecture enabling intelligent system management and CORETRION based platforms.",
icon:Settings,
href:"/products/chipsetron",
color:"green"
}

];



export default function ProductsPage(){


return(

<main className="
bg-black
min-h-screen
text-white
overflow-hidden
">


<Navbar />



<section className="
relative
pt-40
pb-28
">


<div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[700px]
h-[700px]
rounded-full
bg-cyan-400/10
blur-[180px]
"
/>



<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
">



<div className="text-center">


<p className="
text-cyan-400
tracking-[0.5em]
uppercase
font-semibold
">

CORETRION™ ECOSYSTEM

</p>



<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
">

Semiconductor Product Platform

</h1>



<p className="
mt-8
max-w-3xl
mx-auto
text-xl
text-gray-400
leading-relaxed
">

A complete hardware ecosystem combining
advanced processing, intelligent interconnect
and embedded control technologies.

</p>


</div>







<div className="
grid
md:grid-cols-3
gap-8
mt-20
">


{
products.map(product=>{


const Icon=product.icon;


return(

<Link

href={product.href}

key={product.title}

className="
group
rounded-3xl
border
border-white/10
bg-white/5
p-10
hover:bg-white/10
transition
"


>


<Icon

size={42}

className="
text-cyan-400
group-hover:scale-110
transition
"

/>



<p className="
mt-8
text-sm
tracking-widest
text-gray-500
">

{product.category}

</p>



<h2 className="
mt-3
text-3xl
font-black
">

{product.title}

</h2>



<p className="
mt-5
text-gray-400
leading-7
">

{product.description}

</p>



<div className="
mt-8
text-cyan-400
font-semibold
">

Explore →

</div>



</Link>


)

})


}



</div>



</div>


</section>



<Footer/>


</main>

)

}