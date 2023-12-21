'use client';
import styles from './css/page.module.css'
import { useState } from 'react';
import Project from '@/components/comps/project-list';
import Modal from '@/components/comps/project-modal';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Link from 'next/link';




const projects = [
  {
    title: "Probably Xyz",
    src: "Prbly-Land.png",
    color: "#5D31FF",
    desc: "Founded: Design and Development",
    url: "https://www.prbly.xyz" 
  },
  {
    title: "Mirathi",
    src: "Mirathi-Land.png",
    color: "#3CB997",
    desc: "Design & Development",
    url: "https://www.mirathi.io" 
  },
  {
    title: "Kiwii",
    src: "Kiwii-Land.png",
    color: "#16A34A",
    desc: "Solo Founder",
    url: "https://www.kiwii.app" 
  },
  {
    title: "Disruptor Ventures",
    src: "DV-Land.png",
    color: "#4F7942",
    desc: "Design and Development",
    url: "https://www.disruptor.ventures" 
  }
]


export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  
  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          {
            projects.map( (project, index) => {
              return <Project index={index} title={project.title} url={project.url as string} desc={project.desc} setModal={setModal} key={index}/>
            })
          }
        </div>
   
        <Modal modal={modal} projects={projects}/>
     
      </main>
      
    </>
  
  )
}
