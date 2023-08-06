import { Body, Controller, Param, Post, Put, UseGuards } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { UserService } from './user.service'
import User from './user.schema'
import { RegisterAuthDto } from './dto/register-auth.dto'
import { LoginAuthDto } from './dto/login-auth.dto'
import { UserPutDto } from './dto/user-put.dto'
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard'

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

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

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({
    status: 201,
    description: 'User updated successfully',
    type: User,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'User id',
  })
  async updateUser(
    @Param('id') id: string,
    @Body() userPutDto: UserPutDto
  ): Promise<User> {
    return this.userService.updateUser(id, userPutDto)
  }
}
