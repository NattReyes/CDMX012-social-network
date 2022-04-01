/* eslint-disable import/no-cycle */
import { createUser } from '../lib/authUser.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const htmlRegister = `
    <div id="register-page">
        <div class="headParagraphDiv">
            <p class="headParagraph">
            Regístrate
            </p>
        </div>

        <form class="loginForm" id="userRegisterForm">
            <label for="email">Correo electrónico</label>
            <input type="email" id="user-email" placeholder='usuario@correo.com'/>
            <label for="password">Contraseña</label>
            <div class = "show-passwords">
                <input type="password" id="user-password" placeholder='******' />
                <span class = "eyes">
                <i id="show1" class="fas fa-eye" style="color: #0e6359;"></i>
                <i id="hide1" class="fas fa-eye-slash" style="color: #0e6359;"></i>
            </span>
            </div>
            <label for="password"> Confirma Contraseña</label>
            <div class = "show-passwords">
                <input type="password" id="confirm-password" placeholder='******' />
                <span class = "eyes-confirm">
                <i id="show2" class="fas fa-eye" style="color: #0e6359;"></i>
                <i id="hide2" class="fas fa-eye-slash" style="color: #0e6359;"></i>
                </span>
            </div>
            <br>
            <p id="error-message-register"></p>

            <button id="registerButton" class="submitButton">Registrarse</button>

        </form>
        
        <div class="diffStep">
                <p class="bottomParagraph">
                ¿Ya tienes cuenta?
                </p>
                <button class="diffStepButton" id="buttonExistingUser">Inicia sesión</button>
            </div>
    </div>

    `;

  const divRegister = document.createElement('div');
  divRegister.innerHTML = htmlRegister;

  // Botón para enviar datos de registro
  const registerButtonAlert = divRegister.querySelector('#registerButton');
  registerButtonAlert.addEventListener('click', (e) => {
    e.preventDefault();
    const userMail = divRegister.querySelector('#user-email').value;
    const userPassword = divRegister.querySelector('#user-password').value;
    console.log(userMail, userPassword);
    createUser(userMail, userPassword);
  });

  // Botón para volver a inicio de sesión
  const btnExistingUser = divRegister.querySelector('#buttonExistingUser');
  btnExistingUser.addEventListener('click', () => onNavigate('/CreatePost'));

  //   const RegisterDiv = document.createElement('div');
  //   const nodoH2 = document.createElement('h2');
  //   const buttonHome = document.createElement('button');

  //   buttonHome.textContent = 'Return Home';
  //   buttonHome.addEventListener('click', () => {
  //     onNavigate('/');
  //   });

  //   nodoH2.textContent = 'Welcome to register';

  //   RegisterDiv.append(nodoH2, buttonHome);
  return divRegister;
};
