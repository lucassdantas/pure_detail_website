import { ReviewType } from '@/app/types/ReviewType'
import React from 'react'

export const Reviews = ({text, author, id}:ReviewType) => {
  return (
    <div className='text-center text-3xl px-4'>
      <p className='mb-8'>{text}</p>
      <span>{author}</span>
    </div>
  )
}
  