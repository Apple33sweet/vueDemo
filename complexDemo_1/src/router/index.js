import HelloWorld from '../components/HelloWorld.vue'
import login from '../components/login/login.vue'
import menu from '../components/menu/topMenu.vue'
let routes=[
  {path: '/helloWorld', name: 'HelloWorld', component: HelloWorld},
  {path: '/login/:id', name: 'login', component: login},
  {path: '/menu', name: 'menu', component: menu},]
export default routes
