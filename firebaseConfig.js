import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// Initialize Firebase
//파이어베이스 사이트에서 봤던 연결정보를 여기에 가져옵니다
const firebaseConfig = {
    apiKey: "AIzaSyBhCtGValEIUbcqcgh9aEHSN_if27TEK68",
    authDomain: "yongjinjung-9f206.firebaseapp.com",
    projectId: "yongjinjung-9f206",
    databaseURL: 'https://yongjinjung-9f206-default-rtdb.asia-southeast1.firebasedatabase.app',
    storageBucket: "yongjinjung-9f206.appspot.com",
    messagingSenderId: "976219749206",
    appId: "1:976219749206:web:29b230d562665ac27fb4f7",
    measurementId: "G-65D7TXXJVL"
  };

//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()