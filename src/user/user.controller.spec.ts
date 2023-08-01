import { Test, TestingModule } from '@nestjs/testing'
import { UserController } from './user.controller'
import { UserService } from './user.service'
import User from './user.schema'

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
      jest.spyOn(service, 'save').mockResolvedValue(result)

      expect(await controller.postUser(result)).toBe(result)
    })
  })
})
