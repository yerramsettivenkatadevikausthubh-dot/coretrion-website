export default function Documentation(){

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

Documentation

</h1>


<p className="
text-gray-400
text-xl
mt-6
">

Technical documentation for CORETRION™ ecosystem.

</p>



<div className="
grid
md:grid-cols-3
gap-8
mt-16
">


{

[
"Processor ISA",
"Architecture Reference",
"RTL Documentation",
"Verification Reports",
"Programming Guide",
"Developer Resources"

].map(doc=>(


<div

key={doc}

className="
bg-white/5
rounded-3xl
p-8
border
border-white/10
hover:border-purple-400
"


>


<h2 className="
text-2xl
font-bold
">

{doc}

</h2>


<button className="
mt-5
text-cyan-400
">

Open →

</button>


</div>


))


}


</div>


</div>


</main>


)

}