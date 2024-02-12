/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import { NavLinks } from "../comps/links";


function copyFunc() {
  navigator.clipboard.writeText("nbk01.dev@gmail.com");

  toast.success("Email copied to clipboard");
}


export const Nav = () => {
  return (
      <header className="max-w-screen-md flex mx-auto justify-between pt-24 pb-14">
        <div className="flex space-x-3">
          <Link href="/" className="text-neutral-600 italic">
            <NavLinks name="nayef.dev"/>
          </Link>
          <span className="text-neutral-400"> / </span>
          <Link href="" className="text-neutral-500 italic">
            <NavLinks name="projects"/>
          </Link>  
        </div>

        <div className="space-x-4">
          <Link href="/posts/post-01.md" className="text-neutral-500 italic">
            <NavLinks name="this"/>
          </Link>
          <Link href="" className="text-neutral-500 italic">
            <NavLinks name="tools"/>
          </Link>
        </div>
    </header>
  )
}


export const ContactFooter = () => {
  return (
    <footer className='max-w-screen-md flex mx-auto justify-between py-10 border-neutral-600'>
       <div className="flex space-x-3">
          <Link href="/" className="text-neutral-500 italic">
            <NavLinks name="github"/>
          </Link>
          <span className="text-neutral-400"> / </span>
          <Link href="/" className="text-neutral-500 italic">
            <NavLinks name="linkedin"/>
          </Link>
          <span className="text-neutral-400"> / </span>
          
          <Link href="" className="text-neutral-500 italic">
            <NavLinks name="X"/>
          </Link>  
        </div>

        <div className="space-x-4">
         
          <a onClick={() => copyFunc()} className="text-neutral-500 italic cursor-pointer">
            <NavLinks name="email"/>
          </a>
          <Link href="/" className="text-neutral-500 italic">
            <NavLinks name="resume"/>
          </Link>
          <Link href="https://cal.com/excelsior" className="text-neutral-500 italic">
            <NavLinks name="book call"/>
          </Link>
          
        </div>
    </footer>
  )
}
