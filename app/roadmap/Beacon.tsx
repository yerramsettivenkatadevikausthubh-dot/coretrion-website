"use client";

import { motion } from "framer-motion";


export default function Beacon(){


return(

<motion.div

animate={{
scale:[1,1.3,1],
opacity:[0.5,1,0.5]
}}

transition={{
duration:2,
repeat:Infinity
}}

className="
w-4
h-4
rounded-full
bg-green-400
shadow-[0_0_30px_rgba(34,197,94,1)]
"

/>

)

}