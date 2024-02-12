import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Badge } from '../ui/badge'
import { main } from '@/lib/fonts'

const TechBadge = ({techLink, content}: {techLink: string, content: string}) => {
  return (
    <Link href={techLink}>
       <Badge className="h-full my-auto relative top-[1px] rounded-[3px]" variant="outline"> 
            <Image src="/nextjs.svg" width={15} height={15} alt={'nextjs-logo'}/> 
            <span style={main.style} className='font-normal ml-1'> {content}  </span>
       </Badge>
    </Link>
  )
}

export default TechBadge