"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";


export default function Navbar(){


const [mobile,setMobile]=useState(false);


const [products,setProducts]=useState(false);
const [technology,setTechnology]=useState(false);
const [engineering,setEngineering]=useState(false);
const [documentation,setDocumentation]=useState(false);



const [mobileProducts,setMobileProducts]=useState(false);
const [mobileTechnology,setMobileTechnology]=useState(false);
const [mobileEngineering,setMobileEngineering]=useState(false);
const [mobileDocumentation,setMobileDocumentation]=useState(false);



return(


<nav

className="
fixed
top-0
z-50
w-full
bg-black/70
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
py-5
flex
justify-between
items-center
"

>


{/* LOGO */}


<a

href="/"

className="
text-white
text-2xl
font-black
tracking-widest
"

>

CORETRION™

</a>







{/* DESKTOP MENU */}


<div

className="
hidden
md:flex
items-center
gap-8
text-gray-300
"

>






{/* PRODUCTS */}



<div

className="relative"

onMouseEnter={()=>setProducts(true)}

onMouseLeave={()=>setProducts(false)}

>


<div

className="
flex
items-center
gap-2
cursor-pointer
hover:text-white
transition
"

>

Products

<ChevronDown size={16}/>

</div>



{


products &&


<motion.div


initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}


className="
absolute
top-10
left-0
w-72
bg-black
rounded-xl
border
border-white/10
p-5
shadow-xl
"

>



<a

href="/products/coretrion"

className="
block
py-3
hover:text-cyan-400
transition
"

>

CORETRION™

<p className="
text-sm
text-gray-500
">

Processor Platform

</p>


</a>





<a

href="/products/corelink"

className="
block
py-3
hover:text-purple-400
transition
"

>

CORELINK™

<p className="
text-sm
text-gray-500
">

Interconnect Fabric

</p>


</a>





<a

href="/products/chipsetron"

className="
block
py-3
hover:text-green-400
transition
"

>

CHIPSETRON™

<p className="
text-sm
text-gray-500
">

System Controller

</p>


</a>




</motion.div>


}



</div>









{/* TECHNOLOGY */}



<div

className="relative"

onMouseEnter={()=>setTechnology(true)}

onMouseLeave={()=>setTechnology(false)}

>


<div

className="
flex
items-center
gap-2
cursor-pointer
hover:text-white
transition
"

>

Technology

<ChevronDown size={16}/>

</div>





{


technology &&


<motion.div


initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}



className="
absolute
top-10
left-0
w-80
bg-black
rounded-xl
border
border-white/10
p-5
shadow-xl
"

>



<a
href="/technology"
className="
block
py-2
hover:text-cyan-400
"
>

CORETRION Architecture

</a>



<a
href="/technology/pipeline"
className="
block
py-2
hover:text-cyan-400
"
>

Processor Pipeline

</a>




<a
href="/technology/simd"
className="
block
py-2
hover:text-cyan-400
"
>

SIMD Engine

</a>



<a
href="/technology/tensor"
className="
block
py-2
hover:text-cyan-400
"
>

Tensor Accelerator

</a>




<a
href="/technology/gpu"
className="
block
py-2
hover:text-cyan-400
"
>

GPU Architecture

</a>




<a
href="/technology/memory"
className="
block
py-2
hover:text-cyan-400
"
>

Memory System

</a>




<a
href="/technology/security"
className="
block
py-2
hover:text-cyan-400
"
>

Security Architecture

</a>




<a
href="/technology/corelink"
className="
block
py-2
hover:text-purple-400
"
>

CORELINK Fabric

</a>



</motion.div>


}


</div>

{/* ENGINEERING */}


<div

className="relative"

onMouseEnter={()=>setEngineering(true)}

onMouseLeave={()=>setEngineering(false)}

>


<div

className="
flex
items-center
gap-2
cursor-pointer
hover:text-white
transition
"

>

Engineering

<ChevronDown size={16}/>

</div>



{


engineering &&


<motion.div

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}

className="
absolute
top-10
left-0
w-72
bg-black
rounded-xl
border
border-white/10
p-5
shadow-xl
"

>


<a
href="/engineering/rtl"
className="
block
py-3
hover:text-cyan-400
"
>

RTL Development

</a>



<a
href="/engineering/fpga"
className="
block
py-3
hover:text-cyan-400
"
>

FPGA Implementation

</a>



<a
href="/engineering/verification"
className="
block
py-3
hover:text-cyan-400
"
>

Verification

</a>



<a
href="/engineering/simulation"
className="
block
py-3
hover:text-cyan-400
"
>

Simulation Results

</a>



<a
href="/engineering/asic"
className="
block
py-3
hover:text-cyan-400
"
>

ASIC Flow

</a>


</motion.div>


}


</div>









{/* DOCUMENTATION */}



<div

className="relative"

onMouseEnter={()=>setDocumentation(true)}

onMouseLeave={()=>setDocumentation(false)}

