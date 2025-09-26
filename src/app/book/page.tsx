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
        <div className="relative flex flex-col gap-8">
         
        </div>
        <HighLightedText> Thanks for submitting your request! We'll be in touch within 24 hours with your tailored quote and next steps.</HighLightedText>
      </Section>
    </>
  );
}
