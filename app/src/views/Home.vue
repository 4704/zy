<template>
  <div class="home">
    <img src="@/assets/images/A_03.jpg" alt="" class="img">
    <div class="box">
      <i class="icon iconfont icon-mobile"></i>
      <input type="text" placeholder="请输入手机号" v-model="mobile">
      <button class="btn">{{yzm}}</button><br>
      <i class="icon iconfont icon-protection"></i>
      <input type="text" placeholder="请输入验证码" v-model="ym">
    </div>
    <div class="a">
      <button class="ad" @click="add">登录</button>
      <p class="aa">*未注册的手机号将自动注册 <span>密码登录</span></p>

    </div>
    <p class="s">第三方登录</p>

    <div class="h1">
      <div class="tp">
        <span><img src="@/assets/images/A1_03.jpg" alt="" class="w"></span><br>
        微信登录
      </div>
      <div class="www">
        <span><img src="@/assets/images/A_05.jpg" alt="" class="w"></span><br>
        QQ登录
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        yzm: "获取验证码",
        mobile: "",
        ym: "",
      }
    },
    // mounted() {

    // },
    methods: {
      async add() {
        let {
          data: res
        } = await this.axios.post('http://120.53.31.103:84/api/app/login?mobile=' + this.mobile)
        // console.log(res);
      }
    },
  }
</script>
<style>
  .h1 {
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    font-size: 13px;
    text-align: center;
    color: #999;
  }

  .w {
    width: 30px;
    height: 30px;
  }

  .s {
    margin-top: 90px;
    text-align: center;
    color: #999;
    font-size: 13px;
  }

  .aa {
    display: flex;
    width: 80%;
    font-size: 10px;
    justify-content: space-between;
    color: #999;
  }

  .img {
    width: 100%;
    height: 100px;
  }

  .icon-protection {
    color: #eb6100;
  }

  .icon-mobile {
    color: #eb6100;
  }

  .btn {
    width: 80px;
    font-size: 10px;
    background: #eb6100;
    border: none;
    color: white;
    height: 22px;
  }

  input {
    border: none;
    border: 1px solid rgb(223, 219, 219);
    margin: 8px;
    width: 250px;
    color: #999;
  }

  .ad {
    background: #eb6100;
    width: 370px;
    height: 50px;
    border: none;
    color: white;
    border-radius: 5px;
    text-align: center;
    margin-top: 50px;
  }
</style>