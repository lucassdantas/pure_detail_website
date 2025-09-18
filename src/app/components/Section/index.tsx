import { Limiter } from '@/app/components/Limiter';
import React, { ReactNode } from 'react'

type SectionProps = {
  children:ReactNode, 
  className?:string,
  limiterClassname?:string,
  id?:string;
}
export const Section = ({children, className='', limiterClassname='', id=''}:SectionProps) => {
  return (
  <section className={`${className}`} id={id}>
    <Limiter className={`xl:px-0 px-6 ${limiterClassname}`}>
      {children}
    </Limiter>
  </section>
  )
}
