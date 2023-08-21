export default interface ImageUploadRepository {
  uploadImage(file: Express.Multer.File): Promise<string>
}
