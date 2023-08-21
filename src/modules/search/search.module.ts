import { Module } from '@nestjs/common'
import { SearchController } from './search.controller'
import { SearchService } from './Domain/search.service'
import { MongooseModule } from '@nestjs/mongoose'
import Search, { SearchSchema } from './Domain/search.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Search.name,
        schema: SearchSchema,
      },
    ]),
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
