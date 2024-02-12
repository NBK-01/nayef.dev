/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react'
import { ArrowLink } from './links';
import { main } from '@/lib/fonts';
import TechBadge from './badges';

export const Intro = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('contacts');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <>
        <div className="pb-24 pt-14">
        <h1 style={main.style} className="animate-text-gradient bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-700 bg-[200%_auto] bg-clip-text text-3xl text-transparent mb-5 h-full"> 
            nayef kanaan - fullstack developer
            <br/> <span className="text-xl" > designing & building products </span>
        </h1>
        
        <a onClick={() => handleClickScroll()}>
            <ArrowLink name="connect"/>
        </a>


       
    
      </div>
        <div className="pb-24 flex flex-col space-y-12">
            <span className=" text-neutral-400 text-base font-light"> 
                 what i'm doing now and <TechBadge techLink='https://nextjs.org' content="Nextjs"/> what i'm using and and what the plan is with small badges and what the plan is with small badges lan is with 
            </span>
            <span className=" text-neutral-400 text-base font-light"> 
                longer parapgraph - about description. tools. what i'm doing now more personal maybe text shiny hover aswell
            </span>
        </div>
   </>
    )
}