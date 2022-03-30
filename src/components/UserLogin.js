/* eslint-disable import/no-cycle */
// import { onNavigate } from '../main.js';

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
                    <div class = "show-passwords">
                    <input type="password" id="login-password" placeholder="******"/>
                    <span class = "eyes-login">
                    <i id="show3" class="fas fa-eye" style="color: #0e6359;"></i>
                    <i id="hide3" class="fas fa-eye-slash" style="color: #0e6359;"></i>
                    </span>
                    </div>
                    <br>
                    <p id="error-message"></p>
                    <button id="form-button-login" class="submit-btn">Ingresar</button>
                </form>
            </div>

            <div class="diffStep">
                <p class="bottomParagraph">
                ¿Aún no tienes cuenta?
                </p>
                <button class="diffStepButton" id="registerButton">Regístrate</button>
            </div>
        </div>

    `;

  const divUserLogin = document.createElement('div');
  divUserLogin.innerHTML = htmlUserLogin;

  // const btnRegister = divHome.querySelector('#registerButton');
  // btnRegister.addEventListener('click', () => onNavigate('/register'));

  return divUserLogin;
};
