import { Banner } from "@/app/components/Banner";
import { HighLightedText } from "@/app/components/HighLightedText";
import { HighLightedTitle } from "@/app/components/HighLightedTitle";
import { Section } from "@/app/components/Section";
import { ServiceCard } from "@/app/components/ServiceCard";
import { ServiceType } from "@/app/types/ServiceType";
import { allServices } from "@/app/utils/services";

export default function ServicesPage() {
  // agrupa os serviços por categoria
const servicesByCategory = allServices.reduce((acc, service) => {
  if (!acc[service.category]) {
    acc[service.category] = []
  }
  acc[service.category].push(service)
  return acc
}, {} as Record<string, ServiceType[]>)

  return (
    <>
      <Banner title='Services' bgImgClass="servicesBanner" hasButton={false} />
      <Section>
        <div className="relative flex flex-col  gap-8">
          {Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category} id={category.replace(' ', '-').toLowerCase()}>
              <HighLightedTitle text={category} className='' />

              <div className="flex lg:flex-row flex-col flex-wrap justify-between gap-10 mt-12">
                {services.map((service, i) => (
                  <>
                  <ServiceCard
                    bottomText={service.bottomText}
                    btnText={service.btnText}
                    category={service.category}
                    detailsList={service.detailsList}
                    imgUrl={service.imgUrl}
                    priceText={service.priceText}
                    title={service.title}
                    upperText={service.upperText}
                    key={service.title}
                    hasButton={true}
                  />
                  {(i+1 === services.length) && services.length%3!=0 && <div className='w-[320px]'></div>}
                  </>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center my-24">
          <HighLightedText className='lg:w-[600px] w-full text-center text-lg'> *Final pricing may vary depending on the vehicle's condition and any add-on services selected. You'll always be quoted before work begins.</HighLightedText>
        </div>

      </Section>
    </>
  );
}
