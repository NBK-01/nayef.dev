import { main } from '@/lib/fonts'
import React from 'react'
import Link from "next/link"
import { ExternalLink, ExternalLinkTwo } from './links'

export const ProjectList = ({
  items,
}: {
  items: {
    title: string;
    sub: string;
    link: string;
  }[];
}) => {
  return (
    <div className='flex flex-col space-y-10 ml-2 mt-12'>
         {items.map((item, idx) => (
        <ProjectListItem title={item?.title} sub={item?.sub} link={item?.link} key={item?.title}/>
        ))}
    </div>
   
  )
}

const ProjectListItem = ({title, sub, link}: {title: string, sub: string, link: string}) => {
   return (
    <div className="flex justify-between">
      <div className='flex flex-col space-y-1'>
        <h1 className="text-neutral-600 underline underline-offset-[6px] text-lg font-normal mb-2" style={main.style}> {title} </h1>
        <p className="text-neutral-400 text-sm"> {sub} </p>
      </div>
      <Link className="text-neutral-500 h-0 my-auto" target="_blank" href={link}>
        <ExternalLinkTwo name="source"/>
      </Link> 
    </div>
   )
}
