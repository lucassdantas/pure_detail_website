import { ButtonType } from '@/app/types/ButtonType'
import Link from 'next/link'
import React from 'react'

export const CircleButon = ({text, url, className='' }:ButtonType) => {
  return (
    <Link href={url} className={`py-2 px-4 text-center border-2 border-white rounded-full cursor-pointer ${className}`}>
      {text}
    </Link>
  )
}
