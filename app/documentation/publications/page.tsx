"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  BookOpen,
  Cpu,
  FileText,
  Download,
  ExternalLink,
  Microscope,
  Calendar,
  Users,
  Award,
} from "lucide-react";

const stats = [
  {
    value: "01",
    label: "Published Paper",
  },
  {
    value: "06",
    label: "Research Areas",
  },
  {
    value: "03",
    label: "Hardware Platforms",
  },
  {
    value: "2027",
    label: "ASIC Target",
  },
];

const areas = [
  "Processor Architecture",
  "VLSI Systems",
  "Embedded Computing",
  "Semiconductor Design",
  "AI Hardware",
  "Edge Computing",
];

const publications = [
  {
    title:
      "CHIPSETRON™ Ultracore VX: A heterogeneous VLSI-based controller for intelligent IoT automation and real-time edge systems",

    status: "Published",

    category: "VLSI CONTROLLER ARCHITECTURE",

    year: "2025",

    authors:
      "Y. V. D. Kausthubh, Kishore G. Ravi, Chilumala Sandeep",

    icon: Award,

    description:
      "A heterogeneous VLSI controller architecture designed for intelligent IoT automation, robotics and real-time edge computing built around a proprietary processor platform.",

    link:
      "https://www.researchgate.net/publication/400165265_Chipsetron-ultracore_VX_A_heterogeneous_VLSI-based_controller_for_intelligent_IoT_automation_and_real-time_edge_systems",
  },

  {
    title: "CORETRION™ Hybrid Compute Architecture",

    status: "In Preparation",

    category: "PROCESSOR ARCHITECTURE",

    year: "2026",

    authors: "CORETRION Research Team",

    icon: Cpu,

    description:
      "Custom 32-bit processor architecture integrating scalar execution, SIMD processing, tensor acceleration and GPU compute.",

    link: "#",
  },

  {
    title: "CORELINK™ Compute Fabric",

    status: "Research",

    category: "INTERCONNECT ARCHITECTURE",

    year: "2026",

    authors: "CORETRION Research Team",

    icon: Microscope,

    description:
      "Scalable packet-based communication fabric connecting processors, accelerators and memory systems.",

    link: "#",
  },
];

