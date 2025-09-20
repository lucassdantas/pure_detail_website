import { FeaturedServicesType, ServiceType } from "@/app/types/ServiceType"
import { servicesImgsDirectory } from "@/app/utils/constantVales/urls"

export const allServices:ServiceType[] = [
  {
    upperText:'Exterior',
    bottomText:'Detail',
    title:'A full exterior refresh',
    detailsList:[
      'Snow foam pre-wash',
      'Hand wash',
      'Wheel + tire clean',
      'Microfiber towel dry',
      'Quiok wax or spray sealant',
      'Tire shine'
    ],
    priceText:'Starting from $99',
    btnText:'Book the Exterior Detail',
    imgUrl:servicesImgsDirectory+'/full-exterior-refresh.jpg',
    category:'car detailing',
  },
  {
    upperText:'Interior',
    bottomText:'Detail',
    title:'A deep interior clean',
    detailsList:[
      'Full vacuum',
      'Dash, console, door, wipe-down',
      'Interior windows cleaned',
      'Air freshener mist',
      'Leather conditioning',
    ],
    priceText:'Starting from $119',
    btnText:'Book the Interior Detail',
    imgUrl:servicesImgsDirectory+'/deep-interior-clean.jpg',
    category:'car detailing'
  },
  {
    upperText:'Full',
    bottomText:'Detail',
    title:'The complete transformation',
    detailsList:[
      'Everything in Exterior Detail',
      'Everything in Interior Detail',
      'Full surface dressings',
      'Finishing touch with new car scent',
    ],
    priceText:'Starting from $199',
    btnText:'Book the Full detail',
    imgUrl:servicesImgsDirectory+'/complete-transformation-car.jpg',
    category:'car detailing'
  },

  {
    upperText:'Headlight',
    bottomText:'Restor-ation',
    title:'Headlight Restoration',
    detailsList:[
      'Multi-stage sanding',
      'Machine polish',
      'UV sealant finish',
    ],
    priceText:'$119',
    btnText:'Book Headlight Restoration',
    imgUrl:servicesImgsDirectory+'/headlight-restoration.jpg',
    category:'Restoration & revival'
  },
  {
    upperText:'Plastic',
    bottomText:'Restor-ation',
    title:'Plastic Trim Revival',
    detailsList:[
      'Deep clean of plastics',
      'Pro-grade plastic restorer',
      'UV protection',
    ],
    priceText:'$99',
    btnText:'Book Plastic Trim Revival',
    imgUrl:servicesImgsDirectory+'/plastic-trim-revival.jpg',
    category:'Restoration & revival'
  },
  {
    upperText:'Rims',
    bottomText:'Restor-ation',
    title:'Rims Renovation',
    detailsList:[
      'Rims removed from treatment',
      'Deep sanding & surface prep',
      'Repaint for a fresh finish',
    ],
    priceText:'$299',
    btnText:'Book Rims Renovation',
    imgUrl:servicesImgsDirectory+'/rims-renovation.jpg',
    category:'Restoration & revival'
  },

  {
    upperText:'Car',
    bottomText:'Polish',
    title:'Car Polish',
    detailsList:[
      'Removes light to moderate surface soratches',
      'Restores deep gloss and olaritty',
    ],
    priceText:'$399',
    btnText:'Book Car Polish',
    imgUrl:servicesImgsDirectory+'/car-polish.jpg',
    category:'Restoration & revival'
  },
  {
    upperText:'Glass',
    bottomText:'Polish',
    title:'Glass Polish',
    detailsList:[
      'Removes water spots, stains and light scratches',
      'Improves clarity and visibility',
    ],
    priceText:'$199',
    btnText:'Book Glass Polish',
    imgUrl:servicesImgsDirectory+'/glass-polish.jpg',
    category:'Restoration & revival'
  },
  {
    upperText:'Engine bay',
    bottomText:'Clean',
    title:'Engine Bay Clean',
    detailsList:[
      'Degrease and deep clean engine components',
      'Restores a fresh appearence'
    ],
    priceText:'$99',
    btnText:'Book Engine Bay Clean',
    imgUrl:servicesImgsDirectory+'/engine-bay-clean.jpg',
    category:'Restoration & revival'
  },
  {
    upperText:'Ceramic',
    bottomText:'Coating',
    title:'Ceramic Coating',
    detailsList:[
      'Deep exterior prep',
      'Ceramic coating application',
      'Gloss inspection + curing'
    ],
    priceText:'From $699',
    btnText:'Book Ceramic Coating',
    imgUrl:servicesImgsDirectory+'/ceramic-coating.jpg',
    category:'Protection & Customisation'
  },
  {
    upperText:'Vinyl',
    bottomText:'Wrap',
    title:'Vinyl Wraps',
    detailsList:[
      'Full or partial coverage options',
      'Premum wrap materials',
      'Non-damaging to original paint'
    ],
    priceText:'Price on request',
    btnText:'Book Vinyl Wrap',
    imgUrl:servicesImgsDirectory+'/vinyl-wraps.jpg',
    category:'Protection & Customisation'
  },
]

export const featuredServices:FeaturedServicesType = {
  services:[
    allServices[0],
    allServices[1],
    allServices[2],
  ]
}