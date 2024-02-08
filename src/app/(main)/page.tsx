import React from 'react'
import { Intro } from '@/components/comps/intro'
import ProjectGrid from '@/components/comps/projectGrid'

const Main = () => {
  return (
    <>
      <Intro/>

      <div className="pb-12 flex flex-col">
        <h1 className="text-neutral-700 text-4xl">
          work
        </h1>
        <ProjectGrid/>
      </div>

      <div id="contacts" className="pt-96 pb-44 my-96 relative top-96">
      <h1 className="text-neutral-700 text-6xl">
          projects
        </h1>
        
      </div>
    </>
  )
}

export default Main