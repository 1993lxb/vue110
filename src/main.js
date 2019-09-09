// 入口文件
console.log('OK')

import Vue from 'vue'

import { Header } from 'mint-ui';

import './lib/mui/css/mui.css'

Vue.component(Header.name, Header);


import app from './App.vue'


var vm=new Vue({
    el : '#app',
    render : c => c(app)
})