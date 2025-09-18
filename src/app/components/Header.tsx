import { Limiter } from '@/app/components/Limiter'
import Link from 'next/link'
import React from 'react'
import { BsInstagram, BsTiktok } from 'react-icons/bs'

export const Header = () => {
  return (
    <header className='flex justify-center py-2'>
      <Limiter className='flex justify-between'>
        <nav>
          <ul className='flex justify-between w-1/4 gap-4'>
            <Link href='/home'>
              <li>Home</li>
            </Link>
            <Link href='/services'>
              <li>Services</li>
            </Link>
          </ul>
        </nav>
        <img src='' alt='pure detail logo'/>
        <nav>
          <ul className='flex justify-between w-1/4'>
            <Link href='/book'>
              <li>Book</li>
            </Link>
          </ul>
        </nav>
        <ul className='flex justify-between gap-4'>
          <BsInstagram/>
          <BsTiktok/>
        </ul>
      </Limiter>
    </header>
    
  )
}
