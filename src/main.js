// 入口文件
console.log('OK')

import Vue from 'vue'

import vueRouter from 'vue-router'

Vue.use(vueRouter)

import { Header,Swipe, SwipeItem } from 'mint-ui';

import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


import app from './App.vue'

import router from './router.js'


import vueResource from 'vue-resource'
Vue.use(vueResource)


var vm=new Vue({
    el : '#app',
    render : c => c(app),
    router
})