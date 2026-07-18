"use client";

import Link from "next/link";

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">
          CORETRION Documentation
        </h1>

        <p className="text-gray-400 mb-12">
          Technical documentation for the CORETRION™ processor architecture,
          CORELINK™ interconnect fabric, and CHIPSETRON™ controller.
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          <Link
            href="/documentation/isa"
            className="rounded-xl border border-gray-700 p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Processor ISA
            </h2>
            <p className="text-gray-400">
              Instruction set architecture and opcode reference.
            </p>
          </Link>

          <Link
            href="/documentation/architecture"
            className="rounded-xl border border-gray-700 p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Architecture
            </h2>
            <p className="text-gray-400">
              Pipeline, execution units and system architecture.
            </p>
          </Link>

          <Link
            href="/documentation/rtl"
            className="rounded-xl border border-gray-700 p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              RTL Documentation
            </h2>
            <p className="text-gray-400">
              Verilog modules and implementation details.
            </p>
          </Link>

          <Link
            href="/documentation/verification"
            className="rounded-xl border border-gray-700 p-6 hover:border-cyan-400 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              Verification
            </h2>
            <p className="text-gray-400">
              Testbenches, reports and simulation results.
            </p>
          </Link>

        </div>
      </div>
    </main>
  );
}