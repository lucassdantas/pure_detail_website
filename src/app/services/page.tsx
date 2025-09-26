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
        <HighLightedTitle text="Car detailing" />
        <div className="relative flex flex-col gap-8">
          {Object.entries(servicesByCategory).map(([category, services]) => (
            <div key={category} id={category.replace(' ', '-').toLowerCase()}>
              <h2 className="text-xl font-bold mb-4">{category}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24">
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
        <HighLightedText> *Final pricing may vary depending on the vehicle's condition anda ny add-on services selected. You'll always be quoted before work begins.</HighLightedText>

      </Section>
    </>
  );
}
