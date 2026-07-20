"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

import {
Mail,
Handshake,
FlaskConical,
Briefcase,
Cpu,
Shield,
CircuitBoard,
Microchip,
ArrowRight
} from "lucide-react";

const contactCards = [

{
title:"General Inquiry",
description:
"Questions regarding our products, technologies, documentation and engineering initiatives.",
icon:Mail
},

{
title:"Technology Partnerships",
description:
"Strategic collaborations, joint development programs and semiconductor partnerships.",
icon:Handshake
},

{
title:"Research Collaboration",
description:
"Academic collaborations, publications and processor architecture research.",
icon:FlaskConical
},

{
title:"Business Discussions",
description:
"Commercial opportunities, enterprise engagements and technology licensing discussions.",
icon:Briefcase
}

];



const expertise=[

"Processor Design",

"Computer Architecture",

"RTL Development",

"Verification",

"ASIC Design",

"FPGA Prototyping",

"Embedded Systems",

"AI Accelerators",

"Tensor Computing",

"SIMD Processing",

"Hardware Security",

"OpenROAD",

"System Integration",

"Semiconductor Research"

];



export default function ContactPage(){

return(

<main
className="
bg-black
min-h-screen
text-white
overflow-hidden
"
>

<Navbar/>

<section
className="
relative
pt-40
pb-28
overflow-hidden
"
>

{/* Background */}

<div
className="
absolute
top-16
left-1/2
-translate-x-1/2
w-[900px]
h-[900px]
rounded-full
bg-cyan-500/10
blur-[220px]
"
/>

<div
className="
absolute
right-0
bottom-0
w-[500px]
h-[500px]
rounded-full
bg-blue-500/10
blur-[180px]
"
/>

<div
className="
relative
z-10
max-w-7xl
mx-auto
px-6
"
>

{/* HERO */}

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

className="
text-center
"

>

<p
className="
text-cyan-400
uppercase
tracking-[0.5em]
font-semibold
"
>

GET IN TOUCH

</p>

<h1
className="
mt-6
text-5xl
md:text-7xl
font-black
leading-tight
"
>

Let's Build
<br/>
Tomorrow's Computing

</h1>

<p
className="
mt-8
max-w-3xl
mx-auto
text-xl
text-gray-400
leading-8
"
>

We welcome discussions around semiconductor
engineering, processor architecture,
ASIC development, FPGA prototyping,
hardware verification,
research collaboration and technology partnerships.

</p>

</motion.div>






{/* CONTACT CARDS */}

<section
className="
mt-24
"
>

<div
className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-8
"
>

{

contactCards.map((card,index)=>{

const Icon=card.icon;

return(

<motion.div

key={card.title}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
delay:index*.12
}}

whileHover={{
y:-8,
scale:1.03
}}

className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-8
hover:border-cyan-400/40
transition
"

>

<div
className="
w-16
h-16
rounded-2xl
border
border-cyan-400/30
bg-cyan-500/10
flex
items-center
justify-center
"
>

<Icon
size={34}
className="text-cyan-400"
/>

</div>

<h3
className="
mt-8
text-2xl
font-black
"
>

{card.title}

</h3>

<p
className="
mt-5
text-gray-400
leading-8
"
>

{card.description}

</p>

</motion.div>

)

})

}

</div>

</section>








{/* WHY CONTACT US */}

<section
className="
mt-32
"
>

<div
className="
grid
lg:grid-cols-2
gap-14
items-center
"
>

<div>

<p
className="
uppercase
tracking-[0.4em]
text-cyan-400
font-semibold
"
>

WHY CONTACT US

</p>

<h2
className="
mt-6
text-5xl
font-black
leading-tight
"
>

Engineering Beyond
Products

</h2>

<p
className="
mt-8
text-lg
text-gray-400
leading-8
"
>

Our engineering efforts extend beyond individual
products and encompass custom processor architecture,
AI acceleration,
embedded computing,
hardware verification,
FPGA validation,
ASIC implementation
and semiconductor research.

