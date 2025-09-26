import React, { ReactNode } from 'react'

export const HighLightedText = ({children, className=''}:{children:ReactNode, className?:string}) => {
  return (
    <p className={`italic p-2 border-2 ${className}`}>{children}</p>
  )
}
