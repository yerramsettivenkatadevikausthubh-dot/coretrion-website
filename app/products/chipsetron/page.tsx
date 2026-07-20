import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Cpu, ShieldCheck, Settings, Network } from "lucide-react";


const features = [
  {
    title: "Peripheral Control",
    description:
      "Advanced hardware control architecture managing external devices, interfaces and embedded peripherals.",
    icon: Cpu,
  },
  {
    title: "System Management",
    description:
      "Dedicated control logic for power management, monitoring, boot sequencing and system coordination.",
    icon: Settings,
  },
  {
    title: "Secure Integration",
    description:
      "Hardware-assisted security mechanisms enabling reliable embedded computing platforms.",
    icon: ShieldCheck,
  },
  {
    title: "CORETRION Connectivity",
    description:
      "Optimized communication layer connecting CHIPSETRON™ with CORETRION™ compute systems.",
    icon: Network,
  },
];


export default function ChipsetronPage() {


return (

<main className="bg-black min-h-screen overflow-hidden">


<Navbar />



{/* HERO */}


<section
className="
relative
pt-40
pb-24
"
>


<div
className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[700px]
h-[700px]
rounded-full
bg-green-500/10
blur-[180px]
"
/>



<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
grid
lg:grid-cols-2
gap-16
items-center
"
>


<div>


<p
className="
text-green-400
tracking-[0.4em]
uppercase
font-semibold
"
>
System Controller Platform
</p>



<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
text-white
"
>
CHIPSETRON™
</h1>



<p
className="
mt-8
text-xl
text-gray-400
leading-relaxed
max-w-2xl
"
>
A heterogeneous controller architecture designed
for intelligent embedded systems, industrial automation,
and CORETRION™ based computing platforms.
</p>



<div
className="
mt-10
flex
gap-5
flex-wrap
"
>

<span
className="
px-5
py-3
rounded-full
bg-green-500/10
border
border-green-400/30
text-green-400
"
>
Embedded Controller
</span>


<span
className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
"
>
IoT Ready
</span>


<span
className="
px-5
py-3
rounded-full
bg-white/5
border
border-white/10
text-white
"
>
AI Edge Systems
</span>


</div>


</div>





{/* CHIP IMAGE */}


<div
className="
relative
flex
justify-center
"
>


<div
className="
absolute
w-[420px]
h-[420px]
rounded-full
bg-green-400/20
blur-[120px]
"
/>


<div
className="
relative
w-[380px]
h-[380px]
rounded-3xl
border
border-green-400/30
shadow-[0_0_100px_rgba(34,197,94,0.3)]
"
>


<Image

src="/images/chipsetron-controller.png"

alt="CHIPSETRON Controller"

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






{/* FEATURES */}


<section
className="
py-24
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
md:text-5xl
font-black
text-white
"
>
Controller Architecture
</h2>


<p
className="
mt-5
text-gray-400
text-lg
"
>
Core technologies powering the CHIPSETRON™ ecosystem.
</p>



<div
className="
grid
md:grid-cols-2
gap-8
mt-14
"
>


{
features.map((item)=>{


const Icon=item.icon;


return(

<div
key={item.title}
className="
p-8
rounded-3xl
border
border-white/10
bg-white/5
hover:border-green-400/50
transition
"
>


<Icon
className="
text-green-400
"
size={32}
/>


<h3
className="
mt-6
text-2xl
font-bold
text-white
"
>
{item.title}
</h3>


<p
className="
mt-4
text-gray-400
leading-7
"
>
{item.description}
</p>


</div>


)

})

}


</div>


</section>






{/* APPLICATIONS */}


<section
className="
py-20
border-t
border-white/10
"
>


<div
className="
max-w-7xl
mx-auto
px-6
"
>


<h2
className="
text-4xl
font-black
text-white
"
>
Applications
</h2>


<div
className="
grid
md:grid-cols-4
gap-6
mt-10
"
>


{
[
"Industrial Automation",
"Robotics",
"Smart IoT Devices",
"Embedded AI Systems"
].map(item=>(

<div
key={item}
className="
p-6
rounded-2xl
bg-white/5
border
border-white/10
text-gray-300
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