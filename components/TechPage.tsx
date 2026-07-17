"use client";


import {motion} from "framer-motion";


interface Props{

title:string;
description:string;

}



export default function TechPage({
title,
description
}:Props){


return(

<section
className="
min-h-screen
bg-black
text-white
flex
items-center
justify-center
px-6
"
>


<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

className="
max-w-4xl
text-center
"

>


<p
className="
text-cyan-400
tracking-[0.4em]
uppercase
"
>

CORETRION TECHNOLOGY

</p>


<h1
className="
text-6xl
font-black
mt-6
"
>

{title}

</h1>


<p
className="
mt-8
text-xl
text-gray-400
leading-8
"
>

{description}

</p>


</motion.div>


</section>

)

}