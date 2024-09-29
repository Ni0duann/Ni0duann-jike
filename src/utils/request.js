//axios 封装处理

import axios from "axios";
import { getToken, removeToken } from "./token";
import router from "@/router";
// 1.根域名配置
// 2.超时时间
// 3.请求拦截器 /响应拦截器

const request = axios.create({
    baseURL:'http://geek.itheima.net/v1_0',
    timeout: 5000
})

// 请求拦截器
request.interceptors.request.use((config) =>{
    //操作config 注入token数据
    //1.获取到token
    //2.按照后端格式拼接
    const token = getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error)=>{
    return Promise.reject(error)
})

// 相应拦截器
request.interceptors.response.use((response) =>{
    return response.data
},(error)=>{
    // 超出2xx会触发
    if (error.response.status === 401) {
        removeToken()
        router.navigate('/login')
        window.location.reload()
    }
    console.log(error);
    
    return Promise.reject(error)
})

export  {request}