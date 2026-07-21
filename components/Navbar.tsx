"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


export default function Navbar(){

const [mobile,setMobile] = useState(false);
const [documentation,setDocumentation] = useState(false);


const documentationMenu = [

{
name:"Product Overview",
href:"/documentation/overview"
},

{
name:"Architecture",
href:"/documentation/architecture"
},

{
name:"ISA Reference",
href:"/documentation/isa"
},

{
name:"RTL Documentation",
href:"/documentation/rtl"
},

{
name:"Verification",
href:"/documentation/verification"
},

{
name:"Publications",
href:"/documentation/publications"
}

];



const navItems = [

{
name:"Products",
href:"/products"
},

{
name:"Technology",
href:"/technology"
},

{
name:"Engineering",
href:"/engineering"
},

{
name:"Roadmap",
href:"/roadmap"
},

{
name:"Contact",
href:"/contact"
}

];



return(

<nav
className="
fixed
top-0
left-0
right-0
z-50
bg-black/80
backdrop-blur-xl
border-b
border-white/10
"
>


<div
className="
max-w-7xl
mx-auto
px-6
h-20
flex
items-center
justify-between
"
>


{/* LOGO */}

<Link

href="/"

className="
text-2xl
font-black
tracking-wider
text-white
"

>

CORETRION™

</Link>





{/* DESKTOP */}

<div
className="
hidden
lg:flex
items-center
gap-10
"
>


{
navItems.map(item=>(

<Link

key={item.href}

href={item.href}

className="
text-gray-300
hover:text-cyan-400
transition
font-medium
"

>

{item.name}

</Link>

))
}




{/* DOCUMENTATION DROPDOWN */}


<div

className="
relative
"

onMouseEnter={()=>setDocumentation(true)}

onMouseLeave={()=>setDocumentation(false)}

>


<button

className="
flex
items-center
gap-2
text-gray-300
hover:text-cyan-400
transition
font-medium
"

>

Documentation

<ChevronDown size={16}/>

</button>



<AnimatePresence>


{

documentation &&

<motion.div

initial={{
opacity:0,
y:-10
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-10
}}

className="
absolute
top-10
left-0
w-64
rounded-2xl
border
border-white/10
bg-black
shadow-xl
p-3
"

>


{

documentationMenu.map(item=>(


<Link

key={item.href}

href={item.href}

className="
block
px-4
py-3
rounded-xl
text-gray-300
hover:bg-cyan-400/10
hover:text-cyan-400
transition
"

>

{item.name}

</Link>


))

}


</motion.div>

}


</AnimatePresence>


</div>



</div>





{/* MOBILE BUTTON */}


<button

className="
lg:hidden
text-white
"

onClick={()=>setMobile(!mobile)}

>

{

mobile ?

<X size={28}/>

:

<Menu size={28}/>

}


</button>


</div>






{/* MOBILE MENU */}


<AnimatePresence>


{

mobile &&

<motion.div

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

exit={{
opacity:0,
height:0
}}

className="
lg:hidden
border-t
border-white/10
bg-black
px-6
py-6
"

>


<div
className="
flex
flex-col
gap-6
"
>


{

navItems.map(item=>(

<Link

key={item.href}

href={item.href}

onClick={()=>setMobile(false)}

className="
text-gray-300
hover:text-cyan-400
text-lg
"

>

{item.name}

</Link>

))

}



{/* MOBILE DOCUMENTATION */}


<div>


<p
className="
text-gray-300
text-lg
mb-3
"
>

Documentation

</p>


<div
className="
ml-4
flex
flex-col
gap-3
"
>

{

documentationMenu.map(item=>(

<Link

key={item.href}

href={item.href}

onClick={()=>setMobile(false)}

className="
text-gray-400
hover:text-cyan-400
"

>

{item.name}

</Link>

))

}


</div>


</div>



</div>


</motion.div>


}


</AnimatePresence>



</nav>

)

}