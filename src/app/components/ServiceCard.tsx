import { CircleButon } from '@/app/components/CircleButon'
import { DiagonalRoundedImage } from '@/app/components/DiagonalRoundedImage'
import { ServiceType } from '@/app/types/ServiceType'
import React from 'react'

type ServiceCardProps = ServiceType & {
  hasButton?: boolean
}
export const ServiceCard = ({upperText, bottomText, title, detailsList, priceText, btnText, imgUrl, category, hasButton = true}:ServiceCardProps) => {
  return (
    <div className='min-h-full flex flex-col justify-between'>
      <div>
        <div className={`w-fit relative flex flex-col p-4 border-4 border-accent-yellow bg-radial from-white from-60% to-gray-400 rounded-lg text-black`}>
          <h3 className=' text-2xl uppercase'>{upperText}</h3>
          <DiagonalRoundedImage imgUrl={imgUrl} alt={title} cardId={imgUrl}  />
          <h3 className='bg-white w-fit rounded-lg absolute bottom-0 right-3 text-2xl uppercase'>{bottomText}</h3>
        </div>
        <div className='my-4 flex flex-col'>
          <h3 className='text-2xl font-bold '>{title}</h3>
          <ul className='list-disc px-4'>
            {detailsList.map(detail => <li key={detail}>{detail}</li>)}
          </ul>
        </div>
      </div>
      <div className=''>
        <span className='text-light-yellow'>{priceText}</span>
        {hasButton && <CircleButon text={btnText} url='/book'/>}
      </div>
    </div>
  )
}
