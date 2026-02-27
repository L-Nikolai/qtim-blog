import type { RuntimeConfig } from 'nuxt/schema'
import axios, { type AxiosInstance } from 'axios'
import { Context } from '~/shared/api/types/context'
import { Blog } from '~/shared/api/modules/blog'

const createApiClient = (axiosInstance: AxiosInstance) => ({
  get: async <T>(url: string, config?: any): Promise<T> => {
    const response = await axiosInstance.get<T>(url, config)
    return response.data
  },
  post: async <T>(url: string, data?: any, config?: any): Promise<T> => {
    const response = await axiosInstance.post<T>(url, data, config)
    return response.data
  },
  put: async <T>(url: string, data?: any, config?: any): Promise<T> => {
    const response = await axiosInstance.put<T>(url, data, config)
    return response.data
  },
  patch: async <T>(url: string, data?: any, config?: any): Promise<T> => {
    const response = await axiosInstance.patch<T>(url, data, config)
    return response.data
  },
  delete: async <T>(url: string, config?: any): Promise<T> => {
    const response = await axiosInstance.delete<T>(url, config)
    return response.data
  },
})

export class ApiProvider {
  private readonly context: Context
  private readonly axiosInstance: AxiosInstance

  constructor($config: RuntimeConfig) {
    this.axiosInstance = axios.create({
      baseURL: $config.public.apiBaseUrl as string,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    this.setupInterceptors()

    const apiClient = createApiClient(this.axiosInstance)
    this.context = new Context($config, apiClient, this.axiosInstance)
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use((config) => {
      return config
    })

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          console.error('Unauthorized')
        }
        return Promise.reject(error)
      },
    )
  }

  public blog() {
    return new Blog(this.context)
  }

  public get axios() {
    return this.axiosInstance
  }
}
