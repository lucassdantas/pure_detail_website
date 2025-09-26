import { ButtonType } from '@/app/types/ButtonType'
import Link from 'next/link'
import React from 'react'

export const Button = ({text, url, className = ''}:ButtonType) => {
  return (
    <Link href={url} className={`relative py-1 px-2 text-center text-xl border-2 font-bold border-white cursor-pointer hover:text-2xl transition-all ${className}`}>
      {text}
    </Link>
  )
}
