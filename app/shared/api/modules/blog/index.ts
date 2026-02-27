import { BaseModule } from '~/shared/api/core/baseModule'
import type { BlogPost } from './types'

export class Blog extends BaseModule {
  private readonly baseUrl = '/qtim-test-work/posts'

  public async getBlogs(): Promise<BlogPost[]> {
    return this.api.get<BlogPost[]>(this.baseUrl)
  }

  public async getBlogById(id: string): Promise<BlogPost> {
    return this.api.get<BlogPost>(`${this.baseUrl}/${id}`)
  }
}
