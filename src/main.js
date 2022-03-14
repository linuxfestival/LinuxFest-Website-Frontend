import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueWait from 'vue-wait'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'
import Notifications from 'vue-notification'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter, faGoogle, faInstagram, faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Teacher from '@/views/Teachers/components/Teacher.vue'
import fa from './locales/fa.json'

library.add(
  faTwitter,
  faGoogle,
  faInstagram,
  faTelegram,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.component('Teacher', Teacher)

const vueScrollToConfig = {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: -50,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
}
Vue.config.productionTip = false
Vue.use(VueScrollTo, vueScrollToConfig)
Vue.use(VueWait)
Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'fa',
  messages: { fa },
})

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),

  wait: new VueWait({
    // Defaults values are following:
    useVuex: false, // Uses Vuex to manage wait state
    vuexModuleName: 'wait', // Vuex module name

    registerComponent: true, // Registers `v-wait` component
    componentName: 'v-wait', // <v-wait> component name, you can set `my-loader` etc.

    registerDirective: true, // Registers `v-wait` directive
    directiveName: 'wait', // <span v-wait /> directive name, you can set `my-loader` etc.

  }),
}).$mount('#app')
