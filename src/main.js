import Vue from 'vue'
import App from './App.vue'
//import router from './router'
import store from './store'


//导入rem
//import rem from './utills/rem'

import '@vant/touch-emulator'

import 'lib-flexible/flexible'
//导入axios vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//引入阿里巴巴矢量图库
import './assets/iconfont/iconfont.css'

//引入vuex
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueAxios, axios)
import router from './router/index.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
//

