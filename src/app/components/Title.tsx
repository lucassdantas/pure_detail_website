import localFont from 'next/font/local';
import React, { ReactNode } from 'react'
const euroStileFont = localFont({
  src: [
    {
      path: '../../fonts/fonnts.com-Eurostile_Extd_Black.otf',
      weight: '900',
      style: 'normal',
    }
  ],
  variable:'--font-eurostile'
})
type TitleProps = {
  tag:string; 
  className?:string;
  hasEuroStileFont?:boolean;
  children:ReactNode
}

export const Title = ({tag, className='', hasEuroStileFont=true, children}:TitleProps) => {
  if(tag === 'h1') return <h1 className={`${className } ${hasEuroStileFont && euroStileFont.className}`}>{children}</h1>
  if(tag === 'h2') return <h2 className={`${className } ${hasEuroStileFont && euroStileFont.className}`}>{children}</h2>
  if(tag === 'h3') return <h3 className={`${className } ${hasEuroStileFont && euroStileFont.className}`}>{children}</h3>
}
