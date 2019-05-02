import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from "@/components/Header";
import TabBar from "@/components/Footer";
Vue.config.productionTip = false
Vue.component({
  "Header" : Header,
  "TabBar" : TabBar
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
