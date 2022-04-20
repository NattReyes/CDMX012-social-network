import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
  orderBy,
  query,
  arrayUnion,
  doc,
  deleteDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js';
// eslint-disable-next-line import/no-cycle
import { app, auth } from './authUser.js';

const db = getFirestore(app);

// Obtención de datos de post

export const savePost = async (inputPost) => {
  const docRef = await addDoc(collection(db, 'posts'), {
    post: inputPost,
    timestamp: serverTimestamp(),
    email: auth.currentUser.email,
    likes: ["esto debería ser un arreglo vacio"],
  });
};

// Llenar DOM con posts
export const allPosts = await getDocs(collection(db, 'posts'));
console.log("Posts data!!!!", allPosts);

export const postCollection = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));


export const getUserLogged = () => {
  const user = auth.currentUser;
  return user;
};
export const deletePost = async (id) => await deleteDoc(doc(db, 'posts', id))
export const likes = (dataID) => {
  console.log("testtt");
 console.log('dataID :>> ', dataID);
};