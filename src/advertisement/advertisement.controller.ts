import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { AdvertisementService } from './advertisement.service'
import Advertisement from './advertisement.schema'
import { JwtAuthGuard } from 'src/jwt/jwt-auth.guard'

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
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
  async getAdvertisements(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number
  ) {
    return this.advertisementService.findAll(limit, offset)
  }

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
}
