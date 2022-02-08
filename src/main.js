import { createApp } from 'vue';
import routes from './router';
import App from './App.vue';
import store from './store';

const app = createApp(App);
app.use(routes);
app.use(store);

app.mount('#app');
