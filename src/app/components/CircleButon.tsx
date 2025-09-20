import { ButtonType } from '@/app/types/ButtonType'
import Link from 'next/link'
import React from 'react'

export const CircleButon = ({text, url, className='' }:ButtonType) => {
  return (
    <Link href={url} className={`p-y px-2 text-center border-2 border-white rounded-full cursor-pointer ${className}`}>
      {text}
    </Link>
  )
}