>


<div

className="
flex
items-center
gap-2
cursor-pointer
hover:text-white
transition
"

>

Documentation

<ChevronDown size={16}/>

</div>




{


documentation &&


<motion.div

initial={{
opacity:0,
y:10
}}

animate={{
opacity:1,
y:0
}}


className="
absolute
top-10
left-0
w-80
bg-black
rounded-xl
border
border-white/10
p-5
shadow-xl
"

>



<a
href="/documentation"
className="
block
py-3
hover:text-cyan-400
"
>

Documentation Home

</a>




<a
href="/documentation/isa"
className="
block
py-3
hover:text-cyan-400
"
>

Processor ISA

</a>




<a
href="/documentation/architecture"
className="
block
py-3
hover:text-cyan-400
"
>

Architecture Reference

</a>




<a
href="/documentation/rtl"
className="
block
py-3
hover:text-cyan-400
"
>

RTL Documentation

</a>




<a
href="/documentation/verification"
className="
block
py-3
hover:text-cyan-400
"
>

Verification Reports

</a>




<a
href="/documentation/programming"
className="
block
py-3
hover:text-cyan-400
"
>

Programming Guide

</a>




<a
href="/documentation/resources"
className="
block
py-3
hover:text-cyan-400
"
>

Developer Resources

</a>




</motion.div>


}


</div>








<a
href="/roadmap"
className="
hover:text-white
transition
"
>

Roadmap

</a>




<a
href="/contact"
className="
hover:text-white
transition
"
>

Contact

</a>






</div>









{/* MOBILE BUTTON */}


<button

className="
md:hidden
text-white
"

onClick={()=>setMobile(!mobile)}

>


{

mobile ?

<X/>

:

<Menu/>

}


</button>


</div>









{/* MOBILE MENU */}



{


mobile &&



<div

className="
md:hidden
bg-black
border-t
border-white/10
p-8
text-white
space-y-6
"

>





{/* PRODUCTS MOBILE */}


<div>


<button

onClick={()=>setMobileProducts(!mobileProducts)}

className="
flex
items-center
gap-2
"

>

Products

<ChevronDown size={16}/>

</button>



{


mobileProducts &&


<div

className="
ml-5
mt-4
space-y-3
text-gray-400
"

>


<a href="/products/coretrion">
CORETRION™
</a>


<a href="/products/corelink">
CORELINK™
</a>


<a href="/products/chipsetron">
CHIPSETRON™
</a>


</div>


}



</div>








{/* TECHNOLOGY MOBILE */}


<div>


<button

onClick={()=>setMobileTechnology(!mobileTechnology)}

className="
flex
items-center
gap-2
"

>

Technology

<ChevronDown size={16}/>

</button>



{


mobileTechnology &&


<div

className="
ml-5
mt-4
space-y-3
text-gray-400
"

>


<a href="/technology">
CORETRION Architecture
</a>


<a href="/technology/pipeline">
Processor Pipeline
</a>


<a href="/technology/simd">
SIMD Engine
</a>


<a href="/technology/tensor">
Tensor Accelerator
</a>


<a href="/technology/gpu">
GPU Architecture
</a>


<a href="/technology/memory">
Memory System
</a>


<a href="/technology/security">
Security Architecture
</a>


</div>


}



</div>








{/* ENGINEERING MOBILE */}



<div>


<button

onClick={()=>setMobileEngineering(!mobileEngineering)}

className="
flex
items-center
gap-2
"

>

Engineering

<ChevronDown size={16}/>

</button>



{


mobileEngineering &&


<div

className="
ml-5
mt-4
space-y-3
text-gray-400
"

>


<a href="/engineering/rtl">
RTL Development
</a>


<a href="/engineering/fpga">
FPGA Implementation
</a>


<a href="/engineering/verification">
Verification
</a>


<a href="/engineering/simulation">
Simulation
</a>


<a href="/engineering/asic">
ASIC Flow
</a>


</div>


}


</div>









{/* DOCUMENTATION MOBILE */}


<div>


<button

onClick={()=>setMobileDocumentation(!mobileDocumentation)}

className="
flex
items-center
gap-2
"

>

Documentation

<ChevronDown size={16}/>

</button>




{


mobileDocumentation &&


<div

className="
ml-5
mt-4
space-y-3
text-gray-400
"

>


<a href="/documentation">
Documentation Home
</a>


<a href="/documentation/isa">
Processor ISA
</a>


<a href="/documentation/architecture">
Architecture Reference
</a>


<a href="/documentation/rtl">
RTL Documentation
</a>


<a href="/documentation/verification">
Verification Reports
</a>


<a href="/documentation/programming">
Programming Guide
</a>


<a href="/documentation/resources">
Developer Resources
</a>


</div>


}


</div>








<a href="/roadmap">
Roadmap
</a>


<a href="/contact">
Contact
</a>





</div>


}



</nav>


)

}