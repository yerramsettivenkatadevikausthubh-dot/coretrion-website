import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";


const geist = Geist({

  variable: "--font-geist-sans",

  subsets:["latin"],

});


const geistMono = Geist_Mono({

  variable:"--font-geist-mono",

  subsets:["latin"],

});



export const metadata = {

  title:
    "CORETRION™ | Hybrid Compute Processor Architecture",


  description:
    "CORETRION™ is a 32-bit hybrid compute architecture integrating CPU, SIMD, Tensor AI acceleration and GPU compute.",


  keywords:[

    "CORETRION",

    "Processor",

    "Semiconductor",

    "AI Accelerator",

    "Tensor Engine",

    "Custom ISA"

  ]

};



export default function RootLayout({

children,

}:{

children:React.ReactNode;

}) {


return (

<html lang="en">


<body

className={`
${geist.variable}
${geistMono.variable}
antialiased

`}

>


{children}


</body>


</html>

);


}