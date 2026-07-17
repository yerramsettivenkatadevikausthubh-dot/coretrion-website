"use client";

import { useState } from "react";
import Image from "next/image";
import { architectureData } from "./architectureData";
import BlockCard from "./BlockCard";
import DetailPanel from "./DetailPanel";

export default function ArchitectureExplorer() {
  const [active, setActive] = useState(architectureData[0]);

  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white">
            CORETRION™ Architecture
          </h2>

          <p className="mt-6 text-zinc-400 text-lg max-w-3xl mx-auto">
            Explore the complete hybrid compute architecture powering
            CORETRION™, including CPU, SIMD, Tensor, GPU, Memory,
            Security and the custom instruction set.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">

          <div className="lg:col-span-4 space-y-4">

            {architectureData.map((item) => (

              <BlockCard
                key={item.title}
                title={item.title}
                description={item.short}
                active={item.title === active.title}
                onClick={() => setActive(item)}
              />

            ))}

          </div>

          <div className="lg:col-span-8">

            <div className="rounded-3xl border border-cyan-500/20 bg-zinc-900/50 backdrop-blur-xl overflow-hidden">

              <div className="relative aspect-video">

                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-contain p-8"
                />

              </div>

              <DetailPanel item={active} />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}