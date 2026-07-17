"use client";

import RoadmapCanvas from "./RoadmapCanvas";
import RoadmapBackground from "./RoadmapBackground";
import StatsPanel from "./StatsPanel";

export default function RoadmapPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <RoadmapBackground />

      <div className="relative z-10">
        <RoadmapCanvas />
      </div>

      <StatsPanel />
    </main>
  );
}