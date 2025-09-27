import { Limiter } from '@/app/components/Limiter'
import { email, facebookUrl, instagramUrl, phone, phoneUrl, tiktokUrl } from '@/app/utils/constantVales/companyData'
import { BsInstagram, BsTiktok } from 'react-icons/bs'
import { CgFacebook } from 'react-icons/cg'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

export const Footer = () => {
  const footerColumns =
  [
    {
      title: 'Home',
      links: [
        {name:'About', link:'/#about'},
        {name:'Services', link:'/#services'},
        {name:'Reviews', link:'/#reviews'},
      ]
    },
    {
      title: 'Our Services',
      links: [
        {name:'Detailing', link:'/services/#car-detailing'},
        {name:'Ceramic Coating', link:'/services/#ceramic-coating'},
        {name:'Headlight Restoration', link:'/services/#headlight-restoration'},
      ]
    }

  ] 
  return (
    <footer className='bg-white text-black py-12  w-full'>
      <Limiter className='flex flex-col justify-between gap-12 xl:px-0 px-6'>
        <div className="flex justify-between">
          <div className='bg-black w-4/6 h-[140px]'>
            {/* <img src='' alt='pure detail logo footer'/> */}
          </div>
          {footerColumns.map((column, i ) => {
            return (
              <div key={column.title}>
                <h4 className='text-2xl uppercase font-bold mb-2'>{column.title}</h4>
                <ul className=''>
                  {column.links.map((menuLink, i2) => <Link href={menuLink.link} key={menuLink.link}><li>{menuLink.name}</li></Link>)}
                </ul>
              </div>
            ) 
          })}
        </div>
        <div className='flex justify-between'>
          <div className="flex  text-2xl gap-4">
            <Link href={tiktokUrl}>
              <BsTiktok/>
            </Link>
            <Link href={instagramUrl}>
              <BsInstagram/>
            </Link>
            <Link href={facebookUrl}>
              <CgFacebook/>
            </Link>
          </div>
          <div className="flex items-center justify-end gap-8 text-xl">
            <Link href={'tel:'+phoneUrl} className='flex gap-4 items-center'><FaPhoneAlt className='text-2xl' /> {phone}</Link>
            <Link href={'mailto:'+email} className='flex gap-4 items-center'><FaEnvelope className='text-2xl'  /> {email}</Link>
            <small>&copy; Pure Detail {new Date().getFullYear()}. All Rights reserved.</small>
          </div>
        </div>
      </Limiter>
    </footer>
  )
}
