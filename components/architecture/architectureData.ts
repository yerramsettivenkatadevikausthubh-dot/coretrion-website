export const architectureData = [
  {
    title: "CPU Core",

    short: "32-bit Hybrid Scalar Processing",

    image: "/images/coretrion_overall.png",

    description:
      "CORETRION™ CPU executes scalar instructions while coordinating SIMD, Tensor and GPU accelerators through the custom execution fabric.",

    specifications: [
      "32-bit Hybrid Architecture",
      "Custom Instruction Set",
      "5-Stage Pipeline",
      "Branch Prediction",
      "Hazard Detection",
      "Interrupt Support"
    ],

    applications: [
      "Embedded AI",
      "Industrial Control",
      "Automation",
      "Edge Computing"
    ]
  },

  {
    title: "SIMD Engine",

    short: "Parallel Vector Processing",

    image: "/images/coretrion_datapath.png",

    description:
      "Vector engine capable of processing multiple data elements simultaneously for DSP, multimedia and AI workloads.",

    specifications: [
      "Vector Arithmetic",
      "Parallel Execution",
      "Low Latency",
      "Custom SIMD Instructions"
    ],

    applications: [
      "Image Processing",
      "Signal Processing",
      "Robotics",
      "Computer Vision"
    ]
  },

  {
    title: "Tensor Accelerator",

    short: "Matrix Processing Engine",

    image: "/images/tensor-engine.png",

    description:
      "Dedicated tensor hardware accelerates neural-network inference and matrix multiplication workloads.",

    specifications: [
      "Matrix Multiplication",
      "MAC Arrays",
      "AI Acceleration",
      "Optimized Memory Access"
    ],

    applications: [
      "TinyML",
      "Neural Networks",
      "AI Vision",
      "Inference"
    ]
  },

  {
    title: "GPU",

    short: "Massively Parallel Compute",

    image: "/images/gpu_architecture.png",

    description:
      "Integrated GPU subsystem designed for graphics, compute kernels and massively parallel execution.",

    specifications: [
      "Warp Scheduler",
      "GPU Core",
      "Parallel Threads",
      "Compute Kernels"
    ],

    applications: [
      "Graphics",
      "GPGPU",
      "AI",
      "Scientific Computing"
    ]
  },

  {
    title: "Memory System",

    short: "High Performance Cache Hierarchy",

    image: "/images/memory-system.png",

    description:
      "Instruction cache, data cache and shared memory architecture minimize latency while maximizing throughput.",

    specifications: [
      "Instruction Cache",
      "Data Cache",
      "Shared Memory",
      "Memory Controller"
    ],

    applications: [
      "High Throughput",
      "Embedded Systems",
      "Real-Time Processing"
    ]
  },

  {
    title: "Security",

    short: "Hardware Security Layer",

    image: "/images/security.png",

    description:
      "Integrated hardware security provides encryption, secure boot and protected execution.",

    specifications: [
      "AES Engine",
      "Secure Boot",
      "Privilege Levels",
      "Protected Execution"
    ],

    applications: [
      "Secure IoT",
      "Industrial Security",
      "Critical Systems"
    ]
  },

  {
    title: "Custom ISA",

    short: "CORETRION™ Instruction Set",

    image: "/images/ISA.png",

    description:
      "Custom instruction architecture supporting scalar, SIMD, Tensor, GPU and system instructions through a unified execution model.",

    specifications: [
      "Scalar Instructions",
      "SIMD Instructions",
      "Tensor Instructions",
      "GPU Instructions",
      "System Calls"
    ],

    applications: [
      "Embedded Computing",
      "AI",
      "Automation",
      "Research"
    ]
  }
];