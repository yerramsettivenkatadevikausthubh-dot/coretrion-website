"use client";

export default function AnimatedTrace(){

return(

<svg

className="absolute inset-0 w-full h-full"

viewBox="0 0 1300 650"

>

<defs>

<linearGradient id="trace">

<stop offset="0%" stopColor="#00ffff"/>

<stop offset="100%" stopColor="#0077ff"/>

</linearGradient>

</defs>

<path

d="

M100 520

L260 430

L470 350

L700 270

L930 180

L1160 90

"

stroke="url(#trace)"

strokeWidth="6"

fill="none"

strokeLinecap="round"

strokeDasharray="20"

>

<animate

attributeName="stroke-dashoffset"

from="0"

to="-120"

dur="3s"

repeatCount="indefinite"

/>

</path>

</svg>

)

}