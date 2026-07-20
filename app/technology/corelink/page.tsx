import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Network,
  Zap,
  Layers,
  GitBranch,
} from "lucide-react";


const features = [
  {
    title: "Custom Packet Fabric",
    description:
      "CORELINK™ uses a proprietary packet-based communication architecture optimized for heterogeneous compute systems.",
    icon: Network,
  },

  {
    title: "Low Latency Communication",
    description:
      "High-speed interconnect design enables efficient data transfer between CPU, SIMD, Tensor and GPU engines.",
    icon: Zap,
  },

  {
    title: "Scalable Architecture",
    description:
      "Designed for multi-core processors, accelerators and future semiconductor platforms.",
    icon: Layers,
  },

  {
    title: "Intelligent Routing",
    description:
      "Adaptive traffic management improves bandwidth utilization and compute efficiency.",
    icon: GitBranch,
  },
];


export default function CorelinkTechnologyPage(){

return(

<main className="bg-black min-h-screen overflow-hidden">

<Navbar />


{/* HERO */}

<section className="
relative
pt-40
pb-24
">


<div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[700px]
h-[700px]
rounded-full
bg-purple-500/10
blur-[180px]
"/>



<div className="
relative
z-10
max-w-7xl
mx-auto
px-6
grid
lg:grid-cols-2
gap-16
items-center
">


<div>

<p className="
text-purple-400
tracking-[0.4em]
uppercase
font-semibold
">

Technology Module

</p>


<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
text-white
">

CORELINK™

</h1>


<p className="
mt-8
text-xl
text-gray-400
leading-relaxed
max-w-3xl
">

Custom compute interconnect fabric connecting
CORETRION™ processing engines, accelerators,
memory systems and intelligent workloads.

</p>


<div className="
mt-10
flex
flex-wrap
gap-4
">


<span className="
px-5
py-3
rounded-full
bg-purple-500/10
border
border-purple-400/30
text-purple-400
">

Packet Fabric

</span>


<span className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
">

High Bandwidth

</span>


<span className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
">

Multi Core

</span>


</div>


</div>



<div className="
flex
justify-center
relative
">


<div className="
absolute
w-[450px]
h-[450px]
rounded-full
bg-purple-500/20
blur-[120px]
"/>


<div className="
relative
w-[380px]
h-[380px]
rounded-3xl
border
border-purple-400/30
shadow-[0_0_120px_rgba(168,85,247,0.4)]
">

<Image
src="/images/corelink-fabric.png"
alt="CORELINK Fabric"
fill
className="object-contain p-8"
/>


</div>


</div>


</div>


</section>



{/* FEATURES */}


<section className="
py-24
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-5xl
font-black
text-white
">

Fabric Capabilities

</h2>


<div className="
grid
md:grid-cols-2
gap-8
mt-14
">


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
size={34}
className="text-purple-400"
/>


<h3 className="
mt-6
text-2xl
font-bold
text-white
">

{item.title}

</h3>


<p className="
mt-4
text-gray-400
leading-7
">

{item.description}

</p>


</div>

)

})

}


</div>


</section>



{/* FLOW */}


<section className="
py-20
border-t
border-white/10
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-black
text-white
">

Communication Flow

</h2>


<div className="
grid
md:grid-cols-4
gap-6
mt-10
">


{
[
"CORETRION CPU",
"CORELINK Fabric",
"AI Accelerators",
"Memory System"
].map(item=>(

<div
key={item}
className="
rounded-2xl
border
border-purple-400/20
bg-white/5
p-6
text-center
text-purple-300
font-bold
"
>

{item}

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