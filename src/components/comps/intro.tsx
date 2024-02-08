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
        <div className="pb-24 pt-10">
        <h1 className="text-neutral-700 text-4xl mb-5"> 
            main title <span className="underline font-medium cursor-pointer"> introduction</span> <br/> and two or three navigation animations
        </h1>
        
        <a onClick={() => handleClickScroll()}>
            <ArrowLink name="connect"/>
        </a>
    
      </div>
    )
}