import { reactive } from '@vue/composition-api'
import container from '@/di_container/tsyringe.config'
import { SampleUseCase } from '@/domain/use_case'

export default function counterStore() {
  const state = reactive({
    count: 0,
    samples: ''
  })

  return {
    get count() {
      return state.count
    },

    get double() {
      return state.count * 2
    },

    get samples() {
      return state.samples
    },

    loadSamples() {
      const useCase = container.resolve<SampleUseCase>('SampleUseCase')
      state.samples = useCase.loadSample()
    },

    threeCount() {
      if (state.count % 3 === 0) alert('Multiple of 3')
    },

    increment() {
      state.count += 1
    },

    decrement() {
      state.count -= 1
    }
  }
}

export type CounterStore = ReturnType<typeof counterStore>
