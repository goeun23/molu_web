 /* eslint-disable */
 import { createApp } from 'vue'
 import App from './App.vue'
 import LoadScript from 'vue-plugin-load-script';
 import axios from "axios";
 import moment from 'moment';

 const app = createApp(App)

 app.use(LoadScript);

 app.config.globalProperties.$axios = axios;
 app.config.globalProperties.$moment = moment;
 //  app.config.globalProperties.$axios = axios.create({

 //      proxy: {
 //          // url 리소스를 추가해주자
 //          "^/v1": {
 //              // 해당 리소스가 있는 url일 경우 타겟으로 baseURL을 변경
 //              target: 'http://39.118.30.247:8000',
 //              // 기본 베이스URL을 바꿔줄지 여부
 //              changeOrigin: true
 //          },

 //      }
 //  })

 app.mount('#app')