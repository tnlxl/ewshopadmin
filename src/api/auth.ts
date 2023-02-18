//这个request utils里面的request
import request from "@/utils/request";
//这里放的是认证
//登录的方法
//写完这里 去user.ts 中导入这个方法
export function login(data:any){
    //这个是上边的 request return的promise对象
    return request({
        url:'/api/auth/login',
        method:'post',
        data,
    });
}

//用户接口
export function user(){
    return request({
    url:"/api/admin/user",
        method:'GET',
});
}
                 //退出登录
export function logout(){
    return request({
        url:'api/auth/logout',
        method:'post'
    });
}
