import { TypeOfProperty } from 'src/modules/advertisement/Application/TypeOfProperty'
import Advertisement from '../advertisement.schema'

export default interface AdvertisementRepository {
  findAll(
    limit: number,
    offset: number,
    minPrice?: number,
    maxPrice?: number,
    typeOfProperty?: TypeOfProperty,
    city?: string
  ): Promise<Advertisement[]>

  findById(id: string): Promise<Advertisement>

  findByUserId(
    limit: number,
    offset: number,
    userId: string
  ): Promise<Advertisement[]>

  save(advertisement: Advertisement): Promise<Advertisement>

  delete(id: string): any
}
