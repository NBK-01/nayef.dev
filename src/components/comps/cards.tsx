import { ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import React from 'react'
import Image from 'next/image'

export const Jobcard = ({title, link, company}: any) => {
  return (
    <div className="group">
    <a
      href={link}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-1 w-full"
    >
      <div className="flex my-auto space-x-3">
        <Image width={40} height={40} src={company} alt={'company-logo'} className="rounded-full  border-black my-auto justify-center items-center" /> 
        <h1 className="font-[450] text-sm text-neutral-900 dark:text-neutral-100 items-center my-auto">
         {title} 
        </h1>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:rotate-45">
        <ArrowRightIcon/>
      </div>
   </a>
  </div>
  )
}

export const SpotifyCard = ({title, link, company}: any) => {
  return (
    <div className="group">
    <a
      href={link}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-1 w-full"
    >
      <div className="flex my-auto space-x-3">
        <Image width={50} height={50} src={company} alt={'company-logo'} className="rounded-full  border-black my-auto justify-center items-center" /> 
        <h1 className="font-[450] text-sm text-neutral-900 dark:text-neutral-100 items-center my-auto">
         {title} 
        </h1>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
        <ArrowTopRightIcon/>
      </div>
   </a>
  </div>
  )
}

export const Bookcard = ({title, link, book}: any) => {
  return (
    <div className="group">
    <a
      href={link}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-1 w-full"
    >
      <div className="flex my-auto space-x-3">
        <Image width={40} height={40} src={book} alt={'company-logo'} className="border-black my-auto justify-center items-center" /> 
        <h1 className="font-[450] text-sm text-neutral-900 dark:text-neutral-100 items-center my-auto">
         {title} 
        </h1>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:rotate-45">
        <ArrowRightIcon/>
      </div>
   </a>
  </div>
  )
}