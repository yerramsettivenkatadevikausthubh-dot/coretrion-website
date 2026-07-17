import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function CorelinkPage(){

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
text-purple-400
tracking-widest
">

INTERCONNECT FABRIC

</p>


<h1 className="
text-7xl
font-black
text-white
mt-5
">

CORELINK™

</h1>



<p className="
mt-8
text-xl
text-gray-400
max-w-3xl
">

A custom high-performance communication fabric
designed to connect CORETRION compute engines,
memory systems and accelerators.

</p>



<div className="
mt-16
border
border-white/10
rounded-3xl
p-10
bg-white/5
">


<h2 className="
text-3xl
text-white
font-bold
">

Fabric Architecture

</h2>


<p className="
mt-5
text-gray-400
">

Processor →
CORELINK Fabric →
Accelerators →
Memory

</p>


</div>



</section>


<Footer/>

</main>

)

}