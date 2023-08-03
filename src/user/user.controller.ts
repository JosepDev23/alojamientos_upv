import { Body, Controller, Post } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { UserService } from './user.service'
import User from './user.schema'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { LoginAuthDto } from './dto/login-auth.dto'

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: User,
  })
  async postUser(@Body() user: User): Promise<User> {
    return this.userService.save(user)
  }

  @Post('/register')
  @ApiOperation({ summary: 'Register a user' })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: User,
  })
  async registerUser(@Body() registerAuthDto: RegisterAuthDto): Promise<User> {
    return this.userService.register(registerAuthDto)
  }

  @Post('/login')
  @ApiOperation({ summary: 'Login a user' })
  @ApiResponse({
    status: 201,
    description: 'User logged successfully',
    type: User,
  })
  async loginUser(@Body() loginAuthDto: LoginAuthDto) {
    return this.userService.login(loginAuthDto)
  }
}
