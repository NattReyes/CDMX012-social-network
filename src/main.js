/* eslint-disable import/no-cycle */
import { Home } from './components/Home.js';
import { UserLogin } from './components/UserLogin.js';
import { Register } from './components/Register.js';
import { CreatePost } from './components/CreatePost.js';
import { Dashboard } from './components/Dashboard.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,
  '/userLogin': UserLogin,
  '/createPost': CreatePost,
  '/dashboard': Dashboard,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(routes[window.location.pathname]());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