Whether you're seeking collaboration,
technical guidance,
or strategic engineering discussions,
we would be pleased to connect.

</p>

<div
className="
grid
grid-cols-2
gap-5
mt-10
"
>

<div className="flex items-center gap-3">
<Cpu className="text-cyan-400"/>
<span>Custom Processor Design</span>
</div>

<div className="flex items-center gap-3">
<CircuitBoard className="text-cyan-400"/>
<span>ASIC Development</span>
</div>

<div className="flex items-center gap-3">
<Microchip className="text-cyan-400"/>
<span>FPGA Validation</span>
</div>

<div className="flex items-center gap-3">
<Shield className="text-cyan-400"/>
<span>Hardware Security</span>
</div>

</div>

</div>







<div
className="
rounded-3xl
border
border-cyan-400/20
bg-cyan-500/5
backdrop-blur-xl
p-10
"
>

<h3
className="
text-3xl
font-black
"
>

Areas of Expertise

</h3>

<p
className="
mt-4
text-gray-400
"
>

Core engineering capabilities spanning modern
processor architecture and semiconductor design.

</p>

<div
className="
flex
flex-wrap
gap-4
mt-8
"
>

{

expertise.map((item)=>(

<div

key={item}

className="
px-5
py-3
rounded-full
border
border-cyan-400/30
bg-cyan-400/10
text-cyan-300
font-medium
"

>

{item}

</div>

))

}

</div>

</div>

</div>

</section>
{/* CONTACT FORM */}

<section
className="
mt-36
"
>

<div
className="
grid
lg:grid-cols-2
gap-12
items-start
"
>

{/* LEFT */}

<motion.div

