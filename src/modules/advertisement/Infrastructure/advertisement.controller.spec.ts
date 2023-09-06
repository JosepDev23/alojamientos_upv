import { Test, TestingModule } from '@nestjs/testing'
import { AdvertisementController } from './advertisement.controller'
import { AdvertisementService } from '../Domain/advertisement.service'
import Advertisement from '../Domain/advertisement.schema'

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

  describe('ertnsfg ', () => {
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
  describe('getAdversdfhsdghtisements', () => {
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
  describe('getAdvedfgndfgnrtisements', () => {
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
  describe('dfgndfgndfgn', () => {
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
  describe('getAdvfdngsfsgnertisements', () => {
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
  describe('dfgndfgn', () => {
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
  describe('getAdvertidfgndfgnsements', () => {
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
  describe('getAdvertidfngdfgnsements', () => {
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
  describe('fghmfghm', () => {
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
  describe('mfghm', () => {
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
  describe('dghmdhgm', () => {
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
  describe('getAdvertissdsaseements', () => {
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
  describe('getAdaergsvertisements', () => {
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
  describe('getAdvertd dghmisements', () => {
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
  describe('getAdvfgnsf ertisements', () => {
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
  describe('getAdverhnsfghsdtisements', () => {
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
  describe('getAdvertisfgnsfgsements', () => {
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
  describe('getAdverfghdfghtisements', () => {
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
  describe('getAdvernsfg sf tisements', () => {
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
  describe('getAdvertifgdhdfghsements', () => {
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
  describe('getAdvertsfghhsgfhisements', () => {
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
  describe('getAdvertisdfgfdn nasements', () => {
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
  describe('getAdvertisemefgdsgfsdfnts', () => {
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
