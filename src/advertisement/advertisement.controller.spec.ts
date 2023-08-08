import { Test, TestingModule } from '@nestjs/testing'
import { AdvertisementController } from './advertisement.controller'
import { AdvertisementService } from './advertisement.service'
import Advertisement from './advertisement.schema'

describe('AdvertisementController', () => {
  let controller: AdvertisementController
  let service: AdvertisementService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdvertisementController],
      providers: [
        {
          provide: AdvertisementService,
          useValue: {
            findAll: jest.fn(),
            save: jest.fn(),
            deleteAll: jest.fn(),
          },
        },
      ],
    }).compile()

    controller = module.get<AdvertisementController>(AdvertisementController)
    service = module.get<AdvertisementService>(AdvertisementService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  describe('getAdvertisements', () => {
    it('should return all advertisements', async () => {
      const result: Advertisement[] = [
        {
          userId: '1',
          title: 'title',
          description: 'description',
          price: 1,
          typeOfProperty: 'room',
          imageUrls: [],
          city: 'Valencia',
          direction: 'street',
        },
        {
          userId: '2',
          title: 'title2',
          description: 'description2',
          price: 2,
          typeOfProperty: 'apartment',
          imageUrls: [],
          city: 'Valencia',
          direction: 'street2',
        },
      ]
      jest.spyOn(service, 'findAll').mockResolvedValue(result)

      expect(await controller.getAdvertisements()).toBe(result)
    })
  })

  describe('postAdvertisement', () => {
    it('should create a new advertisement', async () => {
      const result: Advertisement = {
        userId: '1',
        title: 'title',
        description: 'description',
        price: 1,
        typeOfProperty: 'room',
        imageUrls: [],
        city: 'Valencia',
        direction: 'street',
      }
      jest.spyOn(service, 'save').mockResolvedValue(result)

      expect(await controller.postAdvertisement(result)).toBe(result)
    })
  })
})
