import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Cpu,
} from "lucide-react";


const features = [

{
title:"Hardware Security",
description:
"Dedicated security mechanisms integrated into the processor architecture for reliable computing platforms.",
icon:ShieldCheck,
},

{
title:"Secure Execution",
description:
"Protection mechanisms designed to maintain trusted execution environments and secure workloads.",
icon:Lock,
},

{
title:"Cryptographic Support",
description:
"Hardware accelerated security functions enabling protected communication and data processing.",
icon:KeyRound,
},

{
title:"Secure Compute Integration",
description:
"Security architecture integrated with CORETRION™ processing engines and system components.",
icon:Cpu,
},

];



export default function SecurityTechnologyPage(){


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
bg-red-500/10
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
text-red-400
tracking-[0.4em]
uppercase
font-semibold
">

Security Technology

</p>



<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
text-white
">

SECURITY ARCHITECTURE

</h1>



<p className="
mt-8
text-xl
text-gray-400
leading-relaxed
max-w-3xl
">

Hardware-level security framework designed
to protect CORETRION™ computing systems,
embedded platforms and intelligent workloads.

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
bg-red-500/10
border
border-red-400/30
text-red-400
">

Trusted Computing

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

Hardware Security

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

Secure AI Systems

</span>


</div>


</div>





{/* IMAGE */}


<div className="
relative
flex
justify-center
">


<div className="
absolute
w-[450px]
h-[450px]
rounded-full
bg-red-500/20
blur-[120px]
"/>



<div className="
relative
w-[400px]
h-[400px]
rounded-3xl
border
border-red-400/30
shadow-[0_0_120px_rgba(239,68,68,0.35)]
">


<Image

src="/images/security.png"

alt="Security Architecture"

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





{/* SECURITY LAYERS */}


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

Security Layers

</h2>



<div className="
grid
md:grid-cols-4
gap-6
mt-14
">


{
[
"Secure Boot",
"Encryption Engine",
"Access Control",
"Runtime Protection"
].map(item=>(


<div
key={item}
className="
rounded-2xl
border
border-red-400/20
bg-white/5
p-7
text-center
text-red-300
font-bold
"
>

{item}

</div>


))
}


</div>


</section>





{/* FEATURES */}


<section className="
pb-24
max-w-7xl
mx-auto
px-6
">


<div className="
grid
md:grid-cols-2
gap-8
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
hover:border-red-400/50
transition
"
>


<Icon
size={34}
className="text-red-400"
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





<Footer/>


</main>

)

}