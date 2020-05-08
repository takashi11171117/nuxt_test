import { Store } from 'vuex'
import { initialiseStores } from '@/common/helper/store-accessor'
const initializer = (store: Store<any>) => initialiseStores(store)
export const plugins = [initializer]
export * from '@/common/helper/store-accessor'
