import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ChipsetronPage(){


return(

<main className="bg-black min-h-screen">


<Navbar/>


<section className="
pt-40
max-w-7xl
mx-auto
px-6
pb-20
">


<p className="
text-green-400
tracking-widest
">

SYSTEM CONTROLLER

</p>


<h1 className="
text-7xl
font-black
text-white
mt-5
">

CHIPSETRON™

</h1>



<p className="
mt-8
text-xl
text-gray-400
max-w-3xl
">

Dedicated controller architecture developed
for CORETRION based systems and embedded platforms.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
[
"Peripheral Control",
"System Management",
"Device Integration"
].map(x=>(

<div
key={x}
className="
p-8
rounded-2xl
border
border-white/10
"
>

<h3 className="
text-white
text-xl
font-bold
">

{x}

</h3>

</div>


))

}


</div>


</section>


<Footer/>

</main>

)

}