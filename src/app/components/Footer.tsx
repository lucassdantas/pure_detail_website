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
      <Limiter className='flex flex-col justify-between gap-18 xl:px-0 px-6'>
        <div className="flex justify-between">
          <img src='/imgs/brandmark-logo-puredetail.png' alt='pure detail logo footer' className='w-3/6'/>
          {footerColumns.map((column, i ) => {
            return (
              <div key={column.title}>
                <h4 className='text-2xl uppercase font-bold mb-2'>{column.title}</h4>
                <ul className=''>
                  {column.links.map((menuLink, i2) => <Link href={menuLink.link} key={menuLink.link}><li>{menuLink.name}</li></Link>)}
                </ul>
                {i == footerColumns.length-1 && <>
                  <h4 className='text-2xl uppercase font-bold mb-2 mt-4'>Policies</h4>
                  <ul>
                    <Link href='/privacy-policy'><li>Privacy Policy</li></Link>
                    <Link href='/terms-and-conditions'><li>Terms & Conditions</li></Link>
                  </ul>
                </>
                }
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
