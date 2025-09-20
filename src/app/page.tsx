import { Banner } from "@/app/components/Banner";
import { HighLightedTitle } from "@/app/components/HighLightedTitle";
import { ServiceCard } from "@/app/components/ServiceCard";
import { featuredServices } from "@/app/utils/services";
export default function Home() {
  
  return (
    <>
      <Banner title='Detail That Delivers' bgImgClass="homeBanner" hasButton={true} button={{text:'Book a Detail', url:'/book'}}/>
      <HighLightedTitle text="Choose your clean" />
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
    </>
  );
}
