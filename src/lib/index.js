// aqui exportaras las funciones que necesites

// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';

export const firebaseConfig = {
  apiKey: 'AIzaSyCfOwCLEL8J_PhN7mbExoCHRdkhG7J2XwU',
  authDomain: 'probando-ando-6ad59.firebaseapp.com',
  projectId: 'probando-ando-6ad59',
  storageBucket: 'probando-ando-6ad59.appspot.com',
  messagingSenderId: '1044841164809',
  appId: '1:1044841164809:web:e2b54ac489c44747e488d8',
  measurementId: 'G-L85FK2VG4E',
};

export const app = initializeApp(firebaseConfig);
