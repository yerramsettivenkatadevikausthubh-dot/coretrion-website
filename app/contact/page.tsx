export default function Contact(){


return(

<main className="
min-h-screen
bg-black
text-white
pt-32
">


<div className="
max-w-4xl
mx-auto
px-6
">


<h1 className="
text-6xl
font-black
">

Contact

</h1>


<p className="
text-gray-400
text-xl
mt-6
">

Connect with the CORETRION™ engineering team.

</p>



<form className="
mt-12
space-y-5
">


<input

placeholder="Name"

className="
w-full
bg-white/5
border
border-white/10
p-5
rounded-xl
"

/>


<input

placeholder="Email"

className="
w-full
bg-white/5
border
border-white/10
p-5
rounded-xl
"

/>



<textarea

placeholder="Message"

rows={6}

className="
w-full
bg-white/5
border
border-white/10
p-5
rounded-xl
"

/>



<button

className="
bg-cyan-400
text-black
px-8
py-4
rounded-full
font-bold
"

>

Send Message

</button>


</form>


</div>


</main>


)

}