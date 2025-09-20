import { TransformationType } from "@/app/types/TransformationType";
import { transformationsImgsDirectory } from "@/app/utils/constantVales/urls";

export const transformationsImgs:TransformationType[] = [
  {
    dirtyImg:transformationsImgsDirectory+'/transformation-seat.jpg',
    cleanImg:transformationsImgsDirectory+'/transformation-wheel.jpg'
  },
  {
    dirtyImg:transformationsImgsDirectory+'/transformation.jpg',
    cleanImg:transformationsImgsDirectory+'/transformation-wheel.jpg'
  },
  {
    dirtyImg:transformationsImgsDirectory+'/transformation-seat.jpg',
    cleanImg:transformationsImgsDirectory+'/transformation-wheel.jpg'
  },
]