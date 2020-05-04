import { reactive } from '@vue/composition-api'
import container from '@/di_container/tsyringe.config'
import { SampleUseCase } from '@/domain/use_case'
import { Sample } from '@/domain/model'

type CounterState = {
  count: number
  sample: string
  samples?: Sample[]
}

export default function counterStore() {
  const counterState: CounterState = {
    count: 0,
    sample: '',
    samples: []
  }
  const state = reactive(counterState)

  return {
    get count() {
      return state.count
    },

    get double() {
      return state.count * 2
    },

    get sample() {
      return state.sample
    },

    get samples() {
      return state.samples
    },

    loadSample() {
      const useCase = container.resolve<SampleUseCase>('SampleUseCase')
      state.sample = useCase.loadSample()
    },

    async loadSamples() {
      const useCase = container.resolve<SampleUseCase>('SampleUseCase')
      state.samples = await useCase.loadSamples()
    },

    async saveSample() {
      const useCase = container.resolve<SampleUseCase>('SampleUseCase')
      await useCase.saveSample()
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
