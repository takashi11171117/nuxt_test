import { Doc, Field, CollectionReference, firestore } from '@1amageek/ballcap'

export class Sample extends Doc {
  static docName: string = 'sample'
  static collectionReference(): CollectionReference {
    return firestore
      .collection('version')
      .doc('1')
      .collection(Sample.docName)
  }

  @Field name?: string
}
