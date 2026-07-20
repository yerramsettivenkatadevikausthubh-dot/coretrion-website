"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Code2,
  Mail,
  ArrowUpRight,
} from "lucide-react";
export default function Footer() {
  return (
    <footer
      className="
      relative
      bg-black
      border-t
      border-white/10
      overflow-hidden
      "
    >

      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[700px]
        h-[300px]
        bg-cyan-500/10
        blur-[150px]
        "
      />


      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        py-16
        "
      >


        <div
          className="
          grid
          md:grid-cols-4
          gap-12
          "
        >


          {/* BRAND */}

          <div className="md:col-span-2">


            <div
              className="
              flex
              items-center
              gap-3
              "
            >

              <div
                className="
                w-12
                h-12
                rounded-xl
                bg-cyan-400/10
                border
                border-cyan-400/30
                flex
                items-center
                justify-center
                "
              >

                <Cpu
                  className="text-cyan-400"
                  size={26}
                />

              </div>


              <h2
                className="
                text-3xl
                font-black
                tracking-widest
                text-white
                "
              >
                CORETRION™
              </h2>


            </div>



            <p
              className="
              mt-6
              max-w-lg
              text-gray-400
              leading-8
              "
            >
              Building next-generation intelligent computing platforms
              through custom processor architectures, AI acceleration,
              and semiconductor innovation.
            </p>



            <div
              className="
              mt-8
              flex
              gap-4
              "
            >


              <motion.a
                whileHover={{
                  y:-4,
                }}
                href="#"
                className="
                w-10
                h-10
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-cyan-400
                transition
                "
              >

               <Code2
  size={18}
  className="text-gray-400"
/>

              </motion.a>



              <motion.a
                whileHover={{
                  y:-4,
                }}
                href="mailto:contact@coretrion.com"
                className="
                w-10
                h-10
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center
                hover:border-cyan-400
                transition
                "
              >

                <Mail
                  size={18}
                  className="text-gray-400"
                />

              </motion.a>


            </div>


          </div>





          {/* PRODUCTS */}

          <div>


            <h3
              className="
              text-white
              font-bold
              mb-6
              "
            >
              Products
            </h3>


            <ul
              className="
              space-y-4
              text-gray-400
              "
            >

              <li>
                <Link
                  href="/products/coretrion"
                  className="hover:text-cyan-400 transition"
                >
                  CORETRION™ Processor
                </Link>
              </li>


              <li>
                <Link
                  href="/products/corelink"
                  className="hover:text-cyan-400 transition"
                >
                  CORELINK™ Fabric
                </Link>
              </li>


              <li>
                <Link
                  href="/products/chipsetron"
                  className="hover:text-cyan-400 transition"
                >
                  CHIPSETRON™ Controller
                </Link>
              </li>


            </ul>


          </div>






          {/* COMPANY */}

          <div>


            <h3
              className="
              text-white
              font-bold
              mb-6
              "
            >
              Explore
            </h3>


            <ul
              className="
              space-y-4
              text-gray-400
              "
            >

              <li>

                <Link
                  href="/technology"
                  className="hover:text-cyan-400 transition"
                >
                  Technology
                </Link>

              </li>


              <li>

                <Link
                  href="/engineering"
                  className="hover:text-cyan-400 transition"
                >
                  Engineering
                </Link>

              </li>


              <li>

                <Link
                  href="/documentation"
                  className="hover:text-cyan-400 transition"
                >
                  Documentation
                </Link>

              </li>


              <li>

                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition"
                >
                  Contact
                </Link>

              </li>


            </ul>


          </div>


        </div>





        {/* BOTTOM */}

        <div
          className="
          mt-16
          pt-8
          border-t
          border-white/10
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-5
          "
        >


          <p
            className="
            text-gray-500
            text-sm
            "
          >
            © 2026 CORETRION™ Semiconductor Technologies.
            All rights reserved.
          </p>



          <div
            className="
            flex
            items-center
            gap-6
            text-sm
            text-gray-500
            "
          >

            <Link
              href="/roadmap"
              className="
              hover:text-cyan-400
              transition
              "
            >
              Roadmap
            </Link>


            <Link
              href="/documentation"
              className="
              hover:text-cyan-400
              transition
              "
            >
              Developer Center
            </Link>


            <ArrowUpRight
              size={16}
              className="text-cyan-400"
            />


          </div>


        </div>


      </div>


    </footer>
  );
}