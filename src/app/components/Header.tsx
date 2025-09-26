'use client'
import { Limiter } from '@/app/components/Limiter'
import Link from 'next/link'
import React, {useState } from 'react'
import { BsInstagram, BsTiktok } from 'react-icons/bs'

export const Header = () => {
  const [pathName, setPathName] = useState(location.pathname) 
  const changePathName = (newPathName:string) => setPathName(newPathName)
  
  return (
    <header className='flex justify-center pt-8 text-lg -mb-20 z-10 relative'>
      <Limiter className='flex justify-between'>
        <nav className='w-[20%]'>
          <ul className='flex justify-between w-1/4 gap-6'>
            <Link href='/' className={`headerMenu transition-colors ${location.pathname === '/' && 'headerMenuActive'}`} onClick={() => changePathName('/')}>
              <li>Home</li>
            </Link>
            <Link href='/services' className={`headerMenu transition-colors ${location.pathname === '/services' && 'headerMenuActive'}`} onClick={() => changePathName('/services')}>
              <li>Services</li>
            </Link>
          </ul>
        </nav>
        <div className='bg-white w-[33%]'></div>
        {/* <img src='' alt='pure detail logo'/> */}
        <div className="flex items-center justify-between  w-[20%]">
          <nav>
            <ul className='flex justify-between w-1/4'>
              <Link href='/book' className={`headerMenu transition-colors ${pathName === '/book' && 'headerMenuActive'}`} onClick={() => changePathName('/book')}>
                <li>Book</li>
              </Link>
            </ul>
          </nav>
          <ul className='flex justify-between gap-4'>
            <BsInstagram className='cursor-pointer hover:outline-accent-yellow hover:outline  transition-all'/>
            <BsTiktok className='cursor-pointer hover:text-2xl transition-all'/>
          </ul>
        </div>
      </Limiter>
    </header>
    
  )
}
