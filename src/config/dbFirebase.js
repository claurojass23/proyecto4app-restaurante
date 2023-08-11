import { initializeApp } from "firebase/app";
import{ getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtNj4KowXzK1zKHPV3cEc56GhL4XH1Xl4",
  authDomain: "ucamp4-2d56e.firebaseapp.com",
  projectId: "ucamp4-2d56e",
  storageBucket: "ucamp4-2d56e.appspot.com",
  messagingSenderId: "1003580541293",
  appId: "1:1003580541293:web:80915b63ef777d08dfb264"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export default db