import App from './src/App.vue'
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.baseURL='http://zhiliao.server.zhaokuo.cc';
Vue.use(Router)

const routes = [
  {
    path:'/',
    component:require('./src/pages/ReceiveTask.vue')
  },
  {
    path:'/sendtask',
    component:require('./src/pages/SendTask.vue')
  },
  {
    path:'/joingroup',
    component:require('./src/pages/JoinGroup.vue')
  },
  {
    path:'/login',
    component:require('./src/pages/Login.vue')
  }
];

var router = new Router({routes});

export default new Vue({
  el: '#root',
  router,
  render: h => h(App)
});
