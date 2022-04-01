// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js';
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
      if (errorCode === 'auth/weak-password') {
        alert('Tu contraseña debe contener al menos 6 carácteres.');
      }
      if (errorCode === 'auth/email-already-in-use') {
        alert('Ya existe una cuenta con este correo, intenta con uno nuevo o Inicia Sesión');
      }
    });
}

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log('¡Login!');
      const user = userCredential.user;
      alert('Login exitoso!');
      onNavigate('/Dashboard');
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/wrong-password') {
        alert('Tu contraseña es incorrecta, intenta de nuevo o da click en "Olivde mi contraseña"');
      }
      if (errorCode === 'auth/invalid-email') {
        alert('Por favor ingresa un correo válido');
      }
      if (errorCode === 'auth/user-not-found') {
        alert('Tu correo aún no ha sido registrado');
      }
    });
};
