import {
  onSnapshot,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
import {
  savePost, postCollection, likes, getUserLogged, deletePost, getPost, updatePost,
} from '../lib/index.js';
// eslint-disable-next-line import/no-cycle
import { auth } from '../lib/authUser.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

// Dashboard base
export const Dashboard = () => {
  const htmlDashboard = `

    <div class="provisionalDashboard">
    <button id="singOut">salir</button>
        <form class="postForm" id="postCreatorForm">
            <label for="productPostReview">¿Qué producto recomendarás hoy?</label>
            <textarea required id ="productReview" name="textarea" rows="10" cols="40" autofocus></textarea>

            <button type="submit" class="mainButton" id="buttonCreatePost">Publicar</button>
        </form>
        
        <div class="posts-container" id="postsContainer">
 
        </div>
    </div>

    `;

  const divDashboard = document.createElement('div');
  divDashboard.innerHTML = htmlDashboard;

  // Botón para publicar post
  const btnNewPost = divDashboard.querySelector('#buttonCreatePost');
  btnNewPost.addEventListener('click', (e) => {
    e.preventDefault();
    const inputPost = document.getElementById('productReview').value;
    savePost(inputPost);
  });

  const singOut = divDashboard.querySelector('#singOut');
  singOut.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/userLogin');
  });

  // Feed de posts en pantalla Dashboard
  const dashboardPosts = divDashboard.querySelector('#postsContainer');
  onSnapshot(postCollection, (querySnapshot) => {
    const feedPosts = [];
    if (querySnapshot.metadata.hasPendingWrites === false) {
      dashboardPosts.innerHTML = '';
      querySnapshot.forEach((doc) => {
        feedPosts.push({ id: doc.id, infopost: doc.data().post });

        // console.log("obteniendo email en doc >>>", doc.data().email);
        // console.log("Obteniendo usuario >>>", auth.currentUser.email);

        const user = doc.data().email;
        const post = doc.data().post;
        // let editStatus = false;

        dashboardPosts.innerHTML += `
        <div class="div-post">
          <section class="postHead">
            <div class="userDetail">
              <p id="userID">${user}</p>
            </div>
            <div>
              <button class="editButton" value="${doc.id}" style="display:${auth.currentUser.email === doc.data().email ? 'block' : 'none'}">Editar</button>
            </div>  
          </section>
          <section class="postBody">
            <div>
              <p id="postContent">${post}</p>
            </div>
          </section>
          <section class="postFooter">
             <div>
              <p id="likesCounter"></p>
              <button id="likeButton">imglike</button>
              <button class="buttonUpdate" value="${doc.id}" style="display:${auth.currentUser.email === doc.data().email ? 'block' : 'none'}">Actualizar</button>
              <button class="deleteButton" value="${doc.id}" style="display:${auth.currentUser.email === doc.data().email ? 'block' : 'none'}">Borrar</button>
            </div>
          </section>
        </div>
          `;
        const btnDeletePost = dashboardPosts.querySelectorAll('.deleteButton');
        //console.log(btnDeletePost)
        btnDeletePost.forEach((btn) => {
          // eslint-disable-next-line func-names
          btn.addEventListener('click', () => {
            deletePost(btn.value);
            console.log(btn.value);
          });
		 // eslint-disable-next-line no-tabs
		 });

        const inputEditar = dashboardPosts.querySelectorAll('.editButton');
        //console.log('esto son los inputs ', inputEditar);
        let editPost = false;
        inputEditar.forEach((editBtn) => {
          editBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            const id = editBtn.value;
            console.log(editBtn.value);
            const getDocPosById = await getPost(id);
            const getInfoPost = getDocPosById.data();
            console.log(getInfoPost);
            const inputValue = divDashboard.querySelector('#productReview');
            inputValue.value = getInfoPost.post;
            editPost = true;
            if (editPost) {
              const buttonUpdates = dashboardPosts.querySelectorAll('.buttonUpdate');
              buttonUpdates.forEach((btnUpdate) => {
                btnUpdate.addEventListener('click', () => {
                const newPost = divDashboard.querySelector('#productReview').value;
                console.log(newPost);
                updatePost(id, newPost);
              });
            });
            } else {
              editPost = false;
            }
          });
        });
      });
    }
  });

  // Botón para dar like a post
  const addLikeButton = divDashboard.querySelectorAll('#likeButton');
  addLikeButton.forEach((btn) => {
    btn.addEventListener('click', function () {
      const dataID = this.getAttribute('data-id');
      likes(dataID);

      // const snapPost = await getPost(id);
      const post = snapPost.data();
      const countLike = post.likes.length;
      const existsLike = post.likes.includes(getUserLogged().email);

      // Acá va a ir la parte para insertar el ícono y el contador en el DOM xD
    });
  });

  return divDashboard;
};
