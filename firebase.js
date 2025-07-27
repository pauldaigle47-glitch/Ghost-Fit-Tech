import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDpkaZBTTLPfLflJwWkV91W036Pg8hjlR8",
  authDomain: "ghost-fit-tech.firebaseapp.com",
  projectId: "ghost-fit-tech",
  storageBucket: "ghost-fit-tech.appspot.com",
  messagingSenderId: "373209928471",
  appId: "1:373209928471:web:40c5201cbafc679e13dd52"
}

const app = initializeApp(firebaseConfig)
export default app
