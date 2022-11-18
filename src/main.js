 /* eslint-disable */
 import { createApp } from 'vue'
 import App from './App.vue'
 import LoadScript from 'vue-plugin-load-script';

 const app = createApp(App)
 app.use(LoadScript);
 //console.log(app)
 //app.config.globalProperties.$loadScript("./src/assets/js/main-min.js")
 //app.loadScript("./src/assets/js/main-min.js")
 //App.$LoadScript("http://code.jquery.com/jquery-2.1.4.min.js")
 //  .LoadScript("/js/main.min.js")
 //  .LoadScript("/js/script.js")
 //  .LoadScript("/js/map-init.js")
 app.mount('#app')