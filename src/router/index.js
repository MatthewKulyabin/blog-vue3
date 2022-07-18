import { createRouter, createWebHistory } from 'vue-router';

import store from '../store';
import MainView from '../views/MainView.vue';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: MainView,
  },
  {
    path: '/main/:id',
    component: () => import('../views/ArticleView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: () => import('../views/SignUpView.vue'),
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/AdminView.vue'),
  },
  {
    path: '/admin/:id',
    component: () => import('../views/AdminArticleView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
