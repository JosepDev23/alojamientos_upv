import { TypeOfProperty } from 'src/modules/advertisement/Application/TypeOfProperty'

export default interface SearchEntity {
  userId: string

  title: string

  priceRange: [number, number]

  type: TypeOfProperty

  city: string
}
