/* eslint-disable no-useless-constructor */
import { injectable, inject } from 'tsyringe'
import { Batch } from '@1amageek/ballcap'
import { SampleRepository } from '../repository'
import { Sample } from '../model'

export interface SampleUseCase {
  loadSample(): string
  saveSample(): Promise<void>
  loadSamples(): Promise<Sample[]>
}

@injectable()
export class SampleUseCaseImpl implements SampleUseCase {
  constructor(
    @inject('SampleRepository') private sampleRepository: SampleRepository
  ) {}

  loadSample(): string {
    return this.sampleRepository.loadData()
  }

  async saveSample() {
    const item = new Sample()
    item.name = 'aaaa'
    const batch = new Batch()
    batch.save(item)
    await batch.commit()
  }

  async loadSamples() {
    const snapshot = await Sample.collectionReference().get()
    if (snapshot.empty) return []
    const samples = snapshot.docs.map((d) => Sample.fromSnapshot<Sample>(d))
    return samples
  }
}
