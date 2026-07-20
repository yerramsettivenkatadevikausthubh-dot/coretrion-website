"use client";

import { motion } from "framer-motion";


const stats = [

{
value:"32-bit",
label:"Processor Architecture"
},

{
value:"4+",
label:"Compute Engines"
},

{
value:"2027",
label:"ASIC Silicon Target"
},

{
value:"100%",
label:"Custom IP Development"
}

];



export default function StatsPanel(){


return(

<section
className="
mt-24
grid
md:grid-cols-4
gap-6
"
>


{

stats.map((item,index)=>(


<motion.div

key={item.label}

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*0.15
}}

whileHover={{
y:-8
}}

className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
text-center
"

>


<h3
className="
text-4xl
font-black
text-cyan-400
"
>

{item.value}

</h3>


<p
className="
mt-4
text-gray-400
"
>

{item.label}

</p>


</motion.div>


))


}


</section>

)

}