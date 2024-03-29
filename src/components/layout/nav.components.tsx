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

function soon() {
  toast.warning("Coming soon");
}

export const Nav = () => {
  return (
    <header className="sm:max-w-screen-md max-w-[400px] flex mx-auto justify-between pt-24 pb-14 lg:px-0 px-8">
      <div className="flex space-x-3">
        <Link href="/" className="text-neutral-600 italic">
          <NavLinks name="nayef.dev" />
        </Link>
        <span className="text-neutral-400"> / </span>
        <a onClick={() => soon()} className="text-neutral-500 italic">
          <NavLinks name="projects" />
        </a>
      </div>

      <div className="space-x-4">
        <Link href="https://github.com/NBK-01/nayef.dev" className="text-neutral-500 italic">
          <NavLinks name="this" />
        </Link>
        {/* <a className="text-neutral-500 italic">
          <NavLinks name="tools" />
        </a> */}
      </div>
    </header>
  );
};

export const ContactFooter = () => {
  return (
    <footer className="sm:max-w-screen-md max-w-[400px] px-8 lg:px-0 flex sm:flex-row flex-col sm:space-y-0 space-y-3 mx-auto justify-between py-10 border-neutral-600">
      <div className="flex space-x-3">
        <Link
          href="https://github.com/NBK-01"
          target="_blank"
          className="text-neutral-500 italic"
        >
          <NavLinks name="github" />
        </Link>

        <span className="text-neutral-400"> / </span>

        <Link
          href="https://www.linkedin.com/in/nayef-kanaan-4aa1b1183/"
          target="_blank"
          className="text-neutral-500 italic"
        >
          <NavLinks name="linkedin" />
        </Link>

        <span className="text-neutral-400"> / </span>

        <Link
          href="https://twitter.com/NBK_dev"
          target="_blank"
          className="text-neutral-500 italic"
        >
          <NavLinks name="X" />
        </Link>
      </div>

      <div className="space-x-4">
        <a
          onClick={() => copyFunc()}
          className="text-neutral-500 italic cursor-pointer"
        >
          <NavLinks name="email" />
        </a>
        {/* todo */}
        <a href="/resume.pdf" type="file" className="text-neutral-500 italic">
          <NavLinks name="resume" />
        </a>
        <Link
          href="https://cal.com/excelsior"
          target="_blank"
          className="text-neutral-500 italic"
        >
          <NavLinks name="book call" />
        </Link>
      </div>
    </footer>
  );
};
