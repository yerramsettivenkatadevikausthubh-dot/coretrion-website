import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ArchitectureExplorer from "@/components/architecture/ArchitectureExplorer";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="pt-36 pb-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-7xl font-black">
            Technology
          </h1>

          <p className="mt-6 text-zinc-400 max-w-3xl text-xl">
            CORETRION™ is a heterogeneous hybrid-compute architecture
            combining CPU, SIMD, Tensor Processing, GPU acceleration,
            intelligent memory systems and hardware security into a
            unified semiconductor platform.
          </p>

        </div>

      </section>

      <ArchitectureExplorer />

      <Footer />

    </main>
  );
}