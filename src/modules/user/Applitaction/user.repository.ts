import { LoginAuthDto } from './dto/login-auth.dto'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { UserPutDto } from './dto/user-put.dto'
import User from '../user.schema'

export default interface UserRepository {
  register(registerAuthDto: RegisterAuthDto): Promise<User>

  login(loginAuthDto: LoginAuthDto): Promise<{ user: User; token: string }>

  updateUser(id: string, userPutDto: UserPutDto): Promise<User>

  findUserById(id: string): Promise<User>
}
