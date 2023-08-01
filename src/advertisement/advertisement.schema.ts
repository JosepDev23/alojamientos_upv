import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { TypeOfProperty } from 'src/typeOfProperty/TypeOfProperty'

@Schema()
export default class Advertisement {
  @Prop()
  @ApiProperty()
  userId: string

  @Prop()
  @ApiProperty()
  title: string

  @Prop()
  @ApiProperty()
  description: string

  @Prop()
  @ApiProperty()
  price: number

  @Prop()
  @ApiProperty()
  typeOfProperty: TypeOfProperty

  @Prop([String])
  @ApiProperty()
  imageUrls: string[]

  @Prop()
  @ApiProperty()
  street: string
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement)
