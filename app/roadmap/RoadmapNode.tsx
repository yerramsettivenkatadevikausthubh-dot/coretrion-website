"use client";

import Image from "next/image";

interface Props{

title:string;
status:string;
progress:number;
image:string;
description:string;
x:number;
y:number;

}

export default function RoadmapNode({

title,
status,
progress,
image,
description,
x,
y

}:Props){

const color=
status==="completed"
?"#00ff88"
:status==="current"
?"#00e5ff"
:"#555";

return(

<div

style={{

position:"absolute",

left:x,

top:y,

transform:"translate(-50%,-50%)"

}}

className="group cursor-pointer"

>

<div

style={{

width:34,

height:34,

borderRadius:"50%",

background:color,

boxShadow:`0 0 35px ${color}`

}}

className={status==="current"
?"animate-pulse":""
}

/>

<div className="

hidden
group-hover:block

absolute

left-10

top-0

w-80

bg-[#0b0f14]

border

border-cyan-500/40

rounded-xl

overflow-hidden

shadow-2xl

">

<Image

src={image}

alt={title}

width={450}

height={250}

className="w-full"

/>

<div className="p-4">

<h3 className="text-cyan-400 font-bold text-xl">

{title}

</h3>

<p className="text-gray-300 mt-2">

{description}

</p>

<div className="

mt-4

w-full

bg-gray-700

rounded-full

h-2

">

<div

style={{

width:`${progress}%`

}}

className="

bg-cyan-400

h-2

rounded-full

"

/>

</div>

<p className="text-sm text-cyan-300 mt-2">

{progress}% Complete

</p>

</div>

</div>

</div>

)

}