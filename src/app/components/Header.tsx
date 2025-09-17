import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
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
        <ul>
          <Link href='/book'>
            <li>Book</li>
          </Link>
        </ul>
      </nav>
      <ul>
        {/* instagram and tiktok icons */}
      </ul>
    </header>
    
  )
}
