import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator'

export class LoginAuthDto {
  @IsNotEmpty()
  @ApiProperty()
  username: string

  @MinLength(6)
  @MaxLength(18)
  @ApiProperty()
  password: string
}
