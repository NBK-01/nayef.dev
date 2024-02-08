/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import { main } from '@/lib/fonts'
import { Button } from '@/components/ui/button'
import { Intro } from '@/components/comps/intro'

const Main = () => {
  return (
    <>
      <Intro/>

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

      <div id="contacts" className="pt-96 pb-44 my-96 relative top-96">
      <h1 className="text-neutral-700 text-6xl">
          projects
        </h1>
        <p> the animation blocks . seperate component </p>
      </div>
    </>
  )
}

export default Main