import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Search from '@/components/Search'
import Buy from '@/components/Buy'
import Name from '@/components/Name'
import Password from '@/components/Password'
import Url from '@/components/Url'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'HelloWorld',
      component: Index,
      children:[
        {
          path: '/index/search',
          name: 'chaxun',
          component: Search
        },
        {
          path: '/index/buy',
          component: Buy
        }
      ]
    },
    {
      path: '/login',
      name: 'HelloWorld',
      component: Login,
      children:[
        {
          path: '/login/name',
          component: Name
        },
        {
          path: '/login/password',
          component: Password
        }
      ]
    },
    {
      path: '/url/:Nname/:Aage',
      name: 'HelloWorld',
      component: Url,
    }
  ]
})
