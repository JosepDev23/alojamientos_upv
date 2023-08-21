import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { UserService } from '../Domain/user.service'
import User from '../Domain/user.schema'
import { RegisterAuthDto } from '../Applitaction/dto/register-auth.dto'
import { LoginAuthDto } from '../Applitaction/dto/login-auth.dto'
import { UserPutDto } from '../Applitaction/dto/user-put.dto'
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

  @Get('/:id')
  @ApiOperation({ summary: 'Find a user by id' })
  @ApiResponse({
    status: 200,
    description: 'User found successfully',
    type: User,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'User id',
  })
  async findUserById(@Param('id') id: string): Promise<User> {
    return this.userService.findUserById(id)
  }
}
