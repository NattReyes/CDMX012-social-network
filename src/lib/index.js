import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  serverTimestamp,
  orderBy,
  query,
  arrayUnion,
  doc,
  deleteDoc,
  updateDoc,
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
  });
};

// Llenar DOM con posts
export const allPosts = await getDocs(collection(db, 'posts'));
console.log("Posts data!!!!", allPosts);

export const postCollection = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

export const likes = async (id) => {
  const email = auth.currentUser.email;
  const collectionRef = doc(db, 'posts', id);
  const res = await updateDoc(collectionRef, { likes: arrayUnion(email) });
  return res;
};

export const getUserLogged = () => {
  const user = auth.currentUser;
  return user;
};
export const deletePost = async (id) => await deleteDoc(doc(db, 'posts', id))

//export const editPosts= (id) => getDocs(doc(db,'posts',id));
export const getPost = async (id) => await getDoc(doc(db, 'posts', id))

//export const updatePost = (id, newFields) => updateDoc(doc(db,'posts',id),newFields);

export const updatePost = async (id, newPost) => {
  const user = auth.currentUser;
  if (user) {
    const collectionRef = doc(db, 'posts', id);
    console.log(collectionRef)
    await updateDoc(collectionRef, {
      post: newPost
    });
  }
};

//export const updatePost = (id, newPost) => updateDoc(doc(db,'posts',id), newPost);