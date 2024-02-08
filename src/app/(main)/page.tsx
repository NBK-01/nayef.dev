/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { main } from '@/lib/fonts'
import { Button } from '@/components/ui/button'

const Main = () => {
  return (
    <>
      <div className="pb-24 pt-10">
        <h1 className="text-neutral-700 text-4xl mb-5"> 
            main title <span className="underline font-medium cursor-pointer"> introduction</span> <br/> and two or three navigation animations
        </h1>
        <a href="#contacts">
          <button className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-md bg-transparent  text-neutral-800 duration-500 font-medium underline underline-offset-2">
            <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0"> connect </div>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
                </svg>
              </div>
          </button>
        </a>
      </div>

      <div className="pb-8">
        <p className=" text-neutral-400 text-2xl font-light"> 
            longer parapgraph - about description. tools. what i'm doing now and what i'm using and what the plan is with small badges and icons. a bit longer. more personal maybe text shiny hover aswell
        </p>
      </div>

      <div className="pb-12 flex flex-col">
        <h1 className="text-neutral-700 text-2xl">
          projects
        </h1>
        <p> the animation blocks . seperate component </p>
      </div>

      <div className="contacts flex pt-96 mt-96" id='contacts'>
          <h1> hello heloo </h1>
      </div>
    </>
  )
}

export default Main