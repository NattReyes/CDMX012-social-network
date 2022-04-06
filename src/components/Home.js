/* eslint-disable import/no-cycle */
import { loginGithub } from '../lib/authUser.js';
import { onNavigate } from '../main.js';
import { signInGoogle } from "../lib/authUser.js";

export const Home = () => {
  const htmlBase = `
    <header>
    </header>

    <div class="startPage">
        <div class="headParagraphDiv">
            <br><br><br>
            <p class="headParagraph">
            Inicia sesión 
            </p>
        </div>
        <div class="glass">
            <div class="existingAccountButtons">
                <button class="mainButton" id="buttonExistingUser">Iniciar con usuario</button>
                <button class="secondButton"  id="buttonExistingGoogle">Iniciar con Google<img src="Gmail.png" align="left" id="googleimg">
            </div>
        <div class="existingAccountButtons">
            <button class="secondButton" id="buttonExistingTwitter">Iniciar con Twitter</button>
            <button class="secondButton" id="buttonExistingGitHub">Iniciar con GitHub</button>
        </div>

        <div class="diffStep">
            <p class="bottomParagraph">
            ¿Aún no tienes cuenta?
            </p>
            <button class="diffStepButton" id="registerButton">Regístrate</button>
            </div>
        </div>

    </div>

    `;

  const divHome = document.createElement('div');
  divHome.innerHTML = htmlBase;


  // Botón para iniciar con usuario existente
  const btnExistingUser = divHome.querySelector('#buttonExistingUser');
  btnExistingUser.addEventListener('click', () => onNavigate('/userLogin'));

  // Botón para iniciar con cuenta de Google
  const btnExistingGoogle = divHome.querySelector("#buttonExistingGoogle");
        btnExistingGoogle.addEventListener("click", (e) => {
        signInGoogle ();
        onNavigate("/dashboard");
    });

  // Botón para iniciar con cuenta de Twitter
  const btnExistingTwitter = divHome.querySelector('#buttonExistingTwitter');
  btnExistingTwitter.addEventListener('click', () => onNavigate('/login'));

  // Botón para iniciar con cuenta de GitHub
  const btnExistingGitHub = divHome.querySelector('#buttonExistingGitHub');
  btnExistingGitHub.addEventListener('click', (e) => {
    e.preventDefault();
    loginGithub();
  });

  // Botón para registrar nuevo usuario
  const btnRegister = divHome.querySelector('#registerButton');
  btnRegister.addEventListener('click', () => onNavigate('/register'));

  return divHome;

    //   const HomeDiv = document.createElement('div');
    //   const nodoH1 = document.createElement('h1');
    //   const buttonExistingUser = document.createElement('button');
    //   const buttonExistingGoogle = document.createElement('button');

    //   buttonExistingUser.textContent = "Iniciar con usuario";
    // //   buttonRegister.addEventListener('click', () => {
    // //     onNavigate('/register');
    // //   });
    //   buttonExistingGoogle.textContent = "Iniciar con Google";

    //   nodoH1.textContent = 'Welcome my social network';
    //   HomeDiv.append(nodoH1, buttonExistingUser, buttonExistingGoogle);
    //   return HomeDiv;
};


