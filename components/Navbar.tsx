"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";


export default function Navbar(){


const [mobile,setMobile] = useState(false);



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
name:"Documentation",
href:"/documentation"
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


</div>


</motion.div>


}


</AnimatePresence>



</nav>

)

}