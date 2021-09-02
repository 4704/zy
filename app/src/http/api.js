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
// 数据
export function shuj(arg) {
    return service({
        url: request_ur.shuj,
        data: {},
        method: "get",
    });
}
//  设置登陆密码/修改
export function password(arg) {
    return service({
        url: request_ur.password,
        data: arg,
        method: "post"
    })
}
// 个人签到
export function integral(arg) {
    return service({
        url: request_ur.integ,
        data: arg,
        method: "get"
    })
}

export function teacher(arg) {
    return service({
        url: request_ur.teacher + arg,
        data: arg,
        method: 'get'
    })
}
export function kc() {
    return service({
        url: request_ur.kc,
        data: {},
        method: "get"
    })
}
export function mainCourse(arg) {
    return service({
        url: request_ur.mainCourse,
        data: arg,
        method: "post"
    })
}

export function courseInfo(arg) {
    return service({
        url: request_ur.courseInfo + arg,
        data: arg,
        method: "get"
    })
}

export function classfy() {
    return service({
        url: request_ur.classfy,
        data: {},
        method: "get"
    })
}

export function qb(arg) {
    return service({
        url: request_ur.qb,
        data: arg,
        method: "post"
    })
}

export function detal(arg) {
    return service({
        url: request_ur.detal,
        data: arg,
        method: "post"
    })
}