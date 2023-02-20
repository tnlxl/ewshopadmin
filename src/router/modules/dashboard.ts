import {RouteRecordRaw} from "vue-router";
import Layout from "@/layout/index.vue";
import { renderIcon } from "@/utils";
import {Browsers} from "@vicons/ionicons5";
const  routeName = "dashboard";
// /**
 // * @param name 路由名称, 必须设置,且不能重名
 // * @param meta 路由元信息（路由附带扩展信息）
 // * @param redirect 重定向地址, 访问这个路由时,自定进行重定向
 // * @param meta.disabled 禁用整个菜单
 // * @param meta.title 菜单名称
 // * @param meta.icon 菜单图标
 // * @param meta.sort 排序越小越排前
 // */
//定义数组来放路由格式

const routes:Array<RouteRecordRaw> = [
    {
        path:"/dashboard",
        //上边定义的name
        name:routeName,
        component:Layout,
        //重定向
        redirect:"/dashboard/console",
        meta:{
            title:"首页统计",
            icon :renderIcon(Browsers),
            sort:0,
        },
        //子集路由
        children:[
            {
                path:"console",
                name:`${routeName}_console`,
                meta:{
                    title:"主控台",
                    //小图标
                    icon:"",
                },
                //指向实际展示的页面
                component:()=> import('@/views/dashboard/Dashboard.vue')
            }
        ]
    }
];
export default  routes;