import { ButtonType } from '@/app/types/ButtonType'
import Link from 'next/link'
import React from 'react'

export const Button = ({text, url, className = ''}:ButtonType) => {
  return (
    <Link href={url} className={`relative p-y px-2 text-center border-2 border-white ${className}`}>
      {text}
    </Link>
  )
}
