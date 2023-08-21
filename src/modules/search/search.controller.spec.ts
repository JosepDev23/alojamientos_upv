import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';
import Search from './search.schema';

describe('SearchController', () => {
  let controller: SearchController
  let service: SearchService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [{
        provide: SearchService,
        useValue: {
          findAll: jest.fn(),
          findByUserId: jest.fn(),
          save: jest.fn()
        }
      }]
    }).compile();

    controller = module.get<SearchController>(SearchController)
    service = module.get<SearchService>(SearchService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  })

  describe('getSearches', () => {
    it('should return all searches', async () => {
      const result: Search[] = [
        { userId: '1', title: 'title', priceRange: [1, 2], type: 'room', city: 'city' },
      ]
      jest.spyOn(service, 'findAll').mockResolvedValue(result)

      expect(await controller.getSearches()).toBe(result)
    })
  })

  describe('getSearchesByUserId', () => {
    it('should return all searches by user id', async () => {
      const result: Search[] = [
        { userId: '1', title: 'title', priceRange: [1, 2], type: 'room', city: 'city' },
      ]
      jest.spyOn(service, 'findByUserId').mockResolvedValue(result)

      expect(await controller.getSearchesByUserId('1')).toBe(result)
    })
  })

  describe('postSearch', () => {
    it('should create a new search', async () => {
      const result: Search = { userId: '1', title: 'title', priceRange: [1, 2], type: 'room', city: 'city' }
      jest.spyOn(service, 'save').mockResolvedValue(result)

      expect(await controller.postSearch(result)).toBe(result)
    })
  })
})
