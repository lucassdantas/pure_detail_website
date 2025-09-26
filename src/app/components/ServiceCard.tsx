import { CircleButon } from '@/app/components/CircleButon'
import { DiagonalRoundedImage } from '@/app/components/DiagonalRoundedImage'
import { ServiceType } from '@/app/types/ServiceType'
import React from 'react'

type ServiceCardProps = ServiceType & {
  hasButton?: boolean
}
export const ServiceCard = ({upperText, bottomText, title, detailsList, priceText, btnText, imgUrl, category, hasButton = true}:ServiceCardProps) => {
  return (
    <div className='service-card min-h-full flex flex-col justify-between max-w-[330px]' id={title.replace(' ', '-').toLowerCase()}>
     
      <div className=''>
        <div className={`w-full relative flex flex-col items-center p-4 border-4 border-accent-yellow bg-radial from-white from-60% to-gray-400 rounded-lg text-black mb-10`}>
          <div>
            <h3 className='title font-black text-left text-4xl uppercase ml-4'>{upperText}</h3>
            <DiagonalRoundedImage imgUrl={imgUrl} alt={title} cardId={imgUrl}  />
            <h3 className='title bg-radial-[at_100%_100%] text-right  from-transparent to-white to-[60%] font-black w-fit  rounded-lg absolute bottom-1 right-[18px] text-4xl uppercase p-4'>{bottomText}</h3>
          </div>
        </div>

        <div className='my-4 flex flex-col'>
          <h3 className='text-3xl leading-9 font-bold mb-2 '>{title}</h3>
          <ul className='list-disc px-4 text-xl font-bold'>
            {detailsList.map(detail => <li key={detail}>{detail}</li>)}
          </ul>
        </div>

      </div>

      <div className='flex flex-col items-start gap-4'>
        <span className='text-light-yellow font-bold text-xl service-price'>{priceText}</span>
        {hasButton && <CircleButon text={btnText} url='/book' className='w-full' />}
      </div>
    </div>
  )
}
