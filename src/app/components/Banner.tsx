import { Button } from '@/app/components/Button';
import { Section } from '@/app/components/Section'
import { Title } from '@/app/components/Title';
import { ButtonType } from '@/app/types/ButtonType';
import localFont from 'next/font/local';
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
      <Title tag='h1' className={`uppercase font-black relative lg:text-7xl text-4xl mb-24 `}>{title}</Title>
      {hasButton &&<Button url={button?.url} text={button?.text} />}
    </Section>
  )
}
