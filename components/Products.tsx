import Link from "next/link";


const products=[

{
name:"CORETRION™",
category:"Processor",
image:"/images/coretrion-chip.png",
description:
"32-bit hybrid processor integrating scalar, SIMD, Tensor and GPU computing."
},


{
name:"CORELINK™",
category:"Interconnect",
image:"/images/corelink-fabric.png",
description:
"Custom compute communication fabric connecting intelligent subsystems."
},


{
name:"CHIPSETRON™",
category:"Controller",
image:"/images/chipsetron-controller.png",
description:
"System controller platform for CORETRION based products."
}

];



export default function Products(){


return(

<section className="
py-24
bg-black
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-white
text-5xl
font-black
">

Products

</h2>



<div className="
grid
md:grid-cols-3
gap-8
mt-14
">


{

products.map(product=>(


<div

key={product.name}

className="
bg-white/5
border
border-white/10
rounded-3xl
overflow-hidden
hover:border-cyan-400
transition
"


>


<img

src={product.image}

alt={product.name}

className="
h-64
w-full
object-cover
"

/>



<div className="p-8">


<h3 className="
text-white
text-3xl
font-bold
">

{product.name}

</h3>


<p className="
text-cyan-400
mt-2
">

{product.category}

</p>


<p className="
text-gray-400
mt-5
">

{product.description}

</p>



<Link

href={`/products/${product.name.toLowerCase().replace("™","").replace("coretrion","coretrion").replace("corelink","corelink").replace("chipsetron","chipsetron")}`}

className="
inline-block
mt-6
text-white
underline
"

>

Explore →

</Link>


</div>


</div>


))

}


</div>


</div>


</section>

)

}