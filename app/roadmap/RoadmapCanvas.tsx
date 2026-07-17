"use client";

import { roadmap } from "./roadmapData";

import RoadmapNode from "./RoadmapNode";

import AnimatedTrace from "./AnimatedTrace";

import Packet from "./Packet";

export default function RoadmapCanvas() {

  return (

    <div className="relative w-full h-[700px]">

      <AnimatedTrace />

      <Packet delay={0} />
      <Packet delay={1} />
      <Packet delay={2} />
      <Packet delay={3} />

      {roadmap.map((item) => (

        <RoadmapNode

          key={item.id}

          title={item.title}

          status={item.status}

          progress={item.progress}

          image={item.image}

          description={item.description}

          x={item.x}

          y={item.y}

        />

      ))}

    </div>

  );

}