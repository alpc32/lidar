import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

/**
* icon : the icon show in the sidebar
* hidden : if `hidden:true` will not show in the sidebar
* redirect : if `redirect:noredirect` will not redirct in the levelbar
* noDropdown : if `noDropdown:true` will not has submenu in the sidebar
* meta : `{ role: ['admin'] }`  will control the page role
**/
export const constantRouterMap = [
  { path: '/404', component: _import('404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{ path: 'dashboard', component: _import('dashboard/index') }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Config',
    icon: 'zujian',
    children: [
      { path: 'index', name: 'main', icon: 'zonghe', component: _import('page/form') }
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: 'noredirect',
    icon: 'tubiao',
    noDropdown: true,
    children: [{ path: 'index', name: 'View', component: _import('logtable/index') }]
  },
  {
    path: '/test',
    component: Layout,
    icon: 'tubiao',
    redirect: 'noredirect',
    noDropdown: true,
    children: [{ path: 'index', name: 'Dev', component: _import('playlog/PlayLidar') }]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

