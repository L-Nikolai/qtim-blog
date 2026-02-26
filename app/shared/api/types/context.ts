import type { RuntimeConfig } from 'nuxt/schema'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface ApiClient {
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>
}

export class Context {
  public readonly $config: RuntimeConfig
  public readonly $api: ApiClient
  public readonly $axios: AxiosInstance

  constructor(
    $config: RuntimeConfig,
    apiClient: ApiClient,
    axiosInstance: AxiosInstance,
  ) {
    this.$config = $config
    this.$api = apiClient
    this.$axios = axiosInstance
  }
}
