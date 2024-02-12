import React from 'react'
import { Intro } from '@/components/comps/intro'
import ProjectGrid from '@/components/comps/projectGrid'
import {ProjectList} from '@/components/comps/projectList'
import { Separator } from '@/components/ui/separator';

export const projects = [
  {
    title: "readme generator",
    link: "https://github.com/NBK-01/ReadeMe-Generator",
    sub: "cli-based nodejs readme file generator",
  },
  {
    title: "bookworm haven",
    link: "https://github.com/NBK-01/Bookworm-Haven",
    sub:
      "an platform where you can discuss, review, and search for novels",
  },
  {
    title: "prbly v1",
    link: "https://github.com/Probably-xyz/Prbly-Alpha",
    sub: "first design & dev of prbly.xyz",
  },
  {
    title: "mirathi v1",
    link: "https://mirathi-v2-8u7c4dawg-nbk-01.vercel.app/",
    sub: "first design and dev of mirathi.io",
  },
  {
    title: "trail finder",
    link: "https://jyothybaby.github.io/Trail-Finder/",
    sub:
      "search for hiking trails within a selected radius relevant to your location ",
  },
  {
    title: "employee manager sys",
    link: "https://github.com/NBK-01/Employee-Management-System",
    sub:
      "a terminal based CMS app which runs using mainly Inquirer and SQL",
  },
];


const Main = () => {
  return (
    <>
      <Intro/>

      <div className="pb-14 flex flex-col">
        <h1 className="text-neutral-700 text-2xl ml-2">
        <span className="text-emerald-700 text-base"> (recent) </span> projects
        </h1>
        <ProjectGrid/>
      </div>

      <div className="pb-28 flex flex-col">
          <h1 className="text-neutral-700 text-2xl ml-2">
            <span className="text-emerald-700 text-base"> (more) </span> projects 
          </h1>
          <ProjectList items={projects}/>
      </div>

    <Separator/>
    </>
  )
}

export default Main