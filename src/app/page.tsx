'use client';
import styles from './css/page.module.css'
import { useState } from 'react';
import Project from '@/components/comps/project-list';
import Modal from '@/components/comps/project-modal';

const projects = [
  {
    title: "Probably Xyz",
    src: "Prbly-Land.png",
    color: "#5D31FF"
  },
  {
    title: "Mirathi",
    src: "Mirathi-Land.png",
    color: "#3CB997"
  },
  {
    title: "Kiwii",
    src: "Kiwii-Land.png",
    color: "#16A34A"
  },
  {
    title: "Disruptor Ventures",
    src: "DV-Land.png",
    color: "#4F7942"
  }
]

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})

  return (
  <main className={styles.main}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} setModal={setModal} key={index}/>
        })
      }
    </div>
    <Modal modal={modal} projects={projects}/>
  </main>
  )
}
