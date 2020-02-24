/*
 * @Author: your name
 * @Date: 2020-02-23 15:09:06
 * @LastEditTime: 2020-02-23 15:25:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jun-yuan-qi\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
