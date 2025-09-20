import { CircleButon } from '@/app/components/CircleButon'
import { DiagonalRoundedImage } from '@/app/components/DiagonalRoundedImage'
import { ServiceType } from '@/app/types/ServiceType'
import React from 'react'

type ServiceCardProps = ServiceType & {
  hasButton?: boolean
}
export const ServiceCard = ({upperText, bottomText, title, detailsList, priceText, btnText, imgUrl, category, hasButton = true}:ServiceCardProps) => {
  return (
    <div>
      <div className={` flex flex-column p-2 border-2 border-accent-yellow bg-radial from-white from-40% to-black rounded-lg `}>
        <h3>{upperText}</h3>
        <DiagonalRoundedImage imgUrl={imgUrl} alt={title}  />

        <h3>{bottomText}</h3>
      </div>
      <div>
        <h3>{title}</h3>
        {detailsList.map(detail => <li key={detail}>{detail}</li>)}
        <span className='text-light-yellow'>{priceText}</span>
        {hasButton && <CircleButon text={btnText} url='/book'/>}
      </div>
    </div>
  )
}
