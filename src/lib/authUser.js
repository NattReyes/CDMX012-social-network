// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCfOwCLEL8J_PhN7mbExoCHRdkhG7J2XwU',
  authDomain: 'probando-ando-6ad59.firebaseapp.com',
  projectId: 'probando-ando-6ad59',
  storageBucket: 'probando-ando-6ad59.appspot.com',
  messagingSenderId: '1044841164809',
  appId: '1:1044841164809:web:e2b54ac489c44747e488d8',
  measurementId: 'G-L85FK2VG4E',
};

const app = initializeApp(firebaseConfig);

// traernos inizialice
// importar nuestros elementos de firebase igual que inicielize
// crear una funcion llamada createUserwithEmain() espera 2 paramentros email y pass
// la vamos a exportar y se va a ejecuar en ele compoenente correspondiente
// Init firebase app
const auth = getAuth(app);
export function createUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password) // Crea el usuario
    .then((userCredential) => {
      // una vez creado con Éxito, devuelve las credenciales del usuario
      const user = userCredential.user; // trae info del usuario (nos podria servir para despues)
      console.log('¡Registrado Exitosamente!');
      alert('Registrado');
      onNavigate('/UserLogin');
    })

    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/invalid-email') {
        alert('Por favor ingresa un correo válido');
      }
    });
}
