import { Test, TestingModule } from '@nestjs/testing'
import { ImageUploadController } from './image-upload.controller'
import { ImageUploadService } from '../Domain/image-upload.service'

describe('ImageUploadController', () => {
  let controller: ImageUploadController
  let service: ImageUploadService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageUploadController],
      providers: [
        {
          provide: ImageUploadService,
          useValue: {},
        },
      ],
    }).compile()

    controller = module.get<ImageUploadController>(ImageUploadController)
    service = module.get<ImageUploadService>(ImageUploadService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
