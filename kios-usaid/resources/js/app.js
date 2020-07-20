
// require('./bootstrap');
import Buefy from 'buefy'
import App from './App'
import router from './router'
import store from './router'
window.Vue = require('vue');

import '~/plugins'
import '~/components'
Vue.config.productionTip = false
Vue.use(Buefy)

const app = new Vue({
    el: '#app',
    store,
    router,
    render : (h) => h(App)
});
