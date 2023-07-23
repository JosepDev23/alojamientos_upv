import { Controller, Post, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { ImageUploadService } from './image-upload.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@ApiTags('image-upload')
@Controller('image-upload')
export class ImageUploadController {
  constructor(private readonly imageUploadService: ImageUploadService) { }

  @Post()
  @ApiOperation({ summary: 'Upload a new image' })
  @UseInterceptors(FilesInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        image: {
          type: 'array',
          items: { type: 'string', format: 'binary' }
        }
      }
    }
  })
  async postImages(
    @UploadedFiles() files: Express.Multer.File[]
  ) {
    const response: string[] = []
    for (const file of files) {
      const url = await this.imageUploadService.uploadImage(file)
      response.push(url)
    }
    return response
  }
}
