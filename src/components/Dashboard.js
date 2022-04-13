
import { savePost, postCollection } from '../lib/index.js';
import { onSnapshot,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// eslint-disable-next-line import/no-cycle

export const Dashboard = () => {
  const htmlDashboard = `

    <div class="provisionalDashboard">
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

  const btnNewPost = divDashboard.querySelector('#buttonCreatePost');
  btnNewPost.addEventListener('click', (e) => {
    e.preventDefault();
    const inputPost = document.getElementById('productReview').value;
    savePost(inputPost);
  });

  const dashboardPosts = divDashboard.querySelector("#postsContainer");

  onSnapshot(postCollection, (querySnapshot) => {
    console.log("Kesestawea??", querySnapshot);
    let feedPosts = [];
    if (querySnapshot.metadata.hasPendingWrites === false) {
      dashboardPosts.innerHTML = "";
      querySnapshot.forEach((doc) => {
        feedPosts.push({ id: doc.id, infopost: doc.data().post });

        let user = doc.id;
        let post = doc.data().post;
          console.log("Esta otra wea:::", doc.data());

      dashboardPosts.innerHTML += `
        <div class="div-post">
          <section class="postHead">
            <div class="userDetail">
              <p id="userID">${user}</p>
            </div>
            <div>
              <button id="editButton">Editar</button>
            </div>  
          </section>
          <section class="postBody">
            <div>
              <p id="postContent">${post}</p>
            </div>
          </section>
          <section class="postFooter">
             <div>
              <p id="likesCounter">aquivanloslikes</p>
              <button id="likeButton">imglike</button>
              <button id="deleteButton">imgbotedebasura</button>
            </div>
          </section>
        </div>
          `;
      });
    };
  });

  
  return divDashboard;

};
