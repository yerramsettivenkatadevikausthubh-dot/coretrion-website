import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";

import Stats from "@/components/Stats";

import Products from "@/components/Products";

import Technology from "@/components/Technology";

import Publications from "@/components/Publications";

import Footer from "@/components/Footer";


export default function Home(){


return (

<main

className="
relative
bg-[#020617]
min-h-screen
overflow-hidden
"


>


{/* Navigation */}

<Navbar />



{/* Hero Product Introduction */}

<section id="home">

<Hero />

</section>



{/* Architecture Statistics */}

<section id="performance">

<Stats />

</section>




{/* Product Ecosystem */}

<section id="products">

<Products />

</section>




{/* Technology */}

<section id="technology">

<Technology />

</section>



{/* Research */}

<section id="research">

<Publications />

</section>




{/* Footer */}

<Footer />


</main>


);


}