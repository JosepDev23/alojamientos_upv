import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { ApiProperty } from "@nestjs/swagger"
import { TypeOfProperty } from "src/typeOfProperty/TypeOfProperty"


@Schema()
export default class Search {

  @Prop()
  @ApiProperty()
  userId: string

  @Prop()
  @ApiProperty()
  title: string

  @Prop()
  @ApiProperty()
  priceRange: [number, number]

  @Prop()
  @ApiProperty()
  type: TypeOfProperty

  @Prop()
  @ApiProperty()
  city: string

  @Prop()
  @ApiProperty()
  district?: string
}

export const SearchSchema = SchemaFactory.createForClass(Search)