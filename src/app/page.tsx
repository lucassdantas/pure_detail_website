import { Banner } from "@/app/components/Banner";
import { BeforeAndAfter } from "@/app/components/BeforeAndAfter";
import { CircleButon } from "@/app/components/CircleButon";
import { HighLightedTitle } from "@/app/components/HighLightedTitle";
import { Section } from "@/app/components/Section";
import { ServiceCard } from "@/app/components/ServiceCard";
import { featuredServices } from "@/app/utils/services";
export default function Home() {
  
  return (
    <>
      <Banner title='Detail That Delivers' bgImgClass="homeBanner" hasButton={true} button={{text:'Book a Detail', url:'/book'}}/>
      <Section>
        <HighLightedTitle text="Choose your clean" />
        <div className='relative flex gap-4 justify-between items-stretch'>
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
                key={service.title}
                hasButton={false}
              />
            )
          })}
        </div>
        <CircleButon text='View All Services' url='/services'/>
      </Section>
      <Section>
          <HighLightedTitle text='About'/>
          <div className='flex justify-center gap-12'>
            <img src='' alt='Car professional working' className='rounded-lg w-1/2'/>
            <div>
              <p>
                We're a locally-owned detailing business with one mission:
                to make every car look and feel its best.
                <br/> 
                From daily drivers to weekend showpieces, every detail is done with precision, care, and pride.
              </p>
              <p>
                Based in North Shore, Auckland, we believe in honset work, lasting results, and delivering that fresh-car feeling every time.
              </p>
            </div>
          </div>
      </Section>
      <Section>
          <HighLightedTitle text='Transformations'/>
          <BeforeAndAfter beforeImg="/imgs/transformation/transformation-seat.jpg/" afterImg="/imgs/transformation/transformation-wheel.jpg"/>

      </Section>
    </>
  );
}
