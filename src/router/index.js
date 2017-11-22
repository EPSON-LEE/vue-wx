import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
  path: '/',
  name: 'HomePage',
  component: resolve => require(["../components/wechat/wechat"], resolve)
}]

export default new Router({
  base: "/vue-wechat/",
  routes
})
