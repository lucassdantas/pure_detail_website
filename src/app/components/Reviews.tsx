import { ReviewType } from '@/app/types/ReviewType'
import React from 'react'

export const Reviews = ({text, author, id}:ReviewType) => {
  return (
    <div>
      <p>{text}</p>
      <span>{author}</span>
    </div>
  )
}
