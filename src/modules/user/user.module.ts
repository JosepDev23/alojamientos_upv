import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import User, { UserSchema } from './Domain/user.schema'
import { UserController } from './Infrastructure/user.controller'
import { UserService } from './Domain/user.service'
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
