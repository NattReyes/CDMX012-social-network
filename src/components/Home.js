/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
    const htmlBase = `
    <header>
    </header>

    <div class="startPage">
        <div class="headParagraphDiv">
            <p class="headParagraph">
            Inicia sesión
            </p>
        </div>

        <div class="existingAccountButtons">
            <button class="mainButton" id="buttonExistingUser">Iniciar con usuario</button>
            <button class="secondButton" id="buttonExistingGoogle">Iniciar con Google</button>
        </div>

        <div class="diffStep">
            <p class="bottomParagraph">
            ¿Aún no tienes cuenta?
            </p>
            <button class="diffStepButton" id="registerButton">Regístrate</button>
        </div>
    </div>

    `;

    const divHome = document.createElement('div');
    divHome.innerHTML = htmlBase;

    const btnExistingUser = divHome.querySelector('#buttonExistingUser');
    btnExistingUser.addEventListener('click', () => onNavigate('/userLogin'));

    const btnExistingGoogle = divHome.querySelector('#buttonExistingGoogle');
    btnExistingGoogle.addEventListener('click', () => onNavigate('/login'));

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