"use client";


import Navbar from "@/components/Navbar";
import BlockCard from "@/components/architecture/BlockCard";
import DetailPanel from "@/components/architecture/DetailPanel";
import architectureData from "@/components/architecture/architectureData";

import {useState} from "react";



export default function ArchitecturePage(){


const [selected,setSelected]=useState(
architectureData[0]
);



return(


<main
className="
min-h-screen
bg-black
text-white
pt-28
"
>


<Navbar/>




<section
className="
max-w-7xl
mx-auto
px-6
"
>



<h1
className="
text-5xl
md:text-7xl
font-black
"
>

CORETRION™ Architecture

</h1>



<p
className="
text-gray-400
mt-6
max-w-3xl
text-xl
"
>

A proprietary 32-bit hybrid compute architecture integrating
scalar processing, SIMD acceleration, tensor computing,
GPU execution and intelligent system control.

</p>






<div
className="
grid
md:grid-cols-3
gap-8
mt-16
"
>



{/* BLOCKS */}


<div
className="
space-y-5
"
>


{
architectureData.map((block)=>(


<BlockCard

key={block.title}

data={block}

active={
selected.title===block.title
}

onClick={()=>
setSelected(block)
}

/>


))

}



</div>





{/* DETAIL PANEL */}


<div
className="
md:col-span-2
"
>


<DetailPanel
data={selected}
/>



</div>




</div>





</section>



</main>


)

}