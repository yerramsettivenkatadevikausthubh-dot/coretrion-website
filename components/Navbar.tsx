"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


export default function Navbar() {

  const [mobile, setMobile] = useState(false);

  const [products, setProducts] = useState(false);
  const [technology, setTechnology] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [documentation, setDocumentation] = useState(false);

  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileTechnology, setMobileTechnology] = useState(false);
  const [mobileEngineering, setMobileEngineering] = useState(false);
  const [mobileDocumentation, setMobileDocumentation] = useState(false);


  return (

    <nav
      className="
      fixed
      top-0
      z-50
      w-full
      bg-black/70
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        justify-between
        items-center
        "
      >


        {/* LOGO */}

        <Link
          href="/"
          className="
          text-white
          text-2xl
          font-black
          tracking-widest
          "
        >
          CORETRION™
        </Link>




        {/* DESKTOP MENU */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          text-gray-300
          "
        >



          {/* PRODUCTS */}

          <div
            className="relative"
            onMouseEnter={() => setProducts(true)}
            onMouseLeave={() => setProducts(false)}
          >

            <div
              className="
              flex
              items-center
              gap-2
              cursor-pointer
              hover:text-white
              transition
              "
            >

              Products

              <ChevronDown size={16}/>

            </div>



            {
              products &&

              <motion.div

                initial={{
                  opacity:0,
                  y:10
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                className="
                absolute
                top-10
                left-0
                w-72
                bg-black
                rounded-xl
                border
                border-white/10
                p-5
                shadow-xl
                "
              >


                <Link
                  href="/products/coretrion"
                  className="
                  block
                  py-3
                  hover:text-cyan-400
                  transition
                  "
                >

                  CORETRION™

                  <p className="text-sm text-gray-500">
                    Processor Platform
                  </p>

                </Link>



                <Link
                  href="/products/corelink"
                  className="
                  block
                  py-3
                  hover:text-purple-400
                  transition
                  "
                >

                  CORELINK™

                  <p className="text-sm text-gray-500">
                    Interconnect Fabric
                  </p>

                </Link>



                <Link
                  href="/products/chipsetron"
                  className="
                  block
                  py-3
                  hover:text-green-400
                  transition
                  "
                >

                  CHIPSETRON™

                  <p className="text-sm text-gray-500">
                    System Controller
                  </p>

                </Link>


              </motion.div>

            }


          </div>





          {/* TECHNOLOGY */}


          <div
            className="relative"
            onMouseEnter={() => setTechnology(true)}
            onMouseLeave={() => setTechnology(false)}
          >


            <div
              className="
              flex
              items-center
              gap-2
              cursor-pointer
              hover:text-white
              transition
              "
            >

              Technology

              <ChevronDown size={16}/>

            </div>



            {
              technology &&


              <motion.div

                initial={{
                  opacity:0,
                  y:10
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                className="
                absolute
                top-10
                left-0
                w-80
                bg-black
                rounded-xl
                border
                border-white/10
                p-5
                shadow-xl
                "
              >


                <Link
                  href="/technology"
                  className="block py-2 hover:text-cyan-400"
                >
                  CORETRION Architecture
                </Link>


                <Link
                  href="/technology/pipeline"
                  className="block py-2 hover:text-cyan-400"
                >
                  Processor Pipeline
                </Link>


                <Link
                  href="/technology/simd"
                  className="block py-2 hover:text-cyan-400"
                >
                  SIMD Engine
                </Link>


                <Link
                  href="/technology/tensor"
                  className="block py-2 hover:text-cyan-400"
                >
                  Tensor Accelerator
                </Link>


                <Link
                  href="/technology/gpu"
                  className="block py-2 hover:text-cyan-400"
                >
                  GPU Architecture
                </Link>


                <Link
                  href="/technology/memory"
                  className="block py-2 hover:text-cyan-400"
                >
                  Memory System
                </Link>


                <Link
                  href="/technology/security"
                  className="block py-2 hover:text-cyan-400"
                >
                  Security Architecture
                </Link>


                <Link
                  href="/technology/corelink"
                  className="block py-2 hover:text-purple-400"
                >
                  CORELINK Fabric
                </Link>


              </motion.div>

            }


          </div>
                    {/* ENGINEERING */}


          <div
            className="relative"
            onMouseEnter={() => setEngineering(true)}
            onMouseLeave={() => setEngineering(false)}
          >

            <div
              className="
              flex
              items-center
              gap-2
              cursor-pointer
              hover:text-white
              transition
              "
            >

              Engineering

              <ChevronDown size={16}/>

            </div>



            {
              engineering &&


              <motion.div

                initial={{
                  opacity:0,
                  y:10
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                className="
                absolute
                top-10
                left-0
                w-72
                bg-black
                rounded-xl
                border
                border-white/10
                p-5
                shadow-xl
                "
              >


                <Link
                  href="/engineering/rtl"
                  className="block py-3 hover:text-cyan-400"
                >
                  RTL Development
                </Link>


                <Link
                  href="/engineering/fpga"
                  className="block py-3 hover:text-cyan-400"
                >
                  FPGA Implementation
                </Link>


                <Link
                  href="/engineering/verification"
                  className="block py-3 hover:text-cyan-400"
                >
                  Verification
                </Link>


                <Link
                  href="/engineering/simulation"
                  className="block py-3 hover:text-cyan-400"
                >
                  Simulation Results
                </Link>


                <Link
                  href="/engineering/asic"
                  className="block py-3 hover:text-cyan-400"
                >
                  ASIC Flow
                </Link>


              </motion.div>

            }

          </div>








          {/* DOCUMENTATION */}



          <div
            className="relative"
            onMouseEnter={() => setDocumentation(true)}
            onMouseLeave={() => setDocumentation(false)}
          >


            <div
              className="
              flex
              items-center
              gap-2
              cursor-pointer
              hover:text-white
              transition
              "
            >

              Documentation

              <ChevronDown size={16}/>

            </div>




            {
              documentation &&


              <motion.div

                initial={{
                  opacity:0,
                  y:10
                }}

                animate={{
                  opacity:1,
                  y:0
                }}

                className="
                absolute
                top-10
                left-0
                w-80
                bg-black
                rounded-xl
                border
                border-white/10
                p-5
                shadow-xl
                "
              >


                <Link
                  href="/documentation"
                  className="block py-3 hover:text-cyan-400"
                >
                  Documentation Home
                </Link>


                <Link
                  href="/documentation/isa"
                  className="block py-3 hover:text-cyan-400"
                >
                  Processor ISA
                </Link>


                <Link
                  href="/documentation/architecture"
                  className="block py-3 hover:text-cyan-400"
                >
                  Architecture Reference
                </Link>


                <Link
                  href="/documentation/rtl"
                  className="block py-3 hover:text-cyan-400"
                >
                  RTL Documentation
                </Link>


                <Link
                  href="/documentation/verification"
                  className="block py-3 hover:text-cyan-400"
                >
                  Verification Reports
                </Link>


                <Link
                  href="/documentation/programming"
                  className="block py-3 hover:text-cyan-400"
                >
                  Programming Guide
                </Link>


                <Link
                  href="/documentation/resources"
                  className="block py-3 hover:text-cyan-400"
                >
                  Developer Resources
                </Link>


              </motion.div>

            }


          </div>







          {/* SIMPLE LINKS */}


          <Link
            href="/roadmap"
            className="
            hover:text-white
            transition
            "
          >
            Roadmap
          </Link>



          <Link
            href="/contact"
            className="
            hover:text-white
            transition
            "
          >
            Contact
          </Link>



        </div>






        {/* MOBILE BUTTON */}


        <button

          className="
          md:hidden
          text-white
          "

          onClick={() => setMobile(!mobile)}

        >

          {
            mobile
            ?
            <X/>
            :
            <Menu/>
          }


        </button>


      </div>

      {/* MOBILE MENU */}


      {
        mobile &&


        <div

          className="
          md:hidden
          bg-black
          border-t
          border-white/10
          p-8
          text-white
          space-y-6
          "

        >





          {/* PRODUCTS MOBILE */}


          <div>


            <button

              onClick={() => setMobileProducts(!mobileProducts)}

              className="
              flex
              items-center
              gap-2
              "

            >

              Products

              <ChevronDown size={16}/>

            </button>



            {
              mobileProducts &&


              <div

                className="
                ml-5
                mt-4
                space-y-3
                text-gray-400
                "

              >

                <Link href="/products/coretrion">
                  CORETRION™
                </Link>


                <Link href="/products/corelink">
                  CORELINK™
                </Link>


                <Link href="/products/chipsetron">
                  CHIPSETRON™
                </Link>


              </div>

            }


          </div>








          {/* TECHNOLOGY MOBILE */}


          <div>


            <button

              onClick={() => setMobileTechnology(!mobileTechnology)}

              className="
              flex
              items-center
              gap-2
              "

            >

              Technology

              <ChevronDown size={16}/>

            </button>



            {
              mobileTechnology &&


              <div

                className="
                ml-5
                mt-4
                space-y-3
                text-gray-400
                "

              >

                <Link href="/technology">
                  CORETRION Architecture
                </Link>


                <Link href="/technology/pipeline">
                  Processor Pipeline
                </Link>


                <Link href="/technology/simd">
                  SIMD Engine
                </Link>


                <Link href="/technology/tensor">
                  Tensor Accelerator
                </Link>


                <Link href="/technology/gpu">
                  GPU Architecture
                </Link>


                <Link href="/technology/memory">
                  Memory System
                </Link>


                <Link href="/technology/security">
                  Security Architecture
                </Link>


                <Link href="/technology/corelink">
                  CORELINK Fabric
                </Link>


              </div>

            }


          </div>








          {/* ENGINEERING MOBILE */}



          <div>


            <button

              onClick={() => setMobileEngineering(!mobileEngineering)}

              className="
              flex
              items-center
              gap-2
              "

            >

              Engineering

              <ChevronDown size={16}/>

            </button>



            {
              mobileEngineering &&


              <div

                className="
                ml-5
                mt-4
                space-y-3
                text-gray-400
                "

              >

                <Link href="/engineering/rtl">
                  RTL Development
                </Link>


                <Link href="/engineering/fpga">
                  FPGA Implementation
                </Link>


                <Link href="/engineering/verification">
                  Verification
                </Link>


                <Link href="/engineering/simulation">
                  Simulation
                </Link>


                <Link href="/engineering/asic">
                  ASIC Flow
                </Link>


              </div>

            }


          </div>








          {/* DOCUMENTATION MOBILE */}



          <div>


            <button

              onClick={() => setMobileDocumentation(!mobileDocumentation)}

              className="
              flex
              items-center
              gap-2
              "

            >

              Documentation

              <ChevronDown size={16}/>

            </button>




            {
              mobileDocumentation &&


              <div

                className="
                ml-5
                mt-4
                space-y-3
                text-gray-400
                "

              >

                <Link href="/documentation">
                  Documentation Home
                </Link>


                <Link href="/documentation/isa">
                  Processor ISA
                </Link>


                <Link href="/documentation/architecture">
                  Architecture Reference
                </Link>


                <Link href="/documentation/rtl">
                  RTL Documentation
                </Link>


                <Link href="/documentation/verification">
                  Verification Reports
                </Link>


                <Link href="/documentation/programming">
                  Programming Guide
                </Link>


                <Link href="/documentation/resources">
                  Developer Resources
                </Link>


              </div>

            }


          </div>








          <Link href="/roadmap">
            Roadmap
          </Link>


          <Link href="/contact">
            Contact
          </Link>




        </div>

      }


    </nav>

  );

}
