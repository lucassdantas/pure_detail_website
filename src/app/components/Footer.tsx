import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  const footerColumns =
  [
    {
      title: 'Home',
      links: [
        {name:'About', link:'/home/#about'},
        {name:'Services', link:'/home/#services'},
        {name:'Reviews', link:'/home/#reviews'},
      ]
    },
    {
      title: 'Our Services',
      links: [
        {name:'Detailing', link:'/services/#detailing'},
        {name:'Services', link:'/services/#ceramic_coating'},
        {name:'Reviews', link:'/services/#headlight_restoration'},
      ]
    }

  ] 
  return (
    <footer>
      <div>
        {/* <img src='' alt='pure detail logo footer'/> */}
        {footerColumns.map((column, i ) => {
          return (
            <div key={column.title}>
              <h4>{column.title}</h4>
              <ul>
                {column.links.map((menuLink, i2) => <Link href={menuLink.link} key={menuLink.link}><li>{menuLink.name}</li></Link>)}
              </ul>
            </div>
          ) 
        })}
      </div>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </footer>
  )
}
