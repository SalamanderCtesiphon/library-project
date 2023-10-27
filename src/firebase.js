// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyDQmhKmwW1BXtDiI1uZ4SHkCZ1EnS_vp9s',
  authDomain: 'library-project-b40d4.firebaseapp.com',
  projectId: 'library-project-b40d4',
  storageBucket: 'library-project-b40d4.appspot.com',
  messagingSenderId: '877849961744',
  appId: '1:877849961744:web:28322c0ab321e85c107195',
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app)
