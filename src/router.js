import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Head from './components/head.vue'
import Index from './components/index.vue'
import Footer from './components/footer.vue'
import sjrz from './components/sjrz.vue'
import gywm from './components/gywm.vue'
import rjxz from './components/rjxz.vue'
import ydzf from './components/ydzf.vue'
import fksb from './components/fksb.vue'
import sjxt from './components/sjxt.vue'
import zmdl from './components/zmdl.vue'
import cwdls from './components/cwdls.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',component: Home},
    {path:'/head',component:Head},
    {path:'/index',component:Index},
    {path:'/footer',component:Footer},
    {path:'/sjrz',component:sjrz},
    {path:'/gywm',component:gywm},
    {path:'/rjxz',component:rjxz},
    {path:'/ydzf',component:ydzf},
    {path:'/fksb',component:fksb},
    {path:'/sjxt',component:sjxt},
    {path:'/zmdl',component:zmdl},
    {path:'/cwdls',component:cwdls},
  ]
})
