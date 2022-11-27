 /* eslint-disable */
 import { createApp } from 'vue'
 import App from './App.vue'
 import LoadScript from 'vue-plugin-load-script';
 import axios from "axios";
 import moment from 'moment';
 import { createRouter, createWebHistory } from 'vue-router';

 const TheFeedLayout = () =>
     import ('./views/TheFeedLayout.vue');

 const TheRewardBoardLayout = () =>
     import ('./views/TheFeedLayout2.vue');


 const TheNotificationLayout = () =>
     import ('./views/TheMessageLayout.vue');

 const routes = [
     { path: '/', component: TheFeedLayout },
     { path: '/newsfeed', component: TheFeedLayout },
     { path: '/reward', component: TheRewardBoardLayout },
     // { path: '/notification', component: TheNotificationLayout },
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
 moment.updateLocale("kr", {
     relativeTime: {
         future: "in %s",
         past: "%s ago",
         s: function(number, withoutSuffix, key, isFuture) {
             return number + " seconds";
         },
         m: "1 minutes",
         mm: function(number, withoutSuffix, key, isFuture) {
             return number + " minutes";
         },
         h: "an hour",
         hh: "%d hours",
         d: "a day",
         dd: "%d days",
         M: "a month",
         MM: "%d months",
         y: "a year",
         yy: "%d years",
     },
 });
 app.config.globalProperties.$moment = moment;


 app.mount('#app')