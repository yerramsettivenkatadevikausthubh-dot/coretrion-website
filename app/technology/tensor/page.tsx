"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PCBBackground from "@/components/PCBBackground";


export default function Tensor(){


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
text-purple-400
uppercase
tracking-[0.4em]
"
>

Technology / AI Acceleration

</p>





<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

Tensor Accelerator

</h1>





<p
className="
mt-8
text-xl
text-gray-400
max-w-3xl
"
>

Dedicated matrix computation hardware for machine learning
and neural network inference.

CORETRION Tensor architecture provides specialized
acceleration for AI workloads, deep learning models
and intelligent computing applications.

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
title:"Matrix Compute Engine",
desc:
"Dedicated hardware units optimized for matrix multiplication and neural network operations."
},


{
title:"AI Inference Acceleration",
desc:
"High performance execution engine for machine learning inference workloads."
},


{
title:"Low Precision Computing",
desc:
"Optimized arithmetic support for efficient AI model execution."
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
mt-20
grid
md:grid-cols-2
gap-8
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

Neural Network Processing

</h2>



<p
className="
mt-4
text-gray-400
"
>

Tensor engine accelerates convolution,
matrix operations and AI inference pipelines
inside CORETRION.

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

CPU + SIMD + Tensor Fusion

</h2>



<p
className="
mt-4
text-gray-400
"
>

Hybrid execution allows CORETRION to combine
general purpose processing with dedicated AI acceleration.

</p>


</div>





</div>







</div>


</section>





<Footer />


</main>


)

}