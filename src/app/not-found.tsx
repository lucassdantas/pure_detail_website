import { Banner } from '@/app/components/Banner'
import { Button } from '@/app/components/Button'
import { Section } from '@/app/components/Section'
import { Title } from '@/app/components/Title'
import React from 'react'

export default function NotFound() {
  return (
          <Section className={`relative flex justify-center  items-center text-center min-h-[90vh] bannerSection text-white homeBanner  `}>
            <div className={`absolute h-full w-full top-0 left-0 opacity-60 bg-black `}></div>
            <p className='relative text-2xl '>404</p>
            <Title tag='h1' className={`uppercase font-black relative lg:text-6xl text-4xl -tracking-wider `}>Page not found</Title>
            <p className='relative mt-4 mb-8'>Sorry, the page you’re looking for doesn’t exist or has been moved.</p>
            <Button url={'/'} text={'Back to home'} textSize='lg:text-4xl text-2xl' className='hover:border-accent-yellow px-6'/>
          </Section>
  )
}
