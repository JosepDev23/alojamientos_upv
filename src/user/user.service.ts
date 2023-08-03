import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import User from './user.schema'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async save(user: User): Promise<User> {
    const savedUser = new this.userModel(user)
    return savedUser.save()
  }

  async register(registerAuthDto: RegisterAuthDto): Promise<User> {
    const { password } = registerAuthDto
    const plainToHash = await hash(password, 10)
    const savedUser = new this.userModel({
      ...registerAuthDto,
      password: plainToHash,
      favouriteAdvertisementsIds: [],
    })
    return savedUser.save()
  }

  async login(loginAuthDto: LoginAuthDto): Promise<User> {
    const { username, password } = loginAuthDto
    const findUser = await this.userModel.findOne({ username })
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)

    const checkPassword = await compare(password, findUser.password)
    if (!checkPassword) throw new HttpException('WRONG_PASSWORD', 403)

    return findUser
  }
}
