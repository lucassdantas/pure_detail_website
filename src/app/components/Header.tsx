'use client'
import { useState } from 'react'
import { Limiter } from '@/app/components/Limiter'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsInstagram, BsTiktok, BsList, BsX } from 'react-icons/bs'

export const Header = () => {
  const pathName = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Links (mantive os mesmos do seu layout desktop)
  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/book', label: 'Book' },
  ]

  return (
    <header className="relative z-10">
      {/* ---------- DESKTOP: EXACTLY AS ORIGINAL (only show on lg and up) ---------- */}
      <div className="hidden lg:block">
        <div className="flex justify-center pt-8 text-lg -mb-20">
          <Limiter className="flex justify-between">
            <nav className="w-[20%]">
              <ul className="flex justify-between w-1/4 gap-6">
                <Link href="/" className={`headerMenu transition-colors ${pathName === '/' ? 'headerMenuActive' : ''}`}>
                  <li>Home</li>
                </Link>
                <Link href="/services" className={`headerMenu transition-colors ${pathName === '/services' ? 'headerMenuActive' : ''}`}>
                  <li>Services</li>
                </Link>
              </ul>
            </nav>

            <img src="/imgs/pure-detail-logo.png" alt="pure detail logo" className="w-[40%]" />

            <div className="flex items-center justify-between w-[20%]">
              <nav>
                <ul className="flex justify-between w-1/4">
                  <Link href="/book" className={`headerMenu transition-colors ${pathName === '/book' ? 'headerMenuActive' : ''}`}>
                    <li>Book</li>
                  </Link>
                </ul>
              </nav>
              <ul className="flex justify-between gap-4">
                <BsInstagram className="cursor-pointer hover:text-2xl transition-all" />
                <BsTiktok className="cursor-pointer hover:text-2xl transition-all" />
              </ul>
            </div>
          </Limiter>
        </div>
      </div>

      {/* ---------- MOBILE: only show below lg (screen < 1024px) ---------- */}
      <div className="block lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo on the LEFT, max width ~300px */}
          <div className="flex items-center">
            <img
              src="/imgs/pure-detail-logo.png"
              alt="pure detail logo"
              className="max-w-[300px] w-[160px] sm:w-[200px] object-contain"
            />
          </div>

          {/* Hamburger on the RIGHT */}
          <button
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((s) => !s)}
            className="text-2xl p-2 rounded-md"
          >
            {menuOpen ? <BsX /> : <BsList />}
          </button>
        </div>

        {/* Mobile menu overlay (covers full height) */}
        <div
          className={`fixed inset-0 z-30 transition-transform duration-200 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          aria-hidden={!menuOpen}
        >
          {/* semi-transparent backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          {/* menu panel sliding from right */}
          <nav className="relative ml-auto w-72 max-w-[85%] h-full bg-black p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <img src="/imgs/pure-detail-logo.png" alt="pure detail logo" className="w-36 object-contain" />
              <button aria-label="Close menu" onClick={() => setMenuOpen(false)} className="text-2xl">
                <BsX />
              </button>
            </div>

            <ul className="flex flex-col gap-4 text-lg">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 px-1 ${pathName === l.href ? 'font-semibold' : 'font-normal'}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t pt-4">
              <p className="text-sm font-medium mb-2">Follow us</p>
              <div className="flex gap-4">
                <a href="#" onClick={() => setMenuOpen(false)} aria-label="Instagram">
                  <BsInstagram className="text-2xl" />
                </a>
                <a href="#" onClick={() => setMenuOpen(false)} aria-label="Tiktok">
                  <BsTiktok className="text-2xl" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
