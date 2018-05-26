import Vue from 'vue'
import Router from 'vue-router'
/*import Home from  '../pages/home'*/
import Detail from '../pages/goodsDetail'
import Msg from '../components/Message.vue'
import List from "../components/list"
import Shopcart from "../pages/shopcart"
import CommonFooter from "../components/commonFooter";

Vue.use(Router)


/*export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:'home'
      }
    },
    {
      path:'/msg',
      component:Msg
    },
    {
      path:'/detail',
      component:Detail,
      children:[
        {
          path:'/msg',
          component:Msg
        }
      ]
    }
  ]
})*/

const routes = [
  {
    path:'/',
    component:resolve=>require(['../pages/home'],resolve),
    meta:{
      title:'home'
    }
    },
  {
    path:'/shopcart',
    component:Shopcart
  },

  {
    path:'/msg',
    component:Msg
  },
  {
    path:'/detail',
    component:Detail,
    children:[
      {
        path:'msg',
        component:Msg
      }
    ]
  },
  {
    path:'/list',
    component:List

  }
  // {
  //   path:'/a',
  //   component:CommonFooter,
  //   children:[
  //     {
  //       path:'list',
  //       component:List
  //     },
  //     {
  //       path:'msg',
  //       component:Msg
  //     }
  //   ]
  // }
]
export default  new Router({
  routes
})
