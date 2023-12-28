'use client';
import React from 'react'
import styles from '../../app/css/style.module.css';
import Link from 'next/link';

interface project {
    index: any,
    title: string,
    setModal: any,
    desc: string,
    url: string,
}

export default function Project ({index, title, setModal, desc, url}: project) {
    return (
       
        <div  onClick={() => window.open(url)} onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
                 <h2>{title}</h2>
                 <p>{desc}</p>
         </div>
        
    )
}