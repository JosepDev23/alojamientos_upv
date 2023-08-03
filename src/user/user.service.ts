import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import User from './user.schema'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { hash } from 'bcrypt'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async save(user: User): Promise<User> {
    const savedUser = new this.userModel(user)
    return savedUser.save()
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const { password } = registerAuthDto
    const plainToHash = await hash(password, 10)
    const savedUser = new this.userModel({
      ...registerAuthDto,
      password: plainToHash,
      favouriteAdvertisementsIds: [],
    })
    return savedUser.save()
  }
}
