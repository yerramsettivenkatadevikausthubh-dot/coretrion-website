export default function Engineering(){

return(

<main className="
min-h-screen
bg-black
text-white
pt-32
">


<section className="
max-w-7xl
mx-auto
px-6
">


<h1 className="
text-6xl
font-black
">

Engineering

</h1>


<p className="
text-gray-400
text-xl
mt-6
max-w-3xl
">

Explore the engineering journey behind CORETRION™,
from architecture design to RTL development,
verification and ASIC readiness.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{

[
"Architecture Design",
"RTL Development",
"Verification",
"FPGA Prototyping",
"ASIC Implementation",
"Software Ecosystem"

].map(item=>(


<div

key={item}

className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-cyan-400
"


>


<h2 className="
text-2xl
font-bold
">

{item}

</h2>


<p className="
text-gray-400
mt-4
">

Advanced engineering processes for next generation computing.

</p>


</div>


))


}


</div>


</section>


</main>

)

}