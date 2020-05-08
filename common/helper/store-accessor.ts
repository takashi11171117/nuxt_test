import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Status from '@/store/status'

// eslint-disable-next-line import/no-mutable-exports
let statusStore: Status

function initialiseStores(store: Store<any>): void {
  statusStore = getModule(Status, store)
}

export { initialiseStores, statusStore }
