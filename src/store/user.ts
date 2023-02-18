// import {defineStore} from "pinia";
// import {login,user} from "../api/auth";
//
// interface IUserState{
//     id:'app-user',
//     token:String
//     username:String
//     avatar_url:string[]
//     permissions:String[]
//     info:any
// }
// export const useUserStore = defineStore({
//       //1.store 的名称
//     id:'app-user',
//     state:() =>({
//         token:localStorage.getItem('token')||'',
//         username:'',
//         avatar_url:'',
//         permissions:[],
//         info:{}
//     }),
//     getters:{
//         getToken():string{
//             return this.token;
//         },
//         getAvatar(): string{
//             return this.avatar_url;
//         },
//         getUserName(): string{
//             return this.username;
//         },
//         getPermissions(): string[] {
//             return this.permissions;
//         },
//     },
//     actions:{
//         setToken(token:string){
//             //在本地存储
//             localStorage.setItem('token',token)
//             this.token = token;
//         },
//         setAvatar(avatar_url:string){
//             this.avatar_url=avatar_url;
//         },
//         setUserInfo(info:object){
//             this.info = info;
//         },
//         setUserName(username:string){
//             this.username = username;
//         },
//         setPermissions(permissions: string[]) {
//             this.permissions = permissions;
//         },
//     //    异步登录
//         async login (userInfo:object){
//             try{
//                 const response:any = await login(userInfo);
//
//                 if(response.access_token){
//                     this.setToken(response.acess_token);
//                 }
//             }catch (error){
//
//             }
//         },
//     }
// })

import {defineStore} from "pinia";
//导入api 文件夹中auth.ts 的登录方法
import {login,user} from "@/api/auth";

// 定义state中的数据类型
export interface IUserState {
    token: string;
    username: string;
    avatar_url: string;
    permissions: string[];
    info: any;
}


export const useUserStore = defineStore({
    id: "app-user",
    //数据类型IUserState
    state: (): IUserState => ({
        //点击登录的时候 response  登陆成功有token 就调用settoken这个方法，把token传过去
        //登录保存token   一刷新看token拿到了就给他拿不到就给个空
        //这里的token相当于key 也就是名字
        token: localStorage.getItem("token") || "", // 在页面刷新时已经保留token
        //用户名
        username: "",
        //头像
        avatar_url: "",
        //权限
        permissions: [],
        //用户信息
        info: {},
    }),
    //获取
    getters: { // 接收
        getToken(): string {
            //return 的是state:里面的数据
            return this.token;
        },
        getAvatar(): string {
            return this.avatar_url;
        },
        getUserName(): string {
            return this.username;
        },
        getPermissions(): string[] {
            return this.permissions;
        },
    },
    actions: {
        //未来调用setToken 这个方法  给他传一个token过来
        setToken(token: string) {
            // sessionStorage.setItem('token',token); // 一开新的窗口,token就会消失
            // 本地储存token  localStarage本地存储
            localStorage.setItem("token", token);
            //两个参数 设置k：value 这样保存
            //在状态保存token
            //把传过来的token赋值给当前对象的token  当前对象的token是state里面的token
            this.token = token;
        //    vuex中一刷新token就没有了
        //pinia 中一刷新token 也就没有了
        },
        setAvatar(avatar_url: string) {
            this.avatar_url = avatar_url;
        },
        setUserInfo(info: object) {
            this.info = info;
        },
        setUserName(username: string) {
            this.username = username;
        },
        setPermissions(permissions: string[]) {
            this.permissions = permissions;
        },
        // 异步的登录方法
        //userInfo 是参数名 指定是对象类型
        //我们一会在登录页面调状态的登录方法就会把登录的信息传到状态 user.ts 步异登录方法的userInfo 这个信息再传给她前面的login
        //最外层的login是状态的登录方法
        async login(userInfo: object) {
            try {
                //这个login是上面导入的login（是api里面的登录方法）
                //调请求（异步请求） response拿到响应 判断响应这里看的手册api返回的值
                const response: any = await login(userInfo);
                console.log(response)
                //如果有token就
                if (response.access_token) {
                    //把这里的token 传给setToken 这个方法进行本地存储
                    this.setToken(response.access_token);
                    // 登录之后，token已经拿到了，然后getUser获取调用,
                    //获取用户信息
                    return await this.getUser();
                }
            } catch (error) {
                // console.log(error);
            }
        },

        //异步获取用户信息方法  异步登录走的请求
        //在这个之前先写登录页面
        async getUser(){
            try{
                const response:any = await user();
                this.setUserInfo(response);
                this.setAvatar(response.avatar_url);
                this.setUserName(response.name);
                return response;
            }catch (error){
                console.log(error)
            }
        }
    }
});