import {createRouter,createWebHistory} from "vue-router";

//1.导入组件
import Home from '../views/Home.vue'
import  Login from '../views/login/index.vue'
import  Dashboard from '@/views/dashboard/Dashboard.vue'


//2.定义路由
//每个路由映射一个组件
//后面在讨论嵌套路由
const routes = [
    {path:'/',component:Home},
    {path:'/login', name:'login',component: Login},
    {path:'/dashboard', name:'dashboard',component: Dashboard},
]

//3.创建路由实例并传递'routes'配置
//可以在这里输入更多的配置，
const router = createRouter({
    //4.提供了history 模式
    history:createWebHistory(),
    routes,
})
router.beforeEach((to,from,next)=>{
    if(to.name !="login"){
    //    如果不是登录页面，判断是否登录
        if(!localStorage.getItem("token")){
            next({
                path:"/login",
            });
        }

    }
    next();
});

export default router

