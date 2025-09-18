import { Banner } from "@/app/components/Banner";

export default function Home() {
  return (
    <Banner title='Detail That Delivers' bgImgClass="homeBanner" hasButton={true} button={{text:'Book a Detail', url:'/book'}}/>
  );
}
