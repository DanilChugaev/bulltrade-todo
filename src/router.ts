import { createRouter, createWebHistory } from 'vue-router';

import Index from './pages/index.vue';
import Edit from './pages/edit.vue';

const routes = [
  { path: '/', component: Index },
  { path: '/edit/:id', component: Edit },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;