'use client'
import { Limiter } from '@/app/components/Limiter'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsInstagram, BsTiktok } from 'react-icons/bs'

export const Header = () => {
  const pathName = usePathname() // hook oficial do Next.js

  return (
    <header className='flex justify-center pt-8 text-lg -mb-20 z-10 relative'>
      <Limiter className='flex justify-between'>
        <nav className='w-[20%]'>
          <ul className='flex justify-between w-1/4 gap-6'>
            <Link
              href='/'
              className={`headerMenu transition-colors ${
                pathName === '/' ? 'headerMenuActive' : ''
              }`}
            >
              <li>Home</li>
            </Link>
            <Link
              href='/services'
              className={`headerMenu transition-colors ${
                pathName === '/services' ? 'headerMenuActive' : ''
              }`}
            >
              <li>Services</li>
            </Link>
          </ul>
        </nav>
        <img
          src='/imgs/pure-detail-logo.png'
          alt='pure detail logo'
          className='w-[40%]'
        />
        <div className='flex items-center justify-between w-[20%]'>
          <nav>
            <ul className='flex justify-between w-1/4'>
              <Link
                href='/book'
                className={`headerMenu transition-colors ${
                  pathName === '/book' ? 'headerMenuActive' : ''
                }`}
              >
                <li>Book</li>
              </Link>
            </ul>
          </nav>
          <ul className='flex justify-between gap-4'>
            <BsInstagram className='cursor-pointer hover:text-2xl transition-all' />
            <BsTiktok className='cursor-pointer hover:text-2xl transition-all' />
          </ul>
        </div>
      </Limiter>
    </header>
  )
}
