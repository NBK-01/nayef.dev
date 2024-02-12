"use client"

import React from 'react'
import { HoverEffect } from '../ui/card-hover';

export const projects = [
    {
      title: "prbly",
      description:
        "founded, designed, and developed prbly.",
      linkOne: "https://prbly.xyz",
      linkTwo: ""
    },
    {
      title: "mirathi",
      description:
        "landing page built with framer-motion, gsap & nextjs",
      linkOne: "https://mirathi.co",
      linkTwo: "",
    },
    {
        title: "prbly (beta)",
        description:
          "first version of prbly designed & developed",
        linkOne: "",
        linkTwo: "https://github.com/Probably-xyz/gallery",
    },
    {
        title: "disruptor ventures",
        description:
          "landing page built with gsap, threejs, js",
        linkOne: "https://disruptor.ventures",
        linkTwo: "",
    },
    {
        title: "orsus (wip)",
        description:
          "nextjs, tailwind & kinde admin template",
        linkOne: "",
        linkTwo: "",
    },
    
  ];

const ProjectGrid = () => {
  return (
    <div className="">
      <HoverEffect items={projects} />
    </div>
  )
}

export default ProjectGrid