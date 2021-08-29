import service from "./service";
import request_ur from "./request_ur";
// 定义请求方法，然后导出

// 获取验证码
export function smsCode(arg) {
    return service({
        url: request_ur.smsCode,
        data: arg,
        method: "post",
    });
}

// 登录
export function login(arg) {
    return service({
        url: request_ur.login,
        data: arg,
        method: "post",
    });
}
// tabbar接口
export function tabbar(arg) {
    return service({
        url: request_ur.tabbar,
        data: {},
        method: "get",
    });
}
// 轮播
// export function banner(arg) {
//     return service({
//         url: request_ur.banner,
//         data: arg,
//         method: "get"
//     })
// }
// 数据
export function shuj(arg) {
    return service({
        url: request_ur.shuj,
        data: {},
        method: "get",
    });
}