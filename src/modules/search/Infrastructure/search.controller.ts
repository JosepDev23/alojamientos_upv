import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { SearchService } from '../Domain/search.service'
import Search from '../Domain/search.schema'
import { JwtAuthGuard } from '../../../jwt/jwt-auth.guard'

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Get all searches' })
  @ApiResponse({ status: 200, description: 'Searches list', type: [Search] })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Searches limit by page',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Initial index for pagination',
  })
  async getSearches(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.searchService.findAll(limit, offset)
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get all searches by user id' })
  @ApiResponse({ status: 200, description: 'Searches list', type: [Search] })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Searches limit by page',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Initial index for pagination',
  })
  @ApiParam({
    name: 'userId',
    required: true,
    type: String,
    description: 'User id',
  })
  async getSearchesByUserId(
    @Param('userId') userId: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.searchService.findByUserId(limit, offset, userId)
  }

  @Post()
  @ApiOperation({ summary: 'Create a new search' })
  @ApiResponse({
    status: 201,
    description: 'Search created successfully',
    type: Search,
  })
  async postSearch(@Body() search: Search): Promise<Search> {
    return this.searchService.save(search)
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a search' })
  @ApiResponse({
    status: 200,
    description: 'Search deleted successfully',
    type: Search,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Id',
  })
  async deleteSearch(@Param('id') id: string) {
    return this.searchService.delete(id)
  }
}
