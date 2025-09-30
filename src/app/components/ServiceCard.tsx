import { CircleButon } from '@/app/components/CircleButon'
import { DiagonalRoundedImage } from '@/app/components/DiagonalRoundedImage'
import { Title } from '@/app/components/Title'
import { ServiceType } from '@/app/types/ServiceType'
import React from 'react'

type ServiceCardProps = ServiceType & {
  hasButton?: boolean
}

const BottomTitle = ({bottomText}:{bottomText:string}) => {
   const bottomTextPositoinByTextLength = {
    default:`
      max-w-[80%] w-fit min-w-[63%] h-[67px]
    `,
    moreThanSix:`
      max-w-[82%] w-full min-w-[63%] h-[67px] 
    `,
    moreThanSeven:`
      max-w-[64%]  min-w-[63%] h-[87px] 
    `,
  }
  const returnCurrentTextPosition = (bottomTitleLength:number) => {
    if (bottomTitleLength > 7) return bottomTextPositoinByTextLength.moreThanSeven
    if (bottomTitleLength > 6) return bottomTextPositoinByTextLength.moreThanSix
    return bottomTextPositoinByTextLength.default
  }
return(
  <Title tag='h3' className={`
    title font-black text-3xl uppercase  
    ${returnCurrentTextPosition(bottomText.length)}
    pb-[2px] pt-[8px] pl-[8px] 
    absolute bottom-0 right-0
    break-words
  `}>
    {bottomText}
  </Title>
)
}
export const ServiceCard = ({upperText, bottomText, title, detailsList, priceText, btnText, imgUrl, category, hasButton = true}:ServiceCardProps) => {
  return (
    <div className='service-card min-h-full flex flex-col justify-between max-w-[330px] z-0' id={title.replace(' ', '-').toLowerCase()}>
     
      <div className=''>
        <div className={`w-full relative flex flex-col items-center p-2  border-4 border-accent-yellow bg-radial from-white from-60% to-gray-400 rounded-lg text-black mb-10`}>
          <div>
            <Title tag='h3' className='title font-black text-left text-3xl uppercase ml-1 -mb-4'>{upperText}</Title>
            <DiagonalRoundedImage imgUrl={imgUrl} alt={title} cardId={imgUrl} bottomTitleLength={bottomText.length}  />
            <BottomTitle bottomText={bottomText}/>
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
