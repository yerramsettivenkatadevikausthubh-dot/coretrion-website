"use client";


import {motion} from "framer-motion";


interface PageHeroProps{

title:string;

subtitle:string;

description:string;

}



export default function PageHero({

title,
subtitle,
description

}:PageHeroProps){


return(

<section

className="
min-h-screen
bg-black
text-white
pt-40
relative
overflow-hidden
"

>


<div

className="
absolute
w-[600px]
h-[600px]
bg-cyan-400/20
blur-[150px]
rounded-full
top-20
left-1/2
-translate-x-1/2
"

>



</div>



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
duration:0.8
}}

className="
relative
z-10
max-w-6xl
mx-auto
px-6
"

>


<p

className="
text-cyan-400
uppercase
tracking-[0.4em]
"

>

{subtitle}

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
text-xl
text-gray-400
mt-8
max-w-3xl
"

>

{description}

</p>



</motion.div>


</section>

)


}