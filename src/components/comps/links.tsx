"use client"

import { ArrowUpIcon } from '@radix-ui/react-icons'
import React from 'react'
import { Button } from '@/components/ui/button'

export const NavLinks = ({name}: any) => {
    return(
        <button role="link" className="relative after:absolute after:bottom-2 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-500 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100">  
            {name}  
        </button>
    )
}

export const ArrowLink = ({name}: any) => {
    return (
        <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-transparent  text-neutral-800 duration-500 font-medium underline underline-offset-2">
        <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0"> {name} </div>
        <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
          <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            </path>
            </svg>
          </div>
      </button>
    )
}

export const BackToTop = () => {
    const handleClickScroll = () => {
        const element = document.getElementById('top');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <Button className="fixed bottom-14 right-20 rounded-lg" variant="secondary" size="icon" onClick={() => handleClickScroll()}>
            <ArrowUpIcon className="h-6 w-6"/>
        </Button>
    )
}