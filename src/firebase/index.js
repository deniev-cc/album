import * as firebase from "firebase";
import "firebase/auth"
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD7piPRx_beccvYaPrf5pRDt9kxRWdWkyI",
    authDomain: "react-test-74809.firebaseapp.com",
    databaseURL: "https://react-test-74809.firebaseio.com",
    projectId: "react-test-74809",
    storageBucket: "react-test-74809.appspot.com",
    messagingSenderId: "50139021209",
    appId: "1:50139021209:web:e4e8545d1ecd328b1c5d08"
};

firebase.initializeApp(firebaseConfig);

export default firebase;