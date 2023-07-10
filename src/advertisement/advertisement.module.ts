import { Module } from '@nestjs/common';
import { AdvertisementService } from './advertisement.service';
import { MongooseModule } from '@nestjs/mongoose';
import Advertisement, { AdvertisementSchema } from './advertisement.schema';
import { AdvertisementController } from './advertisement.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Advertisement.name,
      schema: AdvertisementSchema
    }])
  ],
  controllers: [AdvertisementController],
  providers: [AdvertisementService]
})
export class AdvertisementModule { }
