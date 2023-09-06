import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from '../Domain/user.service'
import User from '../Domain/user.schema'
import { JwtAuthGuard } from '../../../jwt/jwt-auth.guard'

describe('UserController', () => {
  let controller: UserController
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: {
            save: jest.fn(),
          },
        },
      ],
    }).compile()

    controller = module.get<UserController>(UserController)
    service = module.get<UserService>(UserService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('postUser', () => {
    it('should create a new user', async () => {
      const result: User = {
        username: 'username',
        password: 'password',
        email: 'email',
        phone: 654654654,
        favouriteAdvertisementsIds: [],
      }
    })
  })
})
