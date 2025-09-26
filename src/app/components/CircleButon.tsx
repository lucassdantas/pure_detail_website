import { ButtonType } from '@/app/types/ButtonType'
import Link from 'next/link'
import React from 'react'

export const CircleButon = ({text, url, className='' }:ButtonType) => {
  return (
    <Link href={url} className={`py-2 px-2 text-center outline-2 outline-white rounded-full cursor-pointer text-2xl font-medium  hover:outline-accent-yellow lg:min-w-[240px] transition-colors ${className}`}>
      {text}
    </Link>
  )
}
