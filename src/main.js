import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VeeValidate from 'vee-validate'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import vuetify from './plugins/vuetify'

library.add(faUser, faUserPlus, faHome, faSignInAlt, faSignOutAlt);

Vue.config.productionTip = false;

Vue.use(VeeValidate);
Vue.component('font-awesome-icons', FontAwesomeIcon);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
