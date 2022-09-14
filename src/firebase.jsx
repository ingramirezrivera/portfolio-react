import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-TXzSYruYHRk92fwBhWv6qv8ZSEfh_S4",
  authDomain: "portfolio-react-6a0ea.firebaseapp.com",
  projectId: "portfolio-react-6a0ea",
  storageBucket: "portfolio-react-6a0ea.appspot.com",
  messagingSenderId: "108205985628",
  appId: "1:108205985628:web:34b838238f7cc23f9cbb99"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

