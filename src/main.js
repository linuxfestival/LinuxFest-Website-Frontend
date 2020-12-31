import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueWait from 'vue-wait'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTwitter, faGoogle, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(
  faTwitter,
  faGoogle, 
  faInstagram, 
  faTelegram
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

let vueScrollToConfig = {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: -50,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
};
Vue.config.productionTip = false;
Vue.use(VueScrollTo, vueScrollToConfig);
Vue.use(VueWait);
Vue.use(Notifications);
Vue.use(Vuelidate);


new Vue({
  router,
  store,
  render: h => h(App),

  wait: new VueWait({
    // Defaults values are following:
    useVuex: false,              // Uses Vuex to manage wait state
    vuexModuleName: 'wait',      // Vuex module name

    registerComponent: true,     // Registers `v-wait` component
    componentName: 'v-wait',     // <v-wait> component name, you can set `my-loader` etc.

    registerDirective: true,     // Registers `v-wait` directive
    directiveName: 'wait',       // <span v-wait /> directive name, you can set `my-loader` etc.

  }),
}).$mount('#app');
