"use client";

import {motion} from "framer-motion";


export default function PCBBackground(){


return(

<div className="
absolute
inset-0
overflow-hidden
">


<motion.div

animate={{
rotate:360
}}

transition={{
duration:80,
repeat:Infinity,
ease:"linear"
}}

className="
absolute
top-[-200px]
left-[-200px]
w-[800px]
h-[800px]
rounded-full
border
border-cyan-400/10
"

/>



<div className="
absolute
inset-0
bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)]
bg-[size:60px_60px]
">


</div>



</div>

)

}