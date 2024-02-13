/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react'
import { ArrowLink } from './links';
import { main } from '@/lib/fonts';
import TechBadge from './badges';
import Link from 'next/link';

export const Intro = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('contacts');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
      <>
        <div className="pb-10 pt-14">
          <h1 style={main.style} className="text-3xl text-neutral-600 font-light mb-5 h-full"> 
              nayef kanaan - fullstack developer
              <br/> <span className="text-xl" > designing & building products </span>
          </h1>
          <a onClick={() => handleClickScroll()}>
              <ArrowLink name="connect"/>
          </a>
        </div>

       
         
          <div className="hidden space-x-3 sm:flex">
                <TechBadge content="Nextjs" logo="/nextjs.svg"/> 
                <TechBadge content="React" logo="/react.svg"/>
                <TechBadge content="Postgresql" logo="/postgresql.svg"/> 
                <TechBadge content="Tailwind" logo="/tailwind.svg"/>
                <TechBadge content="Typescript" logo="/typescript.svg"/> 
          </div>
        
          <div className="flex flex-col sm:hidden space-y-4">
              <div className="flex space-x-3">
                <TechBadge content="Nextjs" logo="/nextjs.svg"/> 
                <TechBadge content="React" logo="/react.svg"/>
                <TechBadge content="Postgresql" logo="/postgresql.svg"/> 
              </div>
              <div className="flex space-x-3">
                <TechBadge content="Tailwind" logo="/tailwind.svg"/>
                <TechBadge content="Typescript" logo="/typescript.svg"/> 
              </div>
          </div>

        <div className="py-24 flex flex-col space-y-12">
            <span className=" text-neutral-400 text-base font-light"> 
                 ive been desiging and building websites for three years now. working freelance, learning, and founding my own projects.
                 also working at <Link href="https://techgenies.com" className="text-emerald-700 underline underline-offset-4">techgenies</Link> as a frontend dev in the infrastructure department as well as <Link href="https://borninteractive.com" className="text-emerald-700 underline underline-offset-4">born interactive</Link> as a frontend intern
                
            </span>
            <span className="text-neutral-400 text-base font-light"> 
                today - my main focus is working more on open source, learning more, writing, and building products for the community such as <Link href="https://prbly.xyz" className="text-emerald-700 underline underline-offset-4">prbly</Link>
            </span>
        </div>
      </>
    )
}

