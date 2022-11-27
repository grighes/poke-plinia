import { createRouter, createWebHashHistory } from 'vue-router';

import Home from './pages/home.vue';
// import PokeDetail from './components/PokeDetails.vue';
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  // dynamic segments start with a colon
  { path: '/', component: Home },
  // { path: '/about', component: About },
  // { path: '/pokes/:id', component: PokeDetail },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
