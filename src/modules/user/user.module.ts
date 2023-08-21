import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import User, { UserSchema } from './user.schema'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from 'src/jwt/jwt.strategy'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
})
export class UserModule {}
