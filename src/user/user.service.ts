import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import User from './user.schema'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { hash, compare } from 'bcrypt'
import { LoginAuthDto } from './dto/login-auth.dto'
import { JwtService } from '@nestjs/jwt'
import { UserPutDto } from './dto/user-put.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

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

  async login(loginAuthDto: LoginAuthDto) {
    const { username, password } = loginAuthDto
    let findUser = await this.userModel.findOne({ username })
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404)

    const checkPassword = await compare(password, findUser.password)
    if (!checkPassword) throw new HttpException('WRONG_PASSWORD', 403)

    const payload = { id: findUser._id, name: findUser.username }
    const token = this.jwtService.sign(payload)

    findUser.password = password

    console.log('jacinto', {
      'finduser.password': findUser.password,
      password: password,
    })

    const data = {
      user: findUser,
      token,
    }

    return data
  }

  async updateUser(id: string, userPutDto: UserPutDto) {
    const { username, password, favouriteAdvertisementsIds } = userPutDto
    const plainToHash = await hash(password, 10)
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      { username, password: plainToHash, favouriteAdvertisementsIds },
      { new: true }
    )
    return updatedUser
  }

  async findUserById(id: string) {
    return await this.userModel.findById(id).exec()
  }
}
