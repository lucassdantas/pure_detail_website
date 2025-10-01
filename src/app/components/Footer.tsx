'use client'
import { Limiter } from '@/app/components/Limiter'
import { email, facebookUrl, instagramUrl, phone, phoneUrl, tiktokUrl } from '@/app/utils/constantVales/companyData'
import { BsInstagram, BsTiktok } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import Link from 'next/link'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export const Footer = () => {
  const footerColumns = [
    {
      title: 'Home',
      links: [
        { name: 'About', link: '/#about' },
        { name: 'Services', link: '/#services' },
        { name: 'Reviews', link: '/#reviews' },
      ],
    },
    {
      title: 'Our Services',
      links: [
        { name: 'Detailing', link: '/services/#car-detailing' },
        { name: 'Ceramic Coating', link: '/services/#ceramic-coating' },
        { name: 'Headlight Restoration', link: '/services/#headlight-restoration' },
      ],
    },
  ]

  return (
    <footer className='bg-white text-black py-12 w-full'>
      <Limiter className='flex flex-col gap-12 xl:px-0 px-6'>
        {/* Top section */}
        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          {/* Logo */}
          <div className='flex-shrink-0 lg:w-4/6 flex justify-center lg:justify-start'>
            <img
              src='/imgs/brandmark-logo-puredetail.png'
              alt='pure detail logo footer'
              className='lg:max-w-[550px] max-w-[250px] w-full object-contain'
            />
          </div>

          {/* Columns */}
          <div className='flex flex-col sm:flex-row flex-wrap justify-between gap-8 lg:gap-12 lg:w-4/6'>
            {footerColumns.map((column, i) => (
              <div key={column.title} className='flex flex-col'>
                <h4 className='text-2xl uppercase font-bold mb-2'>{column.title}</h4>
                <ul className='flex flex-col gap-1'>
                  {column.links.map((menuLink) => (
                    <Link href={menuLink.link} key={menuLink.link}>
                      <li className='hover:underline cursor-pointer'>{menuLink.name}</li>
                    </Link>
                  ))}
                </ul>

                {/* Policies (only in last column) */}
                {i === footerColumns.length - 1 && (
                  <>
                    <h4 className='text-2xl uppercase font-bold mb-2 mt-4'>Policies</h4>
                    <ul className='flex flex-col gap-1'>
                      <Link href='/privacy-policy'>
                        <li className='hover:underline cursor-pointer'>Privacy Policy</li>
                      </Link>
                      <Link href='/terms-and-conditions'>
                        <li className='hover:underline cursor-pointer'>Terms & Conditions</li>
                      </Link>
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6'>
          {/* Socials */}
          <div className='flex gap-4 text-2xl'>
            <Link href={tiktokUrl} aria-label='Tiktok'>
              <BsTiktok />
            </Link>
            <Link href={instagramUrl} aria-label='Instagram'>
              <BsInstagram />
            </Link>
            <Link href={facebookUrl} aria-label='Facebook'>
              <CgFacebook />
            </Link>
          </div>

          {/* Contact & copyright */}
          <div className='flex flex-col sm:flex-row items-center sm:items-end gap-4 sm:gap-8 text-center sm:text-left text-lg'>
            <Link href={'tel:' + phoneUrl} className='flex gap-2 items-center hover:underline'>
              <FaPhoneAlt className='text-xl' /> {phone}
            </Link>
            <Link href={'mailto:' + email} className='flex gap-2 items-center hover:underline'>
              <FaEnvelope className='text-xl' /> {email}
            </Link>
            <small className='mt-2 sm:mt-0'>&copy; Pure Detail {new Date().getFullYear()}. All rights reserved.</small>
          </div>
        </div>
      </Limiter>
    </footer>
  )
}
