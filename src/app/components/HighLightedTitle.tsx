import { Title } from '@/app/components/Title'
import React from 'react'

export const HighLightedTitle = ({text, className=''}:{text:string, className?:string}) => {
  return (
    <div className={`w-[100%] flex items-center justify-center my-12 ${className}`}>
      <Title tag='h2' className='relative uppercase text-center outline-4 p-2 w-fit font-bold text-4xl'>{text}</Title>
    </div>
  )
}