export default function PublicationsPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">
      <Navbar />

      {/* HERO */}

      <section className="relative pt-40 pb-24">

        <div
          className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[900px]
          h-[900px]
          rounded-full
          bg-cyan-500/10
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="text-center"
          >

            <p
              className="
              text-cyan-400
              tracking-[0.5em]
              uppercase
              font-semibold
              "
            >
              CORETRION™ RESEARCH
            </p>

            <h1
              className="
              mt-6
              text-5xl
              md:text-7xl
              font-black
              "
            >
              Technical Publications
            </h1>

            <p
              className="
              mt-8
              max-w-3xl
              mx-auto
              text-xl
              text-gray-400
              leading-relaxed
              "
            >
              Research publications, semiconductor architecture,
              processor innovation, VLSI systems and intelligent
              hardware development powering the CORETRION™ ecosystem.
            </p>

          </motion.div>

          {/* STATS */}

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-6
            mt-20
            "
          >

            {stats.map((item) => (

              <motion.div
                key={item.label}
                whileHover={{ y: -8 }}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                text-center
                "
              >

                <h2
                  className="
                  text-4xl
                  font-black
                  text-cyan-400
                  "
                >
                  {item.value}
                </h2>

                <p
                  className="
                  mt-3
                  text-gray-400
                  "
                >
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

          {/* FEATURED PUBLICATION */}

          <motion.div

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            className="
            mt-24
            rounded-3xl
            border
            border-cyan-400/20
            bg-cyan-500/5
            backdrop-blur-xl
            p-10
            "
          >

            <div
              className="
              flex
              items-center
              gap-3
              text-cyan-400
              uppercase
              tracking-[0.3em]
              font-bold
              "
            >
              <BookOpen size={20} />
              Featured Publication
            </div>

            <h2
              className="
              mt-6
              text-4xl
              font-black
              "
            >
              CHIPSETRON™ Ultracore VX
            </h2>

            <p
              className="
              mt-6
              text-gray-300
              leading-8
              text-lg
              "
            >
              A heterogeneous VLSI-based controller for intelligent
              IoT automation and real-time edge systems featuring a
              proprietary processor architecture for embedded computing.
            </p>

            <div
              className="
              grid
              md:grid-cols-3
              gap-6
              mt-10
              "
            >

              <div className="flex gap-3 items-center">
                <Calendar className="text-cyan-400" />
                <div>
                  <p className="text-gray-500 text-sm">Published</p>
                  <p>January 2025</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Users className="text-cyan-400" />
                <div>
                  <p className="text-gray-500 text-sm">Authors</p>
                  <p>3 Researchers</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <Award className="text-cyan-400" />
                <div>
                  <p className="text-gray-500 text-sm">Platform</p>
                  <p>ResearchGate</p>
                </div>
              </div>

            </div>

            <div
              className="
              flex
              flex-wrap
              gap-5
              mt-12
              "
            >

              <Link
                href="https://www.researchgate.net/publication/400165265_Chipsetron-ultracore_VX_A_heterogeneous_VLSI-based_controller_for_intelligent_IoT_automation_and_real-time_edge_systems"
                target="_blank"
                className="
                px-7
                py-4
                rounded-full
                bg-cyan-400
                text-black
                font-bold
                flex
                items-center
                gap-3
                "
              >
                Read Publication
                <ExternalLink size={18}/>
              </Link>

              <button
                className="
                px-7
                py-4
                rounded-full
                border
                border-white/10
                bg-white/5
                flex
                items-center
                gap-3
                "
              >
                <Download size={18}/>
                PDF
              </button>

            </div>

          </motion.div>
                    {/* RESEARCH AREAS */}

          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-28"
          >

            <div className="flex items-center gap-3">

              <Microscope className="text-cyan-400" size={26} />

              <h2 className="text-4xl font-black">
                Research Areas
              </h2>

            </div>

            <p className="mt-5 text-gray-400 max-w-3xl leading-8">
              CORETRION™ research spans processor architecture,
              VLSI systems, intelligent embedded computing,
              semiconductor design and AI hardware acceleration.
            </p>

            <div
              className="
              grid
              md:grid-cols-3
              gap-8
              mt-12
              "
            >

              {areas.map((area, index) => (

                <motion.div

                  key={area}

                  initial={{ opacity: 0, y: 30 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}

                  transition={{ delay: index * .08 }}

                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}

                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/40
                  transition
                  "
                >

                  <Cpu
                    className="text-cyan-400"
                    size={34}
                  />

                  <h3
                    className="
                    mt-6
                    text-2xl
                    font-black
                    "
                  >
                    {area}
                  </h3>

                  <p
                    className="
                    mt-4
                    text-gray-400
                    leading-7
                    "
                  >
                    Ongoing semiconductor research,
                    architecture exploration and
                    hardware innovation.
                  </p>

                </motion.div>

              ))}

            </div>

          </motion.section>





          {/* PUBLICATIONS */}

          <section className="mt-32">

            <div className="flex items-center gap-3">

              <FileText
                className="text-cyan-400"
                size={26}
              />

              <h2
                className="
                text-4xl
                font-black
                "
              >
                Publications
              </h2>

            </div>

            <p
              className="
              mt-5
              text-gray-400
              max-w-3xl
              leading-8
              "
            >
              Research papers covering processor
              architecture, VLSI systems,
              semiconductor innovation and
              intelligent hardware platforms.
            </p>

            <div
              className="
              grid
              lg:grid-cols-3
              gap-8
              mt-14
              "
            >

              {

                publications.map((paper, index) => {

                  const Icon = paper.icon;

                  return (

                    <motion.div

                      key={paper.title}

                      initial={{
                        opacity: 0,
                        y: 40,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      viewport={{
                        once: true,
                      }}

                      transition={{
                        delay: index * .12,
                      }}

                      whileHover={{
                        y: -10,
                      }}

                      className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-8
                      hover:border-cyan-400/40
                      transition
                      "
                    >

                      <div
                        className="
                        flex
                        justify-between
                        items-start
                        "
                      >

                        <div
                          className="
                          w-14
                          h-14
                          rounded-xl
                          bg-cyan-500/10
                          border
                          border-cyan-400/30
                          flex
                          items-center
                          justify-center
                          "
                        >

                          <Icon
                            className="text-cyan-400"
                          />

                        </div>

                        <span
                          className={`
                          px-4
                          py-2
                          rounded-full
                          text-xs
                          font-bold

                          ${
                            paper.status === "Published"
                              ? "bg-green-500/20 text-green-400 border border-green-400/30"
                              : paper.status === "Research"
                              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-400/30"
                              : "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                          }
                          `}
                        >

                          {paper.status}

                        </span>

                      </div>

                      <h3
                        className="
                        mt-8
                        text-2xl
                        font-black
                        leading-snug
                        "
                      >

                        {paper.title}

                      </h3>

                      <p
                        className="
                        mt-4
                        text-cyan-400
                        uppercase
                        tracking-widest
                        text-xs
                        font-bold
                        "
                      >

                        {paper.category}

                      </p>

                      <p
                        className="
                        mt-6
                        text-gray-400
                        leading-7
                        "
                      >

                        {paper.description}

                      </p>

                      <div
                        className="
                        mt-8
                        space-y-2
                        text-sm
                        text-gray-400
                        "
                      >

                        <p>

                          <strong className="text-white">
                            Authors:
                          </strong>{" "}

                          {paper.authors}

                        </p>

                        <p>

                          <strong className="text-white">
                            Year:
                          </strong>{" "}

                          {paper.year}

                        </p>

                      </div>

                      <Link

                        href={paper.link}

                        target="_blank"

                        className="
                        mt-8
                        inline-flex
                        items-center
                        gap-3
                        text-cyan-400
                        font-bold
                        hover:text-cyan-300
                        transition
                        "
                      >

                        Read More

                        <ExternalLink size={18} />

                      </Link>

                    </motion.div>

                  );

                })

              }

            </div>

          </section>
                    {/* WHITEPAPERS */}

          <section className="mt-32">

            <div className="flex items-center gap-3">

              <BookOpen
                className="text-cyan-400"
                size={26}
              />

              <h2 className="text-4xl font-black">
                Technical Whitepapers
              </h2>

            </div>

            <p className="mt-5 text-gray-400 max-w-3xl leading-8">
              Architecture specifications, semiconductor design
              methodologies and engineering documentation supporting
              the CORETRION™ hardware ecosystem.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

              {[
                "CORETRION™ Processor Architecture",
                "CORELINK™ Compute Fabric",
                "Tensor Accelerator",
                "SIMD Processing Engine",
                "Security Architecture",
                "Memory Subsystem"
              ].map((paper,index)=>(

                <motion.div

                  key={paper}

                  initial={{opacity:0,y:30}}

                  whileInView={{opacity:1,y:0}}

                  viewport={{once:true}}

                  transition={{delay:index*.08}}

                  whileHover={{y:-8}}

                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                  hover:border-cyan-400/40
                  transition
                  "

                >

                  <BookOpen
                    className="text-cyan-400"
                    size={32}
                  />

                  <h3
                    className="
                    mt-6
                    text-2xl
                    font-black
                    "
                  >

                    {paper}

                  </h3>

                  <p
                    className="
                    mt-5
                    text-gray-400
                    leading-7
                    "
                  >

                    Engineering whitepaper describing
                    architecture, implementation,
                    subsystem integration and design flow.

                  </p>

                  <button
                    className="
                    mt-8
                    px-5
                    py-3
                    rounded-full
                    border
                    border-cyan-400/30
                    text-cyan-400
                    hover:bg-cyan-400/10
                    transition
                    "
                  >

                    Coming Soon

                  </button>

                </motion.div>

              ))}

            </div>

          </section>






          {/* TECHNICAL REPORTS */}

          <section className="mt-32">

            <h2
              className="
              text-4xl
              font-black
              "
            >

              Engineering Reports

            </h2>

            <div
              className="
              grid
              md:grid-cols-2
              gap-8
              mt-12
              "
            >

              {[
                "RTL Development Report",
                "Functional Verification",
                "Simulation Results",
                "FPGA Prototype Validation",
                "Performance Analysis",
                "ASIC Readiness Assessment"
              ].map((report,index)=>(

                <motion.div

                  key={report}

                  initial={{
                    opacity:0,
                    x:index%2===0?-40:40
                  }}

                  whileInView={{
                    opacity:1,
                    x:0
                  }}

                  viewport={{
                    once:true
                  }}

                  className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-7
                  hover:border-cyan-400/40
                  transition
                  "

                >

                  <div
                    className="
                    flex
                    justify-between
                    items-center
                    "
                  >

                    <h3
                      className="
                      text-xl
                      font-bold
                      "
                    >

                      {report}

                    </h3>

                    <span
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-blue-500/20
                      text-blue-300
                      text-xs
                      "
                    >

                      Internal

                    </span>

                  </div>

                  <p
                    className="
                    mt-5
                    text-gray-400
                    "
                  >

                    Detailed engineering documentation
                    generated during the CORETRION™
                    semiconductor development cycle.

                  </p>

                </motion.div>

              ))}

            </div>

          </section>






          {/* RESEARCH TIMELINE */}

          <section className="mt-36">

            <h2
              className="
              text-4xl
              font-black
              text-center
              "
            >

              Research Timeline

            </h2>

            <div
              className="
              relative
              mt-20
              "
            >

              <div
                className="
                absolute
                left-1/2
                top-0
                bottom-0
                w-[2px]
                bg-gradient-to-b
                from-cyan-400
                via-blue-500
                to-green-400
                hidden
                md:block
                "
              />

              {[
                {
                  year:"2025",
                  title:"CHIPSETRON™ Published",
                  text:"ResearchGate Publication"
                },

                {
                  year:"2026",
                  title:"CORETRION™ Processor",
                  text:"Architecture Research"
                },

                {
                  year:"2026",
                  title:"Verification",
                  text:"RTL & FPGA Validation"
                },

                {
                  year:"2027",
                  title:"ASIC Fabrication",
                  text:"Silicon Target"
                }

              ].map((item,index)=>(

                <motion.div

                  key={item.year+item.title}

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

                  className="
                  relative
                  grid
                  md:grid-cols-2
                  gap-10
                  items-center
                  mb-16
                  "

                >

                  <div
                    className={
                      index%2===0
                      ?
                      "md:pr-20"
                      :
                      "md:order-2 md:pl-20"
                    }
                  >

                    <div
                      className="
                      inline-block
                      px-6
                      py-3
                      rounded-full
                      bg-cyan-400/10
                      border
                      border-cyan-400/30
                      text-cyan-400
                      font-black
                      "
                    >

                      {item.year}

                    </div>

                    <h3
                      className="
                      mt-5
                      text-3xl
                      font-black
                      "
                    >

                      {item.title}

                    </h3>

                    <p
                      className="
                      mt-3
                      text-gray-400
                      "
                    >

                      {item.text}

                    </p>

                  </div>

                </motion.div>

              ))}

            </div>

          </section>
                    {/* DOWNLOAD CENTER */}

          <section className="mt-36">

            <motion.div

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              className="
              rounded-3xl
              border
              border-cyan-400/20
              bg-cyan-500/5
              backdrop-blur-xl
              p-10
              "

            >

              <div className="flex items-center gap-3">

                <Download
                  className="text-cyan-400"
                  size={28}
                />

                <h2 className="text-4xl font-black">
                  Download Center
                </h2>

              </div>

              <p
                className="
                mt-5
                text-gray-400
                max-w-3xl
                leading-8
                "
              >

                Download architecture specifications,
                processor documentation, verification reports,
                and future research publications.

              </p>

              <div
                className="
                grid
                md:grid-cols-2
                lg:grid-cols-4
                gap-6
                mt-12
                "
              >

                {[
                  "Architecture Specification",
                  "Instruction Set Manual",
                  "RTL Documentation",
                  "Verification Report"
                ].map((doc) => (

                  <motion.div

                    key={doc}

                    whileHover={{
                      y:-8,
                      scale:1.02
                    }}

                    className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/40
                    p-6
                    text-center
                    "

                  >

                    <FileText
                      className="mx-auto text-cyan-400"
                      size={40}
                    />

                    <h3
                      className="
                      mt-5
                      font-bold
                      "
                    >

                      {doc}

                    </h3>

                    <button
                      className="
                      mt-6
                      px-5
                      py-3
                      rounded-full
                      border
                      border-cyan-400/30
                      text-cyan-400
                      hover:bg-cyan-400/10
                      transition
                      "
                    >

                      Available Soon

                    </button>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </section>





          {/* RESEARCH METRICS */}

          <section className="mt-36">

            <div
              className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-8
              "
            >

              {[
                {
                  value:"01",
                  label:"Published Paper"
                },
                {
                  value:"06",
                  label:"Research Domains"
                },
                {
                  value:"03",
                  label:"Hardware Platforms"
                },
                {
                  value:"2027",
                  label:"ASIC Target"
                }
              ].map((item)=>(

                <motion.div

                  key={item.label}

                  whileHover={{
                    y:-8
                  }}

                  className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  text-center
                  "

                >

                  <h2
                    className="
                    text-5xl
                    font-black
                    text-cyan-400
                    "
                  >

                    {item.value}

                  </h2>

                  <p
                    className="
                    mt-4
                    text-gray-400
                    "
                  >

                    {item.label}

                  </p>

                </motion.div>

              ))}

            </div>

          </section>





          {/* CTA */}

          <section className="mt-40 mb-20">

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
              rounded-[40px]
              border
              border-cyan-400/20
              bg-gradient-to-r
              from-cyan-500/10
              via-blue-500/10
              to-purple-500/10
              backdrop-blur-xl
              p-16
              text-center
              "

            >

              <p
                className="
                uppercase
                tracking-[0.5em]
                text-cyan-400
                font-bold
                "
              >

                CORETRION™ RESEARCH

              </p>

              <h2
                className="
                mt-6
                text-5xl
                md:text-6xl
                font-black
                "
              >

                Advancing Semiconductor Innovation

              </h2>

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

                Explore processor architecture,
                VLSI research,
                semiconductor engineering,
                verification methodologies,
                and future ASIC development
                within the CORETRION™ ecosystem.

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

                <Link

                  href="/documentation"

                  className="
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

                  Documentation

                </Link>

                <Link

                  href="/engineering"

                  className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white/20
                  hover:border-cyan-400
                  transition
                  "

                >

                  Engineering

                </Link>

              </div>

            </motion.div>

          </section>

        </div>

      </section>

      <Footer />

    </main>

  );

}