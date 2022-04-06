/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { signIn } from '../lib/authUser.js';

export const UserLogin = () => {
    const htmlUserLogin = `
  <div class="userLoginPage">
  <div class="headParagraphDiv">
      <p class="headParagraph">
      Inicia sesión
      </p>
  </div>

  <div class="userAccount">
      <form  class="loginForm" id="userLoginForm">
          <label for="email">Correo electrónico</label>
          <input type="email" id="login-email" placeholder='usuario@correo.com'/>
          <label for="password">Contraseña</label>
          <input type="password" id="login-password" placeholder="******"/>
          <span class = "eyes-login"><br>
          <i id="show3" class="fas fa-eye" style="color: #0e6359;"></i>
          <i id="hide3" class="fas fa-eye-slash" style="color: #0e6359;"></i>
          </span>
          <br>
          <p id="error-message"></p>
          <button id="form-button-login" class="mainButton">Ingresar</button>
      </form>
  </div>

  <div class="diffStep">
      <p class="bottomParagraph">
      ¿Aún no tienes cuenta?
      </p>
      <button class="secondButton" id="registerButton">Regístrate</button>
  </div>
</div>

`;


  const divUserLogin = document.createElement('div');
  divUserLogin.innerHTML = htmlUserLogin;

  const buttonLogin = divUserLogin.querySelector('#form-button-login');
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const userMail = divUserLogin.querySelector('#login-email').value;
    const userPassword = divUserLogin.querySelector('#login-password').value;
    console.log(userMail, userPassword);
    signIn(userMail, userPassword);
    onNavigate('/dashboard');
  });

  const btnRegister = divUserLogin.querySelector('#registerButton');
    btnRegister.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });
  return divUserLogin;

};
