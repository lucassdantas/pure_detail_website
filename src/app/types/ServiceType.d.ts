export type ServiceType = {
  upperText:string,
  bottomText:string,
  title:string,
  detailsList:string[],
  priceText:string,
  btnText:string,
  imgUrl:string,
  category:string;
  isHighlightedService?:boolean;
}

export type FeaturedServicesType = {
  services:ServiceType[]
}