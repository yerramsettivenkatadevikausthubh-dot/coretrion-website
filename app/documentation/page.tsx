"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";


export default function Navbar(){


const [mobile,setMobile]=useState(false);

const [products,setProducts]=useState(false);

const [technology,setTechnology]=useState(false);

const [documentation,setDocumentation]=useState(false);

const [engineering,setEngineering]=useState(false);



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
"
>

Products

<ChevronDown size={16}/>

</div>



{

products &&

<div

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
"

>


<a
href="/products/coretrion"
className="
block
py-3
hover:text-cyan-400
"
>

CORETRION™

<p className="text-sm text-gray-500">
Processor Platform
</p>

</a>



<a
href="/products/corelink"
className="
block
py-3
hover:text-purple-400
"
>

CORELINK™

<p className="text-sm text-gray-500">
Interconnect Fabric
</p>

</a>



<a
href="/products/chipsetron"
className="
block
py-3
hover:text-green-400
"
>

CHIPSETRON™

<p className="text-sm text-gray-500">
System Controller
</p>

</a>


</div>

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
"
>

Technology

<ChevronDown size={16}/>

</div>



{

technology &&

<div
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
"
>


{
[
["CORETRION Architecture","/technology"],
["Pipeline Architecture","/technology/pipeline"],
["SIMD Engine","/technology/simd"],
["Tensor Accelerator","/technology/tensor"],
["GPU Architecture","/technology/gpu"],
["Memory System","/technology/memory"],
["Security Architecture","/technology/security"],
["CORELINK Fabric","/technology/corelink"]

].map(item=>(

<a

key={item[0]}

href={item[1]}

className="
block
py-2
hover:text-cyan-400
"

>

{item[0]}

</a>

))

}


</div>

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
"
>

Engineering

<ChevronDown size={16}/>

</div>



{

engineering &&

<div

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
"

>


{

[
["RTL Development","/engineering/rtl"],
["Verification","/engineering/verification"],
["FPGA Implementation","/engineering/fpga"],
["Simulation Results","/engineering/simulation"],
["ASIC Flow","/engineering/asic"]

].map(item=>(


<a

key={item[0]}

href={item[1]}

className="
block
py-3
hover:text-cyan-400
"

>

{item[0]}

</a>


))


}


</div>


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
"
>

Documentation

<ChevronDown size={16}/>

</div>




{

documentation &&


<div

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
"

>


{

[

["Documentation Home","/documentation"],

["Processor ISA","/documentation/isa"],

["Architecture Reference","/documentation/architecture"],

["RTL Documentation","/documentation/rtl"],

["Verification Reports","/documentation/verification"],

["Programming Guide","/documentation/programming"],

["Developer Resources","/documentation/resources"]

].map(item=>(


<a

key={item[0]}

href={item[1]}

className="
block
py-3
hover:text-cyan-400
"

>

{item[0]}

</a>


))


}



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







{/* MOBILE BUTTON */}


<button

className="
md:hidden
text-white
"

onClick={()=>setMobile(!mobile)}

>

{

mobile?

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
space-y-5
"

>


<a href="/products">
Products
</a>


<a href="/technology">
Technology
</a>


<a href="/engineering">
Engineering
</a>


<a href="/documentation">
Documentation
</a>


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