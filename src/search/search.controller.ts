import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchService } from './search.service';
import Search from './search.schema';

@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) { }

  @Get()
  @ApiOperation({ summary: 'Get all searches' })
  @ApiResponse({ status: 200, description: 'Searches list', type: [Search] })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Searches limit by page' })
  @ApiQuery({ name: 'offset', required: false, type: Number, description: 'Initial index for pagination' })
  async getSearches(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.searchService.findAll(limit, offset)
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get all searches by user id' })
  @ApiResponse({ status: 200, description: 'Searches list', type: [Search] })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Searches limit by page' })
  @ApiQuery({ name: 'offset', required: false, type: Number, description: 'Initial index for pagination' })
  @ApiParam({ name: 'userId', required: true, type: String, description: 'User id' })
  async getSearchesByUserId(
    @Query('userId') userId: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.searchService.findByUserId(limit, offset, userId)
  }

  @Post()
  @ApiOperation({ summary: 'Create a new search' })
  @ApiResponse({ status: 201, description: 'Search created successfully', type: Search })
  async postSearch(@Body() search: Search): Promise<Search> {
    return this.searchService.save(search)
  }
}
