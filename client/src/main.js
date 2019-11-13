import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './utils/vuetify' // path to vuetify export
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'

import Vuelidate from 'vuelidate'
import VueSignaturePad from 'vue-signature-pad';
 
Vue.use(VueSignaturePad);
Vue.use(Vuelidate)

Vue.config.productionTip = false

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios;
// Load the token from the localStorage
const token = localStorage.getItem("token");
// Is there is any token then we will simply append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
