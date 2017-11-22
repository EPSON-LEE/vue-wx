import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: '微信',
  component: resolve => require(["../components/wechat/wechat"], resolve)
},{
  path: '/contact',
  name: '通讯录',
  component: resolve => require(["../components/contact/contact"], resolve)
},{
  path: '/explore',
  name: '发现',
  component: resolve => require(["../components/explore/explore"], resolve)
},{
  path: '/self',
  name: '我',
  component: resolve => require(["../components/self/self"], resolve)
}]

export default new Router({
  base: "/vue-wechat/",
  routes
})
