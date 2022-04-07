import Vue from 'vue'
import App from './App.vue'
import router from './router'

// fontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import des icones que l'on va utiliser
import {faCircleChevronLeft, faCircleChevronRight, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

// import icones utilisées dans la librairie
library.add(faUserSecret, faFacebook, faCircleChevronLeft, faCircleChevronRight)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
