import {createRouter,createWebHistory,RouteRecordRaw,} from "vue-router";
import Home from '@/views/Home.vue'
import  Login from '@/views/login/index.vue'
// import dashboard from "@/router/modules/dashboard";
import dashboard from "@/router/modules/dashboard";
// import  Dashboard from '@/views/dashboard/Dashboard.vue'



//拿子级路由  最后拼接成了routeModuleList
const modules: any = import.meta.glob("./modules/**/*.ts", {eager: true});
const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
});
console.log(routeModuleList)



//2.定义路由
//每个路由映射一个组件
//后面在讨论嵌套路由
const routes = [
    // //Home 跳/这个地址
    // {path:'/',component:Home},
    // {path:'/login', name:'login',component: Login},
    // {path:'/dashboard', name:'dashboard',component: Dashboard},
    {
        path :'/',
        redirect:'/login',
        // component: Home
    },
    {
        path :'/login',
        name:'login',
        component:Login,
        meta:{
            title:"登录"
        }
    },
];

const baseRouters = [...routes,...routeModuleList]

//3.创建路由实例并传递`routes`配置
//可以在这里输入更多的配置，
const router = createRouter({
    //4.提供了history 模式
    history:createWebHistory(),
    routes:baseRouters,
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
export {routeModuleList};
export default router

