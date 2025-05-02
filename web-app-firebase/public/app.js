import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDuQCmoCY_r4NU6yEHF24jAKUplrSL87T4",
  authDomain: "fir-8d271.firebaseapp.com",
  databaseURL: "https://fir-8d271-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-8d271",
  storageBucket: "fir-8d271.appspot.com",
  messagingSenderId: "552591222237",
  appId: "1:552591222237:web:0f733c2215cfcc4b1ac234",
  measurementId: "G-5MQXZQL4EJ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = firebase.auth();
const login = document.getElementById('login');
const logout = document.getElementById('logout');
const userInfo = document.getElementById('user-info');


document.addEventListener('DOMContentLoaded', function() {
  requestUrl = "https://fir-8d271-default-rtdb.asia-southeast1.firebasedatabase.app/emp.json"
  fetch(requestUrl).then(res=>{
    document.getElementById('demo-data').innerHTML = res.json();
  });
});