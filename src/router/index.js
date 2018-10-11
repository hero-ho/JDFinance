import Vue from "vue"
import Router from "vue-router"
import home from "../pages/home/home.vue"
import money from "../pages/money/index.vue"
import ious from "../pages/ious/index.vue"
import raise from "../pages/raise/index.vue"
import download from "../pages/special/download.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: '/money',
      name: 'money',
      component: money
    },
    {
      path: '/ious',
      name: 'ious',
      component: ious
    },
    {
      path: '/raise',
      name: 'raise',
      component: raise
    },
    {
      path: '/download',
      name: 'download',
      component: download
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
