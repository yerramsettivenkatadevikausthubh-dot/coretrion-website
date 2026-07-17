"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";


export default function Contact(){


return(

<main
className="
min-h-screen
bg-black
text-white
relative
overflow-hidden
"
>


<Navbar />



{/* BACKGROUND GLOW */}

<div
className="
absolute
top-40
left-1/2
-translate-x-1/2
w-[600px]
h-[600px]
bg-cyan-400/20
blur-[150px]
rounded-full
"
/>





<section
className="
relative
z-10
pt-40
pb-32
"
>


<div
className="
max-w-5xl
mx-auto
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

transition={{
duration:0.8
}}

>


<p
className="
text-cyan-400
uppercase
tracking-[0.4em]
text-sm
"
>

CORETRION™ ENGINEERING

</p>



<h1
className="
text-6xl
md:text-7xl
font-black
mt-6
"
>

Contact

</h1>



<p
className="
text-gray-400
text-xl
mt-6
max-w-2xl
"
>

Connect with the CORETRION™ engineering team for technology discussions, partnerships, semiconductor collaboration, and development inquiries.

</p>



</motion.div>







{/* CONTACT CARD */}



<motion.div

initial={{
opacity:0,
scale:0.95
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.8,
delay:0.2
}}

className="
mt-16
bg-white/5
border
border-white/10
rounded-3xl
p-10
backdrop-blur-xl
"

>



<form
className="
space-y-6
"
>


<input

placeholder="Name"

className="
w-full
bg-black/50
border
border-white/10
p-5
rounded-xl
text-white
outline-none
focus:border-cyan-400
transition
"

/>



<input

placeholder="Email"

type="email"

className="
w-full
bg-black/50
border
border-white/10
p-5
rounded-xl
text-white
outline-none
focus:border-cyan-400
transition
"

/>





<input

placeholder="Company / Organization"

className="
w-full
bg-black/50
border
border-white/10
p-5
rounded-xl
text-white
outline-none
focus:border-cyan-400
transition
"

/>






<textarea

placeholder="Message"

rows={6}

className="
w-full
bg-black/50
border
border-white/10
p-5
rounded-xl
text-white
outline-none
focus:border-cyan-400
transition
"

/>






<button

className="
px-10
py-4
rounded-full
bg-cyan-400
text-black
font-bold
hover:bg-white
transition
"

>

Send Message →

</button>




</form>



</motion.div>








{/* CONTACT INFO */}


<div
className="
grid
md:grid-cols-3
gap-6
mt-12
"
>


<div
className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
"
>

<h3
className="
text-cyan-400
font-bold
"
>
Engineering
</h3>

<p
className="
text-gray-400
mt-3
"
>
Processor architecture and ASIC development
</p>

</div>





<div
className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
"
>

<h3
className="
text-purple-400
font-bold
"
>
Partnerships
</h3>

<p
className="
text-gray-400
mt-3
"
>
Industry collaboration and ecosystem development
</p>

</div>





<div
className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
"
>

<h3
className="
text-green-400
font-bold
"
>
Support
</h3>

<p
className="
text-gray-400
mt-3
"
>
Technical and developer communication
</p>

</div>



</div>





</div>


</section>



<Footer />


</main>


)

}