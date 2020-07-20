import Vue from 'vue'
import Vuex from 'vuex'

import lang from './modules/lang'
import auth from './modules/auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced : true,
  modules: {
    lang: lang,
    auth: auth
  }
})

export default store
