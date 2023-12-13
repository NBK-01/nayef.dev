'use client';
import React from 'react'
import styles from '../../app/css/style.module.css';

interface project {
    index: any,
    title: any
    setModal: any
}

export default function Project ({index, title, setModal}: project) {
    return (
        <div onMouseEnter={() => {setModal({active: true, index})}} onMouseLeave={() => {setModal({active: false, index})}} className={styles.project}>
            <h2>{title}</h2>
            <p>Design & Development</p>
        </div>
    )
}