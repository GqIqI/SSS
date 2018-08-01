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
import Error from '@/components/Error'
import Count from '@/components/Count'


Vue.use(Router)

export default new Router({
  mode:'history',//hash 带#  为默认值
  routes: [ //子页面
    { //to：路由将要跳转的路径信息，信息是包含在对像里边的。
     //from：路径跳转前的路径信息，也是一个对象的形式。
     //next：路由的控制参数，next(true)和next(false)不跳转。
      path: '/index',
      name: 'HelloWorld',
      component: Index,
      beforeEnter: (to, from, next) => {  //beforeRouteEnter：在路由进入前的钩子函数。
                                         //beforeRouteLeave：在路由离开前的钩子函数。  
       console.log(to) 
       console.log(from) 
       next(true)  //跳转
      }, 
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
      name: '222',
      component: Login,
      children:[  //子页面
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
     {  //url传参
      path: '/count',
      name: 'Count',
      component: Count,
    },

    {  //url传参
      path: '/url/:Nname/:Aage',
      name: 'Url',
      component: Url,
    },
    {    //重定位到首页
     path: '/test',
     redirect:'/index'
    },
    {  //重定位传参
     path: '/test/:Nname/:Aage',
     redirect:'/index/:Nname/:Aage'
    },
    {  //重定位后改变路径名
      path: '/index',
      component: Index,
      alias:'/love'
    },
    {  //错误404
      path: '*',
      component: Error
    }
  ]
})
