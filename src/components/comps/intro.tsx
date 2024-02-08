/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react'
import { ArrowLink } from './links';

export const Intro = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('contacts');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <>
        <div className="pb-20 pt-10">
        <h1 className="animate-text-gradient bg-gradient-to-r from-emerald-800 via-emerald-900 to-emerald-600 bg-[200%_auto] bg-clip-text text-4xl text-transparent mb-5 h-full"> 
            main title and  introduction two or three navigation animations
        </h1>
        
        <a onClick={() => handleClickScroll()}>
            <ArrowLink name="connect"/>
        </a>


       
    
      </div>
        <div className="pb-24 flex flex-col space-y-12">
            <p className=" text-neutral-400 text-lg font-light"> 
                longer parapgraph - about description. tools. what i'm doing now more personal maybe text shiny hover aswell
            </p>
            <p className=" text-neutral-400 text-lg font-light"> 
                 what i'm doing now and what i'm using and and what the plan is with small badges and what the plan is with small badges lan is with
            </p>
        </div>
   </>
    )
}