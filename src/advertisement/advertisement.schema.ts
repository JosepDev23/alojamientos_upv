import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import { TypeOfProperty } from "src/typeOfProperty/TypeOfProperty"

@Schema()
export default class Advertisement {

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
}

export const AdvertisementSchema = SchemaFactory.createForClass(Advertisement)