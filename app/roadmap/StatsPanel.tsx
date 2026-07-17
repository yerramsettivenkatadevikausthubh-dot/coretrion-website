"use client";

export default function StatsPanel(){

return(

<div className="

absolute

right-8

top-24

w-80

bg-[#0b1018]

border

border-cyan-500/20

rounded-2xl

p-6

">

<h2 className="

text-2xl

font-bold

text-cyan-400

">

Mission Status

</h2>

<div className="space-y-5 mt-6">

<div>

<p className="text-gray-400">

Current Phase

</p>

<p className="text-white text-xl">

Verification

</p>

</div>

<div>

<p className="text-gray-400">

Progress

</p>

<p className="text-cyan-400 text-3xl">

72%

</p>

</div>

<div>

<p className="text-gray-400">

Target

</p>

<p className="text-white">

ASIC 2027

</p>

</div>

<div>

<p className="text-gray-400">

Status

</p>

<p className="text-green-400">

YOU ARE HERE

</p>

</div>

</div>

</div>

)

}