'use client';
import styles from './css/page.module.css'
import { useState } from 'react';
import Project from '@/components/comps/project-list';
import Modal from '@/components/comps/project-modal';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link';
import { time } from 'console';

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </div>
  )
}



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
  const posts = allPosts.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => compareDesc(new Date(a.date), new Date(b.date)))
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
      {/* <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
      {posts.map((post: any, idx: any) => (
        <PostCard key={idx} {...post} />
      ))}
    </div> */}
    </>
  
  )
}
