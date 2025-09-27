import { ContactDetailsForm } from "@/app/book/ContactDetailsForm";
import { VehicleInfoForm } from "@/app/book/VeichleInfoForm";
import { Banner } from "@/app/components/Banner";
import { HighLightedText } from "@/app/components/HighLightedText";
import { HighLightedTitle } from "@/app/components/HighLightedTitle";
import { Section } from "@/app/components/Section";

export default function BookPage() {

  return (
    <>
      <Banner title='Get a Quote Today' bgImgClass="bookBanner" hasButton={false} />
      <Section>
        <HighLightedTitle text="Contact Detail" />
        <ContactDetailsForm/>
        <HighLightedTitle text="Veichle Info" />
        <VehicleInfoForm/>

        <div className="w-full flex justify-center my-24">
          <HighLightedText className='lg:w-[600px] w-full text-center text-lg'> Thanks for submitting your request! We'll be in touch within 24 hours with your tailored quote and next steps.</HighLightedText>
        </div>
      </Section>
    </>
  );
}
