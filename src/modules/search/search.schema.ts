import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { ApiProperty } from '@nestjs/swagger'
import { TypeOfProperty } from 'src/modules/advertisement/Application/TypeOfProperty'
import SearchEntity from './Application/search.entity'

@Schema()
export default class Search implements SearchEntity {
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
}

export const SearchSchema = SchemaFactory.createForClass(Search)
