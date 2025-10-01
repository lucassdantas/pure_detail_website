import { Banner } from "@/app/components/Banner";
import { BeforeAndAfter } from "@/app/components/BeforeAndAfter";
import { CircleButon } from "@/app/components/CircleButon";
import { HighLightedTitle } from "@/app/components/HighLightedTitle";
import { Reviews } from "@/app/components/Reviews";
import { Section } from "@/app/components/Section";
import { ServiceCard } from "@/app/components/ServiceCard";
import { reviews } from "@/app/utils/reviews";
import { featuredServices } from "@/app/utils/services";
import { transformations } from "@/app/utils/transformations";
export default function Home() {
  
  return (
    <>
      <Banner title='Detail That Delivers' bgImgClass="homeBanner" hasButton={true} button={{text:'Book a Detail', url:'/book'}}/>
      <Section id='services'>
        <HighLightedTitle text="Choose your clean" />
        <div className='relative w-full flex flex-wrap lg:flex-row flex-col  gap-4 space-y-12 lg:justify-between lg:items-stretch items-center'>
          {featuredServices.services.map((service, i) => {
            return (
              <ServiceCard 
                bottomText={service.bottomText}
                btnText={service.bottomText}
                category={service.category}
                detailsList={service.detailsList}
                imgUrl={service.imgUrl}
                priceText={service.priceText}
                title={service.title}
                upperText={service.upperText}
                key={'home'+service.title}
                hasButton={false}
              />
            )
          })}
        </div>
        <div className="w-full flex justify-center my-18">
          <CircleButon text='View All Services' url='/services'/>
        </div>
      </Section>
      <Section id="about" className='pb-18'>
          <HighLightedTitle text='About'/>
          <div className='flex lg:flex-row flex-col justify-center gap-24 items-center lg:px-[80px]'>
            <img src='/imgs/about/professional-cleaning-a-car.jpg' alt='Car professional working' className='rounded-lg lg:w-1/3 w-full '/>
            <div className='font-bold gap-4 text-2xl lg:w-1/2 w-full space-y-4'>
              <p>
                We're a locally-owned detailing business with one mission: to make every car look and feel its best.
                <br/> 
                From daily drivers to weekend showpieces, every detail is done with precision, care, and pride.
              </p>
              <p>
                Based in North Shore, Auckland, we believe in honset work, lasting results, and delivering that fresh-car feeling every time.
              </p>
            </div>
          </div>
      </Section>
      <Section id='transformations' className='my-12 hidden' >
          <HighLightedTitle text='Transformations'/>
          <div className='flex lg:flex-row flex-col  justify-between items-stretch gap-12'>
            {transformations.map((transformation, i) => {
              return <BeforeAndAfter dirtyImage={transformation.dirtyImg} cleanImage={transformation.cleanImg} key={transformation.cleanImg+i}/>
            })}
          </div>
      </Section>
      <Section id='reviews' className='mb-32 hidden'>
        <HighLightedTitle text='Reviews'/>
        <div className='flex lg:flex-row flex-col justify-between items-stretch gap-12'>
          {reviews.map((review, i) => {
            return <Reviews text={review.text} author={review.author} key={review.id} id={review.id}/>
          })}
        </div>
      </Section>
    </>
  );
}
