import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ContactPage(){


return(

<main className="bg-black min-h-screen text-white">


<Navbar/>


<section className="
pt-40
pb-24
max-w-5xl
mx-auto
px-6
">


<p className="
text-cyan-400
tracking-[0.4em]
uppercase
">

CONTACT

</p>



<h1 className="
mt-6
text-6xl
font-black
">

Connect With CORETRION™

</h1>



<p className="
mt-8
text-xl
text-gray-400
">

For semiconductor partnerships,
technology collaboration and research discussions.

</p>



<div className="
mt-12
rounded-3xl
border
border-white/10
bg-white/5
p-10
">


<h2 className="
text-2xl
font-bold
">
</h2>



<p className="
mt-5
text-gray-400
">

CORETRION™ Semiconductor Technologies

</p>


<p className="
mt-3
text-gray-400
">

Email: contact@coretrion.com

</p>


</div>



</section>


<Footer/>


</main>

)

}