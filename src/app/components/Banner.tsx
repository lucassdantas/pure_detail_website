import { Button } from '@/app/components/Button';
import { Section } from '@/app/components/Section'
import { ButtonType } from '@/app/types/ButtonType';
import React from 'react'

type BannerProps =
  | {
      bgImgClass: string;
      title: string;
      hasButton: true;
      button: ButtonType; 
    }
  | {
      bgImgClass: string;
      title: string;
      hasButton: false;
      button?: never; 
    };
    
export const Banner = ({bgImgClass, title, hasButton, button}:BannerProps) => {
  return (
    <Section className={`relative flex justify-center py-24 items-end text-center min-h-[70vh] bannerSection text-white ${bgImgClass}`}>
      <div className={`absolute h-full w-full top-0 left-0 opacity-60 bg-black `}></div>
      <h1 className='relative text-7xl mb-24'>{title}</h1>
      {hasButton &&<Button url={button?.url} text={button?.text} />}
    </Section>
  )
}
