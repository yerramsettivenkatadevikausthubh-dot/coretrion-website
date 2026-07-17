"use client";

import { motion, animate, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const stats = [
  ["RTL Modules", 62],
  ["Verified", 47],
  ["Architecture Blocks", 18],
  ["ISA Instructions", 64],
];


function Counter({ value }: { value: number }) {

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.round(latest)
  );


  useEffect(() => {

    const animation = animate(
      count,
      value,
      {
        duration: 2
      }
    );

    return animation.stop;

  }, [count, value]);


  return (
    <motion.h2
      className="
      text-5xl
      font-bold
      text-cyan-400
      mt-4
      "
    >
      {rounded}
    </motion.h2>
  );
}



export default function LiveStats(){

return(

<div
className="
grid
grid-cols-4
gap-8
mb-20
"
>

{
stats.map(([title,value])=>(

<div

key={title}

className="
bg-[#0b1018]
border
border-cyan-500/20
rounded-2xl
p-8
text-center
"

>

<p className="text-gray-400">

{title}

</p>


<Counter value={Number(value)} />


</div>

))

}

</div>

)

}