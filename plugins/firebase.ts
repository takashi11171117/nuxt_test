import firebase from 'firebase/app'
import * as Ballcap from '@1amageek/ballcap'
import 'firebase/firestore'
import { firebaseConfig } from '@/config/FirebaseConfig'

Ballcap.initialize(firebase.initializeApp(firebaseConfig))
