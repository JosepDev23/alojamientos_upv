import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, Types } from 'mongoose'
import Advertisement from './advertisement.schema'

@Injectable()
export class AdvertisementService {
  constructor(
    @InjectModel('Advertisement')
    private advertisementModel: Model<Advertisement>
  ) {}

  async findAll(limit: number, offset: number): Promise<Advertisement[]> {
    return this.advertisementModel.find().limit(limit).skip(offset).exec()
  }

  async findById(id: string) {
    return this.advertisementModel.findById(id).exec()
  }

  async findByUserId(
    limit: number,
    offset: number,
    userId: string
  ): Promise<Advertisement[]> {
    const filter = { userId: userId }
    return this.advertisementModel.find(filter).limit(limit).skip(offset).exec()
  }

  async save(advertisement: Advertisement): Promise<Advertisement> {
    const savedAdvertisement = new this.advertisementModel(advertisement)
    return savedAdvertisement.save()
  }
}
