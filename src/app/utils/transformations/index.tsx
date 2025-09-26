import { TransformationType } from "@/app/types/TransformationType";
import { transformationsImgsDirectory } from "@/app/utils/constantVales/urls";

export const transformations:TransformationType[] = [
  {
    dirtyImg:transformationsImgsDirectory+'/transformation-seat.jpg',
    cleanImg:transformationsImgsDirectory+'/transformation-wheel.jpg'
  },
  {
    dirtyImg:transformationsImgsDirectory+'/transformation.jpg',
    cleanImg:transformationsImgsDirectory+'/transformation-wheel.jpg'
  },
  {
    dirtyImg:transformationsImgsDirectory+'/transformation-wheel.jpg',
    cleanImg:transformationsImgsDirectory+'/transformation-seat.jpg'
  },
]