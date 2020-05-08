import {
  VuexModule,
  Module,
  Mutation,
  MutationAction
} from 'vuex-module-decorators'

export interface IStatusState {
  status: string
  version: string
}

@Module({ stateFactory: true, namespaced: true, name: 'status' })
export default class Status extends VuexModule implements IStatusState {
  status: string = ''
  version: string = ''

  @Mutation
  setStatus(status: string) {
    this.status = status
  }

  setVersion(version: string) {
    this.version = version
  }

  // eslint-disable-next-line require-await
  @MutationAction({ mutate: ['status', 'version'] })
  async setServerInfo(payload: IStatusState) {
    return {
      status: payload.status,
      version: payload.version
    }
  }
}
