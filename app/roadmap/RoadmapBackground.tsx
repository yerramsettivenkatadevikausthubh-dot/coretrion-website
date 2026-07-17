"use client";

export default function RoadmapBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#00e5ff22 1px, transparent 1px),
            linear-gradient(90deg,#00e5ff22 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px"
        }}
      />

      {/* Horizontal PCB traces */}
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="absolute h-px bg-cyan-400/10 animate-pulse"
          style={{
            top: `${i * 55}px`,
            left: 0,
            width: "100%",
            animationDelay: `${i * 0.25}s`
          }}
        />
      ))}

      {/* Vertical PCB traces */}
      {[...Array(22)].map((_, i) => (
        <div
          key={i}
          className="absolute w-px bg-cyan-400/10 animate-pulse"
          style={{
            left: `${i * 70}px`,
            top: 0,
            height: "100%",
            animationDelay: `${i * 0.18}s`
          }}
        />
      ))}

      {/* Ambient glow */}
      <div className="absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="absolute right-20 bottom-20 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[150px]" />

    </div>
  );
}