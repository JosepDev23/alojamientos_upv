import Search from '../Domain/search.schema'

export default interface SearchRepository {
  findAll(limit: number, offset: number): Promise<Search[]>

  findByUserId(limit: number, offset: number, userId: string): Promise<Search[]>

  save(search: Search): Promise<Search>

  delete(id: string): Promise<Search>
}
