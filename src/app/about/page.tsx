/* eslint-disable react/no-unescaped-entities */
import { Bookcard, Jobcard } from '@/components/comps/cards'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
   <section className="max-w-screen-xl mx-auto flex pt-10 justify-between px-16">
        <div className="w-[65%] px-6 space-y-9">
            <h1 className="italic text-xl"> a little bit about me </h1>

            <p className="text-neutral-600"> i'm a frontend a focused fullstack developer currently focused on open-source and contributing to the community. i'm working on projects like <Link href="https://prbly.xyz" className="text-green-700 italic underline"> prbly </Link>, <Link href="https://kiwii.app" className="text-green-700 italic underline"> kiwii </Link>, and much more coming on the way </p>

            <p className="text-neutral-600"> over the past couple years i've built landing pages for clients and startups and worked on my own products and applications; while also dipping my toes in creative coding, pure frontend, and open source. i mainly build fullstack apps now with <Link href="https://github.com/vercel/next.js" className="text-green-700 italic underline"> nextjs </Link> , <Link href="https://github.com/facebook/react" className="text-green-700 italic underline"> react </Link> ,  <Link href="https://tailwindcss.com/" className="text-green-700 italic underline"> tailwind </Link>, and <Link href="https://github.com/vercel" className="text-green-700 italic underline"> vercel </Link> </p>
        </div>



        <div className="flex flex-col space-y-10 fixed w-[350px] left-[65%]">
            <div className="flex flex-col space-y-3">
                <h1 className="italic"> work </h1>
                <Jobcard company="/small-tg-logo.svg" title="Frontend Dev - Infra" link="https://www.techgenies.com"/>
                <Jobcard company="/born-logo.jpg" title="Frontend Developer" link="https://www.borninteractive.com"/>
            </div>
            <div className="flex flex-col space-y-3">
                <h1 className="italic"> currently... </h1>
                <Bookcard title={"Kalara and the sun"} book={'/klara.jpeg'} link={""} />
            </div>
        </div>
   </section>
  )
}

export default About