import { Injectable } from '@nestjs/common'
import { Storage } from '@google-cloud/storage'
import { v4 as uuidv4 } from 'uuid'
import ImageUploadRepository from './Application/image-upload.repository'

@Injectable()
export class ImageUploadService implements ImageUploadRepository {
  private readonly storage: Storage
  private readonly bucketName: string

  constructor() {
    this.storage = new Storage({
      projectId: 'alojamientos-upv-imgs',
      keyFilename:
        'alojamientos-upv-imgs-firebase-adminsdk-u56lw-625e5a3db9.json',
    })
    this.bucketName = 'alojamientos-upv-imgs.appspot.com'
  }

  async uploadImage(file: Express.Multer.File): Promise<string> {
    const fileName = `${uuidv4()}${file.originalname}`

    const fileRef = this.storage.bucket(this.bucketName).file(fileName)

    const stream = fileRef.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    })

    stream.write(file.buffer)
    stream.end()

    return new Promise((resolve, reject) => {
      stream.on('error', reject)
      stream.on('finish', () => {
        const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
          this.bucketName
        }/o/${encodeURIComponent(fileName)}?alt=media`
        resolve(publicUrl)
      })
    })
  }
}
