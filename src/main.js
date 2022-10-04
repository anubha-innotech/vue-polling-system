import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import store from './store'
// import axios from 'axios'
const app = createApp(App);

// axios.interceptors.request.use((config => {
//     console.log(config);
// }))

app.use(router);
app.use(store);
app.mount('#app');


import "bootstrap/dist/js/bootstrap.js"
