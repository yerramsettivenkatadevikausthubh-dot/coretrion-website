"use client";

import Image from "next/image";


interface BlockCardProps {

  title: string;

  description: string;

  image?: string;

  active?: boolean;

  onClick?: () => void;

}



export default function BlockCard({

  title,

  description,

  image,

  active,

  onClick,

}: BlockCardProps) {


return (

<button

onClick={onClick}

className={`
w-full
text-left
rounded-xl
border
p-5
transition-all
duration-300

${
active
?
"border-blue-500 bg-blue-500/10"
:
"border-gray-700 hover:border-blue-400"
}

`}

>



{
image &&

<div
className="
relative
w-full
h-48
mb-4
rounded-lg
overflow-hidden
"
>

<Image

src={image}

alt={title}

fill

className="
object-cover
"

/>

</div>

}





<h3

className="
text-xl
font-semibold
text-white
"

>

{title}

</h3>



<p

className="
mt-2
text-gray-400
"

>

{description}

</p>



</button>

);

}