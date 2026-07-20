"use client";


import { motion } from "framer-motion";


export default function LiveStats(){


return(

<div
className="
flex
justify-center
mt-12
"
>


<motion.div

animate={{

boxShadow:[

"0 0 10px rgba(34,211,238,.2)",

"0 0 40px rgba(34,211,238,.8)",

"0 0 10px rgba(34,211,238,.2)"

]

}}

transition={{

duration:3,

repeat:Infinity

}}

className="
px-8
py-4
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
"

>


<span
className="
text-cyan-400
font-bold
"
>

● CORETRION™ Silicon Development Active

</span>


</motion.div>


</div>

)

}