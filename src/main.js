import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header/HeaderComp.vue'
import Router from './routes';
import Store from './Store';
const app = createApp(App);


app.component('app-header', Header);
app.use(Router);
app.use(Store)
app.mount('#app')