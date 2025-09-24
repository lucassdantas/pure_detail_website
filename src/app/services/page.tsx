import { Banner } from "@/app/components/Banner";
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
        <HighLightedTitle text="Car detailing" />
        <div className="relative flex flex-col gap-8">
          {Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category}>
              <h2 className="text-xl font-bold mb-4">{category}</h2>

              <div className="flex gap-4 justify-between items-stretch flex-wrap">
                {services.map((service) => (
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
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className='italic p-2 border-2'>
          *Final pricing may vary depending on the vehicle's condition anda ny add-on services selected. You'll always be quoted before work begins.
        </p>
      </Section>
    </>
  );
}
