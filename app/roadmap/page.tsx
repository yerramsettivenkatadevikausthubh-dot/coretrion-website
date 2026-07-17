"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import RoadmapCanvas from "./RoadmapCanvas";
import RoadmapBackground from "./RoadmapBackground";
import StatsPanel from "@/components/Stats";


export default function RoadmapPage(){


return(

<main
className="
relative
min-h-screen
bg-black
overflow-hidden
text-white
"
>


{/* NAVBAR */}

<Navbar />





{/* BACKGROUND */}

<RoadmapBackground />





{/* CONTENT */}

<div
className="
relative
z-10
pt-32
"
>


<RoadmapCanvas />


</div>






{/* ROADMAP STATS */}

<div
className="
relative
z-20
"
>

<StatsPanel />

</div>






{/* FOOTER */}

<Footer />



</main>

)

}