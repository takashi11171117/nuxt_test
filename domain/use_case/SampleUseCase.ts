/* eslint-disable no-useless-constructor */
import { injectable, inject } from 'tsyringe'
// import { Batch } from '@1amageek/ballcap'
import { SampleRepository } from '../repository'
// import { Sample } from '../model'

export interface SampleUseCase {
  loadSample(): string
}

@injectable()
export class SampleUseCaseImpl implements SampleUseCase {
  constructor(
    @inject('SampleRepository') private sampleRepository: SampleRepository
  ) {}

  loadSample(): string {
    return this.sampleRepository.loadData()
  }
}
