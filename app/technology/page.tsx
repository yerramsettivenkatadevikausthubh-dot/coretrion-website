export default function Technology(){

return(

<main className="
min-h-screen
bg-black
text-white
pt-32
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h1 className="
text-6xl
font-black
">

CORETRION™ Technology

</h1>


<p className="
mt-6
text-xl
text-gray-400
max-w-3xl
">

Advanced heterogeneous computing architecture combining
scalar processing, SIMD acceleration, tensor computation,
GPU processing and custom interconnect technology.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{
[
["Pipeline","/technology/pipeline"],
["SIMD Engine","/technology/simd"],
["Tensor Accelerator","/technology/tensor"],
["GPU Architecture","/technology/gpu"],
["Memory System","/technology/memory"],
["Security Architecture","/technology/security"]

].map(item=>(


<a
key={item[0]}
href={item[1]}
className="
bg-white/5
border
border-white/10
rounded-3xl
p-8
hover:border-cyan-400
transition
"
>


<h2 className="
text-2xl
font-bold
">

{item[0]}

</h2>


<p className="
mt-4
text-gray-400
">

Explore architecture →

</p>


</a>


))


}


</div>



</div>


</main>

)

}