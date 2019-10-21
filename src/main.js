// 入口文件
console.log('OK')

import Vue from 'vue'

import vueRouter from 'vue-router'

Vue.use(vueRouter)

import { Header,Swipe, SwipeItem ,Button} from 'mint-ui';

import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

// import jquery from 'jquery'


Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);


import app from './App.vue'

import router from './router.js'

import moment from 'moment'

Vue.filter('dateFamate',function(dataStr,pattern="YYYY-MM-DD hh:mm:ss"){
   return  moment(dataStr).format(pattern)


})


import vueResource from 'vue-resource'
Vue.use(vueResource)


var vm=new Vue({
    el : '#app',
    render : c => c(app),
    router
})