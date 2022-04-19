////////////////////////////////////////////////////////////////////////////////
// Queda como página provisional en caso de extender objetivos de aprendizaje //
////////////////////////////////////////////////////////////////////////////////

/* eslint-disable import/no-cycle */
import { savePost } from '../lib/index.js';
import { onNavigate } from '../main.js';

export const CreatePost = () => {
  const htmlCreatePost = `
    <header>
    </header>

    <div class="postCreator">
        <form class="postForm" id="postCreatorForm">
            <h2 class="postTitles"> Creador de publicación </h2>
            <label for="productPostName">¿Qué producto probaste?</label>
            <textarea required id ="productName" name="textarea" rows="2" cols="40" autofocus></textarea>
            <label for="productPostRate">¿Qué calificación le das?</label>
            <textarea required id ="productRate" name="textarea" rows="1" cols="40" placeholder="10 / 10" autofocus></textarea>
            <label for="productPostReview">¿Cómo fue tu experiencia?</label>
            <textarea required id ="productReview" name="textarea" rows="10" cols="40" autofocus></textarea>

            <button type="submit" class="mainButton" id="buttonCreatePost">Publicar</button>
            <button class="secondButton" id="returnButton">Regresar</button>
        
        </form>
    <div id="postPreview"></div>
</div>


    `;

  const divCreatePost = document.createElement('div');
  divCreatePost.innerHTML = htmlCreatePost;

  // Botón para publicar post
  const btnNewPost = divCreatePost.querySelector('#buttonCreatePost');
  btnNewPost.addEventListener('click', (e) => {
    e.preventDefault();
    const inputPost = document.getElementById('productReview').value;
    savePost(inputPost);
  });

  // Botón para volver a muro
  const buttonReturnWall = divCreatePost.querySelector('#returnButton');
  buttonReturnWall.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/dashboard');
  });

  return divCreatePost;
};
