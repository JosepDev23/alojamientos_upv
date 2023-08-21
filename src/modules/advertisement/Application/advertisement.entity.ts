import { TypeOfProperty } from 'src/modules/advertisement/Application/TypeOfProperty'

export default interface AdvertisementEntity {
  userId: string

  title: string

  description: string

  price: number

  typeOfProperty: TypeOfProperty

  imageUrls: string[]

  city: string

  direction: string
}
