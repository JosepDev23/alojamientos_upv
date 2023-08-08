import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import Search from './search.schema'

@Injectable()
export class SearchService {
  constructor(@InjectModel('Search') private searchModel: Model<Search>) {}

  async findAll(limit: number, offset: number): Promise<Search[]> {
    return this.searchModel.find().limit(limit).skip(offset).exec()
  }

  async findByUserId(
    limit: number,
    offset: number,
    userId: string
  ): Promise<Search[]> {
    const filter = { userId: new RegExp(userId, 'i') }
    return this.searchModel.find(filter).limit(limit).skip(offset).exec()
  }

  async save(search: Search): Promise<Search> {
    const savedSearch = new this.searchModel(search)
    return savedSearch.save()
  }
}
