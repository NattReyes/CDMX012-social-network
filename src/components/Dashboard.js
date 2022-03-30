// 

/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Dashboard = () => {
    const htmlDashboard = `

    <div class="provisionalDashboard">
        <div class="containerButtonCreatePost">
            <button id="buttonCreatePost">Crear una publicación</button>
        </div>
    </div>

    `;

    const divDashboard = document.createElement("div");
        divDashboard.innerHTML = htmlDashboard;

        const btnNewPost = divDashboard.querySelector("#buttonCreatePost");
        btnNewPost.addEventListener("click", () => onNavigate("/createPost"));

        return divDashboard;
    };