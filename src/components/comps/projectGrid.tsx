"use client"

import React from 'react'
import { HoverEffect } from '../ui/card-hover';

export const projects = [
    {
      title: "prbly",
      description:
        "founded, designed, and developed prbly. a platform for founders to connect with investors",
      linkOne: "https://prbly.xyz",
      linkTwo: ""
    },
    {
      title: "mirathi",
      description:
        "redesign -- landing page built with framer-motion, gsap, nextjs & tailwind",
      linkOne: "https://mirathi.co",
      linkTwo: "",
  },
    {
        title: "prbly (beta)",
        description:
          "invite-only startup gallery - first version of prbly designed & developed",
        linkOne: "",
        linkTwo: "https://github.com/Probably-xyz/gallery",
    },
    {
        title: "disruptor ventures",
        description:
          "marketing landing page built with gsap, threejs, html, css, js, & parcel",
        linkOne: "https://disruptor.ventures",
        linkTwo: "",
    },
    {
        title: "orsus (wip)",
        description:
          "an easy-to-use admin template repo built with nextjs14, tailwind, nextui, & kinde",
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