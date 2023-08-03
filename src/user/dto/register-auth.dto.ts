import { LoginAuthDto } from './login-auth.dto'
import { IsEmail, Length } from 'class-validator'

export class RegisterAuthDto extends LoginAuthDto {
  @IsEmail()
  email: string

  @Length(9)
  phone: number
}
