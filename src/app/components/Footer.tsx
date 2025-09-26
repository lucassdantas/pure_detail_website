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
    <footer className='bg-white text-black py-2 w-full'>
      <Limiter>
        <div className="flex justify-between">
          <div className='bg-black w-2/3'></div>
          {/* <img src='' alt='pure detail logo footer'/> */}
          {footerColumns.map((column, i ) => {
            return (
              <div key={column.title}>
                <h4 className='text-2xl uppercase font-medium'>{column.title}</h4>
                <ul>
                  {column.links.map((menuLink, i2) => <Link href={menuLink.link} key={menuLink.link}><li>{menuLink.name}</li></Link>)}
                </ul>
              </div>
            ) 
          })}
        </div>
        <div className='flex justify-between'>
          <div className="flex gap-2">
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
          <div className="flex items-center justify-end gap-4">
            <div className="flex gap-2 items-center"><FaPhoneAlt /> <Link href={'tel:'+phoneUrl}>{phone}</Link></div>
            <div className="flex gap-2 items-center"><FaEnvelope  /> <Link href={'mailto:'+email}>{email}</Link></div>
            <small>&copy;Pure Detail {new Date().getFullYear()}. All Rights reserved.</small>
          </div>
        </div>
      </Limiter>
    </footer>
  )
}
