import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { main } from '@/lib/fonts'

const TechBadge = ({ content, logo}: {content: string, logo: string}) => {
  return (
    
       <Badge className="h-full my-auto relative top-[1px] rounded-[3px] mx-1" variant="outline"> 
            <Image src={logo} width={15} height={15} alt={'tech-logo'}/> 
            <span style={main.style} className='font-normal ml-1'> {content}  </span>
       </Badge>
   
  )
}

export default TechBadge