import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// eslint-disable-next-line import/no-cycle
import { app } from './authUser.js';

const db = getFirestore(app);

// Obtención de datos de post

export const savePost = async (inputPost) => {
  const docRef = await addDoc(collection(db, 'post'), {
    post: inputPost,
  });
  console.log('Document written with ID: ', docRef.id);
};

export const readData = async () => {
  const querySnapshot = await getDocs(collection(db, 'post'));
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data())," from index.js";
  });
};

// Llenar DOM con posts



export const allPosts = await getDocs(collection(db, 'post'));
console.log("Posts data!!!!", allPosts);


