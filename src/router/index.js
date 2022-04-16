import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

import CalculateView from '../views/CalculateView.vue'
import ReportList from '../views/ReportList.vue'
import ResultView from '../views/ResultView.vue'
import SettingsView from '../views/ReadonlySettingsView.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/calculate',
    name: 'Calculate',
    component: CalculateView,
    meta: { isMain: true },
    beforeEnter(_routeTo, _routeFrom, next) {
      // Clear the cache of the previous calculation before
      // rending the calculate view.
      store.dispatch('calc/clear')
      next()
    },
  },
  {
    path: '/reports',
    name: 'ReportList',
    component: ReportList,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsView,
  },
  // {
  //   path: '/learn',
  //   name: 'Learn',
  //   component: Learn,
  // },
  {
    path: '/result',
    name: 'Result',
    component: ResultView,
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    props: true,
  },
  {
    path: '*',
    redirect: { name: 'Calculate' },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
