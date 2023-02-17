//1.导入 axios
import axios  from "axios"

//2.创建 axios 对象
const request =axios.create({
    baseURL:"https://api.shop.eduwork.cn/",
    timeout:8000
})

const win:any = window;

//3.请求拦截器
request.interceptors.request.use(config =>{
    //1.获取token
    const token = localStorage.getItem("token");
    //2.判断token 是否存在
    if(token){
    //    3.如果存在，把token添加到请求头中
        config .headers!.Authorization = `Bearer ${token}`
    }
    return config;

},(error) => {
    // 报错的是定义前置拦截器时候抛出一个错误信息
    return Promise.reject(error);
});


//4.响应拦截器
request.interceptors.response.use(response=>{
    return response.data;

},(error)=>{
    const {response}=error;
    switch (response.status){
        case 401:
            win.$message.error("登录失败，平重新登录");
            localStorage.removeItem("token");
            setTimeout(()=>{
                window.location.href="/login";
            },500);
            break;
        case 404:
            win.$message.error("接口不存在");
            break;
        case 500:
        case 502:
            win.$message.error("网络异常");
            break;
        case 422:{
            const msg =response.data.errors[Object.keys(response.data.errors)[0][0]];
            win.$message.error(msg);
            break;
        }
    }
    return Promise.reject(error);
})

//导出axios实例 对外暴露
export default request;