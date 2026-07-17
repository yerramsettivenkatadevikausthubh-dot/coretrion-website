const stats=[

{
number:"32-bit",
label:"Hybrid Architecture"
},

{
number:"4+",
label:"Compute Engines"
},

{
number:"2027",
label:"ASIC Target"
},

{
number:"100%",
label:"Custom IP Development"
}

];


export default function Stats(){


return(

<section className="
py-20
bg-black
">


<div className="
max-w-7xl
mx-auto
px-6
grid
grid-cols-2
md:grid-cols-4
gap-8
">


{

stats.map(item=>(

<div
key={item.label}
className="
text-center
"
>


<h3 className="
text-4xl
font-black
text-cyan-400
">

{item.number}

</h3>


<p className="
text-gray-400
mt-3
">

{item.label}

</p>


</div>


))

}


</div>


</section>

)

}