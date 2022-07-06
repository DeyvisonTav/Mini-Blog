import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBLjXriqQsOiDc4Tcd-LqIjpEPtQmc-Mug',
  authDomain: 'mini-blog-ref.firebaseapp.com',
  projectId: 'mini-blog-ref',
  storageBucket: 'mini-blog-ref.appspot.com',
  messagingSenderId: '333952789808',
  appId: '1:333952789808:web:316abed9ac6662bb136cf5'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
