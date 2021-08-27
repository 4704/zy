import axios from 'axios'
import { base_url } from '@/config'
// 基础配置
let service = axios.create({
        baseURL: base_url, //这个就是base_url,结合
        timeout: 5000, //请求超时
    })
    // 请求拦截
service.interceptors.request.use(config => {
    // token设置 把token添加到请求头当中 vuex

    // config.headers['Authorization'] = sessionStorage.getItem('token')
    return config
}, error => {
    console.log(error);
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(res => {

    // 关闭loading
    // loading.clear()
    return Promise.resolve(res)
}, error => {
    // loading.clear()
    console.log('err' + error);
    return Promise.reject(error)
})
export default service