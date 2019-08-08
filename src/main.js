import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import axios from './axios' 
import 'element-ui/lib/theme-chalk/index.css';
import VDistpicker from 'v-distpicker';
Vue.use(ElementUI);
Vue.component('v-distpicker',VDistpicker)

//数据仓库的初始化
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
