import { Module } from '@nestjs/common'
import { AdvertisementModule } from './modules/advertisement/advertisement.module'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './modules/user/user.module'
import { SearchModule } from './modules/search/search.module'
import { ImageUploadService } from './modules/image-upload/image-upload.service'
import { ImageUploadController } from './modules/image-upload/image-upload.controller'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.tmj5t2q.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`
    ),
    AdvertisementModule,
    UserModule,
    SearchModule,
  ],
  providers: [ImageUploadService],
  controllers: [ImageUploadController],
})
export class AppModule {}
