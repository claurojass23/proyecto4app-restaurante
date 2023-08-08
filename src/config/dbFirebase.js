import { initializeApp } from "firebase/app";
import{ getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhMU_J65fbzq9kPpiZF4Zg2YglLpj63lA",
    authDomain: "proyecto4-3beec.firebaseapp.com",
    projectId: "proyecto4-3beec",
    storageBucket: "proyecto4-3beec.appspot.com",
    messagingSenderId: "920964884614",
    appId: "1:920964884614:web:cdcdd28ffa02f9b72b4907",
    measurementId: "G-YSQQ6DWYS8"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app)

  export default db