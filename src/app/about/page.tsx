import { Jobcard } from '@/components/comps/cards'
import React from 'react'

const About = () => {
  return (
   <section className="max-w-screen-xl mx-auto flex pt-10 justify-between px-16">
        <div className="w-[65%] px-6">
            <h1 className="italic text-xl pb-8"> a little bit about nayef </h1>
            <p className="text-neutral-600"> hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello  </p>
           
        </div>



        <div className="flex flex-col space-y-10 fixed w-[350px] left-[65%]">
            <div className="flex flex-col space-y-3">
                <h1 className="italic"> work </h1>
                <Jobcard company="/small-tg-logo.svg" title="Frontend Dev - Infra" link="https://www.techgenies.com"/>
                <Jobcard company="/born-logo.jpg" title="Frontend Developer" link="https://www.borninteractive.com"/>
            </div>
            <div className="flex flex-col space-y-3">
                <h1 className="italic"> work </h1>
                <Jobcard company="/small-tg-logo.svg" title="Frontend Dev - Infra" link="https://www.techgenies.com"/>
                <Jobcard company="/born-logo.jpg" title="Frontend Developer" link="https://www.borninteractive.com"/>
            </div>
        </div>
   </section>
  )
}

export default About