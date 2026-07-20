"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Cpu, ArrowLeft } from "lucide-react";


export default function NotFound(){


return(

<main
className="
min-h-screen
bg-black
flex
items-center
justify-center
relative
overflow-hidden
"
>


{/* Background Glow */}

<div
className="
absolute
w-[600px]
h-[600px]
bg-cyan-500/20
blur-[150px]
rounded-full
"
/>



<div
className="
relative
z-10
text-center
px-6
"
>


<motion.div

animate={{
rotateY:[0,360]
}}

transition={{
duration:8,
repeat:Infinity,
ease:"linear"
}}

className="
mx-auto
w-32
h-32
rounded-3xl
border
border-cyan-400/30
bg-white/5
backdrop-blur-xl
flex
items-center
justify-center
shadow-[0_0_80px_rgba(0,255,255,0.3)]
"

>

<Cpu
size={60}
className="text-cyan-400"
/>


</motion.div>





<h1
className="
mt-10
text-8xl
font-black
text-white
"
>

404

</h1>



<h2
className="
mt-5
text-3xl
font-bold
text-white
"
>

Page Not Found

</h2>



<p
className="
mt-5
text-gray-400
max-w-xl
mx-auto
text-lg
"
>

The requested semiconductor module or architecture page
does not exist in the CORETRION platform.

</p>





<Link

href="/"

className="
inline-flex
items-center
gap-3
mt-10
px-8
py-4
rounded-full
bg-white
text-black
font-bold
hover:bg-cyan-400
transition
"

>

<ArrowLeft size={18}/>

Return Home


</Link>




</div>


</main>

)

}