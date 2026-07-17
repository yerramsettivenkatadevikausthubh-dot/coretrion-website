"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCBBackground from "@/components/PCBBackground";


export default function Security(){


return(

<main
className="
min-h-screen
bg-black
text-white
overflow-hidden
"
>


<Navbar />



<section
className="
relative
pt-40
pb-32
"
>


<PCBBackground />



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
text-green-400
uppercase
tracking-[0.4em]
"
>

Technology / Security Architecture

</p>





<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

CORETRION Security Architecture

</h1>





<p
className="
mt-8
text-xl
text-gray-400
max-w-3xl
"
>

Hardware-assisted security architecture designed to protect
compute workloads, data movement and system execution
inside CORETRION based intelligent systems.

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

{
title:"Secure Boot",
desc:
"Hardware verified boot process ensuring trusted CORETRION system initialization."
},


{
title:"AES Encryption Engine",
desc:
"Integrated cryptographic acceleration for secure data processing and communication."
},


{
title:"Memory Protection",
desc:
"Controlled access mechanisms protecting instructions and application data."
}


].map(item=>(


<div

key={item.title}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-green-400
transition
"

>


<h2
className="
text-2xl
font-bold
"
>

{item.title}

</h2>



<p
className="
mt-4
text-gray-400
"
>

{item.desc}

</p>



</div>


))


}



</div>









<div
className="
grid
md:grid-cols-2
gap-8
mt-20
"
>



<div

className="
bg-black
border
border-white/10
rounded-3xl
p-8
"

>


<h2
className="
text-3xl
font-bold
"
>

Trusted Execution Environment

</h2>


<p
className="
mt-4
text-gray-400
"
>

Dedicated secure execution region for sensitive workloads,
AI models and protected system operations.

</p>


</div>







<div

className="
bg-black
border
border-white/10
rounded-3xl
p-8
"

>


<h2
className="
text-3xl
font-bold
"
>

Secure CORELINK Communication

</h2>


<p
className="
mt-4
text-gray-400
"
>

Encrypted communication channels between CPU,
SIMD, Tensor, GPU and external system components.

</p>


</div>





</div>







</div>


</section>





<Footer />


</main>


)

}