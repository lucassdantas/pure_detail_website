import { Banner } from "@/app/components/Banner";
import { HighLightedTitle } from "@/app/components/HighLightedTitle";
import { Section } from "@/app/components/Section";
import { ServiceCard } from "@/app/components/ServiceCard";
import { featuredServices } from "@/app/utils/services";

export default function ServicesPage() {
  
  return (
    <>
      <Banner title='Detail That Delivers' bgImgClass="servicesBanner" hasButton={false} />
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
        <p className='italic p-2 border-2'>
          *Final pricing may vary depending on the vehicle's condition anda ny add-on services selected. You'll always be quoted before work begins.
        </p>
      </Section>
    </>
  );
}
