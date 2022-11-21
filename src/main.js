 /* eslint-disable */
 import { createApp } from 'vue'
 import App from './App.vue'
 import LoadScript from 'vue-plugin-load-script';
 import axios from "axios";
 import moment from 'moment';
 import { createRouter, createWebHistory } from 'vue-router';

 const TheFeedLayout = () =>
     import ('./views/TheFeedLayout.vue');
 ///Users/goeun/Desktop/molu_web/src/views/TheFeedLayout.vue
 ///Users/goeun/Desktop/molu_web/src/views/TheRewardBoardLayout.vue
 const TheRewardBoardLayout = () =>
     import ('./views/TheFeedLayout2.vue');

 const routes = [
     { path: '/', component: TheFeedLayout },
     { path: '/newsfeed', component: TheFeedLayout },
     { path: '/reward', component: TheRewardBoardLayout },
 ]

 // Now the app has started!
 const router = createRouter({
     mode: 'history',
     history: createWebHistory(),
     routes,
 });

 const app = createApp(App)
 app.use(router);
 app.use(LoadScript);

 app.config.globalProperties.$axios = axios;
 app.config.globalProperties.$moment = moment;


 app.mount('#app')