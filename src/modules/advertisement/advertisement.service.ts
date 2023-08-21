import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import Advertisement from './advertisement.schema'
import { TypeOfProperty } from 'src/modules/advertisement/Application/TypeOfProperty'
import AdvertisementRepository from './Application/advertisement.repository'

@Injectable()
export class AdvertisementService implements AdvertisementRepository {
  constructor(
    @InjectModel('Advertisement')
    private advertisementModel: Model<Advertisement>
  ) {}

  async findAll(
    limit: number,
    offset: number,
    minPrice?: number,
    maxPrice?: number,
    typeOfProperty?: TypeOfProperty,
    city?: string
  ): Promise<Advertisement[]> {
    const query: any = {}

    if (minPrice) {
      query.price = { $gte: minPrice }
    }

    if (maxPrice) {
      query.price = { ...query.price, $lte: maxPrice }
    }

    if (typeOfProperty) {
      query.typeOfProperty = typeOfProperty
    }

    if (city) {
      query.city = city
    }

    return this.advertisementModel.find(query).limit(limit).skip(offset).exec()
  }

  async findById(id: string): Promise<Advertisement> {
    return this.advertisementModel.findById(id).exec()
  }

  async findByUserId(
    limit: number,
    offset: number,
    userId: string
  ): Promise<Advertisement[]> {
    return this.advertisementModel
      .find({ userId })
      .limit(limit)
      .skip(offset)
      .exec()
  }

  async save(advertisement: Advertisement): Promise<Advertisement> {
    const savedAdvertisement = new this.advertisementModel(advertisement)
    return savedAdvertisement.save()
  }

  async delete(id: string) {
    return this.advertisementModel.findByIdAndDelete(id).exec()
  }
}
