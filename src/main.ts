import { createApp } from 'vue';
import App from './App.vue';
import Store from './store';
import Router from './router';
import VFocus from './directives/v-focus';

const app = createApp(App);

app.directive(VFocus.name, VFocus);

app
  .use(Store)
  .use(Router)
  .mount('#app');
