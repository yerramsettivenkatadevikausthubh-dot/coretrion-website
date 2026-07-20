"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  FileText,
  Activity,
  Cpu,
  BarChart3,
  UploadCloud,
} from "lucide-react";


const verificationAreas = [

{
title:"Simulation Environment",
description:
"RTL simulation environment validating processor pipeline execution, instruction behaviour and waveform correctness.",
icon: Activity
},

{
title:"Functional Verification",
description:
"Verification of CPU instructions, memory operations, control logic and accelerator execution paths.",
icon: Cpu
},

{
title:"AI Accelerator Verification",
description:
"Dedicated validation of Tensor, SIMD and ML engines using AI workloads and compute benchmarks.",
icon: BarChart3
},

{
title:"Performance Analysis",
description:
"Cycle-level analysis, latency measurement, throughput evaluation and hardware profiling.",
icon: Activity
},

{
title:"FPGA Prototype Validation",
description:
"Hardware validation after FPGA implementation before ASIC physical design.",
icon: Cpu
},

{
title:"ASIC Verification",
description:
"Post synthesis verification, timing analysis, DRC/LVS validation and silicon readiness checks.",
icon: FileText
}

];



const tools=[

"Vivado Simulator",
"Verilator",
"GTKWave",
"Yosys",
"OpenROAD",
"ASIC Design Flow"

];



const evidence=[

"Simulation Logs",
"Waveform Captures",
"Coverage Reports",
"FPGA Validation Results"

];



export default function VerificationPage(){


return(

<main className="bg-black min-h-screen text-white overflow-hidden">


<Navbar />



<section className="relative pt-40 pb-28">


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



<div className="relative z-10 max-w-7xl mx-auto px-6">


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="text-center"

>


<p className="
text-green-400
tracking-[0.5em]
uppercase
font-bold
">

CORETRION™ VERIFICATION

</p>



<h1 className="
mt-6
text-5xl
md:text-7xl
font-black
">

Verification Framework

</h1>



<p className="
mt-8
max-w-3xl
mx-auto
text-xl
text-gray-400
leading-relaxed
">

A complete verification ecosystem validating
processor execution, AI acceleration,
system integration and ASIC readiness.

</p>


</motion.div>







{/* PIPELINE */}


<section className="mt-24">


<h2 className="
text-4xl
font-black
">

Verification Pipeline

</h2>



<div className="
grid
md:grid-cols-3
gap-8
mt-12
">


{

verificationAreas.map((item,index)=>{


const Icon=item.icon;


return(

<motion.div

key={item.title}

whileHover={{
y:-10
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
"

>


<Icon
size={34}
className="text-green-400"
/>



<div className="
mt-5
text-green-400
font-black
">

0{index+1}

</div>



<h3 className="
mt-4
text-2xl
font-bold
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


</motion.div>


)

})


}



</div>


</section>









{/* REAL TEST EVIDENCE */}



<section className="
mt-28
rounded-3xl
border
border-green-400/20
bg-green-400/5
p-10
">


<h2 className="
text-4xl
font-black
">

Verification Evidence

</h2>



<p className="
mt-5
text-gray-400
max-w-3xl
">

Real CORETRION™ verification results will be published here:
simulation outputs, waveform analysis, coverage reports,
FPGA results and hardware validation data.

</p>




<div className="
grid
md:grid-cols-4
gap-6
mt-10
">


{

evidence.map(item=>(


<div
key={item}
className="
rounded-2xl
border
border-white/10
bg-black
p-8
text-center
"
>


<UploadCloud
className="
mx-auto
text-green-400
"
/>



<p className="
mt-4
text-gray-300
">

{item}

</p>


<span className="
text-sm
text-gray-500
">

Pending Validation

</span>


</div>


))


}



</div>


</section>








{/* TOOLS */}



<section className="mt-24">


<h2 className="
text-4xl
font-black
">

Verification Tools

</h2>



<div className="
flex
flex-wrap
gap-5
mt-10
">


{

tools.map(tool=>(


<div

key={tool}

className="
px-6
py-3
rounded-full
border
border-green-400/30
bg-green-400/10
text-green-400
"

>

{tool}

</div>


))


}


</div>


</section>




</div>


</section>



<Footer/>


</main>


)

}