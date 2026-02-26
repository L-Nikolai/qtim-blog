import { Context } from '~/shared/api/types/context'

export class BaseModule {
  protected readonly context: Context

  constructor(context: Context) {
    this.context = context
  }

  protected get api() {
    return this.context.$api
  }

  protected get config() {
    return this.context.$config
  }

  protected get axios() {
    return this.context.$axios
  }
}