initial={{
opacity:0,
x:-40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-10
"

>

<p
className="
uppercase
tracking-[0.4em]
text-cyan-400
font-semibold
"
>

CONTACT FORM

</p>

<h2
className="
mt-5
text-4xl
font-black
"
>

Start a Conversation

</h2>

<p
className="
mt-6
text-gray-400
leading-8
"
>

Whether you're interested in semiconductor
engineering, processor technologies,
research collaboration or strategic
partnerships, we'd love to hear from you.

</p>

<form
className="
mt-10
space-y-6
"
>

<div
className="
grid
md:grid-cols-2
gap-6
"
>

<input
type="text"
placeholder="Full Name"
className="
w-full
rounded-xl
border
border-white/10
bg-black/40
px-5
py-4
outline-none
focus:border-cyan-400
transition
"
/>

<input
type="email"
placeholder="Email Address"
className="
w-full
rounded-xl
border
border-white/10
bg-black/40
px-5
py-4
outline-none
focus:border-cyan-400
transition
"
/>

</div>

<input
type="text"
placeholder="Organization / Company"
className="
w-full
rounded-xl
border
border-white/10
bg-black/40
px-5
py-4
outline-none
focus:border-cyan-400
transition
"
/>

<input
type="text"
placeholder="Subject"
className="
w-full
rounded-xl
border
border-white/10
bg-black/40
px-5
py-4
outline-none
focus:border-cyan-400
transition
"
/>

<textarea

rows={7}

placeholder="Tell us about your project or inquiry..."

className="
w-full
rounded-xl
border
border-white/10
bg-black/40
px-5
py-4
resize-none
outline-none
focus:border-cyan-400
transition
"

/>

<button

type="button"

className="
inline-flex
items-center
gap-3
px-8
py-4
rounded-full
bg-cyan-400
text-black
font-bold
hover:bg-cyan-300
transition
"

>

Submit Inquiry

<ArrowRight size={18}/>

</button>

</form>

</motion.div>







{/* RIGHT */}

<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
space-y-8
"

>

{/* COMPANY */}

<div
className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-8
"
>

<h3
className="
text-3xl
font-black
"
>

Company Information

</h3>

<div
className="
mt-8
space-y-6
"
>

<div>

<p className="text-cyan-400 uppercase text-sm tracking-wider">

Organization

</p>

<p className="mt-2 text-lg">

United Integrated Services Pvt. Ltd.

</p>

</div>

<div>

<p className="text-cyan-400 uppercase text-sm tracking-wider">

Official Email

</p>

<p className="mt-2 text-lg">

contact@coretrion.com

</p>

</div>

<div>

<p className="text-cyan-400 uppercase text-sm tracking-wider">

Website

</p>

<p className="mt-2 text-lg">

https://coretrion.netlify.app

</p>

</div>

<div>

<p className="text-cyan-400 uppercase text-sm tracking-wider">

Response Time

</p>

<p className="mt-2 text-lg">

Within 2 Business Days

</p>

</div>

</div>

</div>







{/* ENGINEERING SNAPSHOT */}

<div
className="
rounded-3xl
border
border-cyan-400/20
bg-cyan-500/5
backdrop-blur-xl
p-8
"
>

<h3
className="
text-3xl
font-black
"
>

Engineering Snapshot

</h3>

<div
className="
grid
grid-cols-2
gap-6
mt-8
"
>

<div>

<h2 className="text-5xl font-black text-cyan-400">

32-bit

</h2>

<p className="mt-2 text-gray-400">

Hybrid Architecture

</p>

</div>

<div>

<h2 className="text-5xl font-black text-cyan-400">

4+

</h2>

<p className="mt-2 text-gray-400">

Compute Engines

</p>

</div>

<div>

<h2 className="text-5xl font-black text-cyan-400">

2027

</h2>

<p className="mt-2 text-gray-400">

ASIC Target

</p>

</div>

<div>

<h2 className="text-5xl font-black text-cyan-400">

100%

</h2>

<p className="mt-2 text-gray-400">

Custom IP

</p>

</div>

</div>

</div>







{/* FAQ */}

<div
className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-8
"
>

<h3
className="
text-3xl
font-black
"
>

Frequently Asked Questions

</h3>

<div
className="
mt-8
space-y-8
"
>

<div>

<h4 className="font-bold text-cyan-400">

Do you collaborate with universities?

</h4>

<p className="mt-2 text-gray-400">

Yes. We actively welcome academic collaborations and semiconductor research initiatives.

</p>

</div>

<div>

<h4 className="font-bold text-cyan-400">

Can organizations discuss technology partnerships?

</h4>

<p className="mt-2 text-gray-400">

Absolutely. Strategic engineering and technology collaborations are always welcome.

</p>

</div>

<div>

<h4 className="font-bold text-cyan-400">

Can I request technical documentation?

</h4>

<p className="mt-2 text-gray-400">

Yes. Documentation, architecture references and publications are available through the Documentation section.

</p>

</div>

<div>

<h4 className="font-bold text-cyan-400">

How quickly will I receive a response?

</h4>

<p className="mt-2 text-gray-400">

We aim to respond to inquiries within two business days.

</p>

</div>

</div>

</div>

</motion.div>

</div>

</section>
{/* COLLABORATION CTA */}

<section
className="
mt-36
mb-24
"
>

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
relative
overflow-hidden
rounded-[40px]
border
border-cyan-400/20
bg-gradient-to-r
from-cyan-500/10
via-blue-500/10
to-purple-500/10
backdrop-blur-xl
p-16
"

>

<div
className="
absolute
top-[-120px]
right-[-120px]
w-[350px]
h-[350px]
rounded-full
bg-cyan-400/10
blur-[120px]
"
/>

<div
className="
absolute
bottom-[-120px]
left-[-120px]
w-[320px]
h-[320px]
rounded-full
bg-blue-500/10
blur-[120px]
"
/>

<div
className="
relative
z-10
text-center
"
>

<p
className="
uppercase
tracking-[0.5em]
text-cyan-400
font-semibold
"
>

LET'S CONNECT

</p>

<h2
className="
mt-6
text-5xl
md:text-6xl
font-black
leading-tight
"
>

Engineering Tomorrow's
<br/>
Compute Systems

</h2>

<p
className="
mt-8
max-w-3xl
mx-auto
text-xl
text-gray-300
leading-8
"
>

Let's explore how advanced processor architectures,
AI acceleration,
embedded computing
and semiconductor innovation
can shape the next generation of intelligent systems.

</p>

<div
className="
flex
flex-wrap
justify-center
gap-6
mt-12
"
>

<a

href="mailto:contact@coretrion.com"

className="
inline-flex
items-center
gap-3
px-8
py-4
rounded-full
bg-cyan-400
text-black
font-bold
hover:bg-cyan-300
transition
"

>

Email Us

<ArrowRight size={18}/>

</a>

<a

href="/documentation"

className="
inline-flex
items-center
gap-3
px-8
py-4
rounded-full
border
border-white/20
hover:border-cyan-400
hover:text-cyan-400
transition
"

>

View Documentation

<ArrowRight size={18}/>

</a>

</div>

</div>

</motion.div>

</section>






{/* SOCIAL LINKS */}

<section
className="
pb-24
"
>

<div
className="
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
p-10
"
>

<p
className="
uppercase
tracking-[0.4em]
text-cyan-400
font-semibold
text-center
"
>

FOLLOW OUR JOURNEY

</p>

<h2
className="
mt-5
text-4xl
font-black
text-center
"
>

Stay Connected

</h2>

<p
className="
mt-5
max-w-3xl
mx-auto
text-center
text-gray-400
leading-8
"
>

Follow our engineering progress, research publications,
processor development and technology updates.

</p>

<div
className="
grid
md:grid-cols-4
gap-6
mt-12
"
>

<a

href="https://www.linkedin.com/in/kausthubh-yerramsetti-456543258/"

target="_blank"

rel="noopener noreferrer"

className="
rounded-2xl
border
border-white/10
bg-black/30
p-8
text-center
hover:border-cyan-400
hover:bg-cyan-500/5
transition
"

>

<h3
className="
text-2xl
font-black
"
>

LinkedIn

</h3>

<p
className="
mt-3
text-gray-400
break-all
"
>

Professional Profile

</p>

</a>





<a

href="https://github.com/yerramsettivenkatadevikausthubh-dot"

target="_blank"

rel="noopener noreferrer"

className="
rounded-2xl
border
border-white/10
bg-black/30
p-8
text-center
hover:border-cyan-400
hover:bg-cyan-500/5
transition
"

>

<h3
className="
text-2xl
font-black
"
>

GitHub

</h3>

<p
className="
mt-3
text-gray-400
break-all
"
>

RTL • Hardware • Projects

</p>

</a>





<a

href="https://www.researchgate.net/publication/400165265_Chipsetron-ultracore_VX_A_heterogeneous_VLSI-based_controller_for_intelligent_IoT_automation_and_real-time_edge_systems"

target="_blank"

rel="noopener noreferrer"

className="
rounded-2xl
border
border-white/10
bg-black/30
p-8
text-center
hover:border-cyan-400
hover:bg-cyan-500/5
transition
"

>

<h3
className="
text-2xl
font-black
"
>

ResearchGate

</h3>

<p
className="
mt-3
text-gray-400
"
>

Published Research

</p>

</a>





<a

href="mailto:ykausthubh@gmail.com"

className="
rounded-2xl
border
border-white/10
bg-black/30
p-8
text-center
hover:border-cyan-400
hover:bg-cyan-500/5
transition
"

>

<h3
className="
text-2xl
font-black
"
>

Email

</h3>

<p
className="
mt-3
text-gray-400
break-all
"
>

ykausthubh@gmail.com

</p>

</a>

</div>

</div>

</section>

</div>

</section>

<Footer />

</main>

);

}