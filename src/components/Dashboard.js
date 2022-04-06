// 

/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Dashboard = () => {
    const htmlDashboard = `

    <div class="provisionalDashboard">
        <form class="postForm" id="postCreatorForm">
            <label for="productPostReview">¿Qué producto recomendarás hoy?</label>
            <textarea required id ="productReview" name="textarea" rows="10" cols="40" autofocus></textarea>

            <button type="submit" class="mainButton" id="buttonCreatePost">Publicar</button>
        </form>
        
        <div class="dashboardPosts">
        </div>
    </div>

    `;

    const divDashboard = document.createElement("div");
        divDashboard.innerHTML = htmlDashboard;

        // const btnNewPost = divDashboard.querySelector("#buttonCreatePost");
        // btnNewPost.addEventListener("click", () => onNavigate("/createPost"));

        return divDashboard;
    };