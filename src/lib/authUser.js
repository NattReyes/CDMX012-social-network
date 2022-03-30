// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { app } from './index.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// traernos inizialice
// importar nuestros elementos de firebase igual que inicielize
// crear una funcion llamada createUserwithEmain() espera 2 paramentros email y pass
// la vamos a exportar y se va a ejecuar en ele compoenente correspondiente
// Init firebase app
export const auth = getAuth(app);
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
      // const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('Por favor ingresa un correo válido');
      }
    });
}
