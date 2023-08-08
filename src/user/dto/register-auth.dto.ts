import { ApiProperty } from '@nestjs/swagger'
import { LoginAuthDto } from './login-auth.dto'
import { IsEmail, Length } from 'class-validator'

export class RegisterAuthDto extends LoginAuthDto {
  @IsEmail()
  @ApiProperty()
  email: string

  @Length(9)
  @ApiProperty()
  phone: number
}
