import {
  Body,
  Controller,
  Delete,
  Get,
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
import { AdvertisementService } from './advertisement.service'
import Advertisement from './advertisement.schema'
import { TypeOfProperty } from 'src/typeOfProperty/TypeOfProperty'
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard'

@ApiTags('advertisements')
@Controller('advertisement')
export class AdvertisementController {
  constructor(private readonly advertisementService: AdvertisementService) {}

  @Get()
  @ApiOperation({ summary: 'Get all advertisements' })
  @ApiResponse({
    status: 200,
    description: 'Advertisements list',
    type: [Advertisement],
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Advertisiements limit by page',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Initial index for pagination',
  })
  @ApiQuery({
    name: 'minPrice',
    required: false,
    type: Number,
    description: 'Price is minimum or equal',
  })
  @ApiQuery({
    name: 'maxPrice',
    required: false,
    type: Number,
    description: 'Price is maximum or equal',
  })
  @ApiQuery({
    name: 'typeOfProperty',
    required: false,
    type: String,
    description: 'Type of property',
  })
  @ApiQuery({
    name: 'city',
    required: false,
    type: String,
    description: 'City',
  })
  async getAdvertisements(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('typeOfProperty') typeOfProperty?: string,
    @Query('city') city?: string
  ) {
    return this.advertisementService.findAll(
      limit,
      offset,
      minPrice,
      maxPrice,
      typeOfProperty as TypeOfProperty,
      city
    )
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get advertisement by id' })
  @ApiResponse({
    status: 200,
    description: 'Advertisement by id',
    type: Advertisement,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Id',
  })
  async getAdvertisementsById(@Param('id') id: string) {
    return this.advertisementService.findById(id)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Get('userId/:userId')
  @ApiOperation({ summary: 'Get all advertisements by user id' })
  @ApiResponse({
    status: 200,
    description: 'Advertisements list',
    type: [Advertisement],
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Advertisements limit by page',
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
  async getAdvertisementsByUserId(
    @Param('userId') userId: string,
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.advertisementService.findByUserId(limit, offset, userId)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'Create a new advertisement' })
  @ApiResponse({
    status: 201,
    description: 'Advertisement created successfully',
    type: Advertisement,
  })
  async postAdvertisement(
    @Body() advertisement: Advertisement
  ): Promise<Advertisement> {
    return this.advertisementService.save(advertisement)
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete advertisement by id' })
  @ApiResponse({
    status: 200,
    description: 'Advertisement deleted successfully',
    type: Advertisement,
  })
  @ApiParam({
    name: 'id',
    required: true,
    type: String,
    description: 'Id',
  })
  async deleteAdvertisement(@Param('id') id: string) {
    return this.advertisementService.delete(id)
  }
}
