import { Module } from '@nestjs/common'
import { AdvertisementModule } from './advertisement/advertisement.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { SearchModule } from './search/search.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.tmj5t2q.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
    ),
    AdvertisementModule,
    UserModule,
    SearchModule
  ]
})
export class AppModule { }
