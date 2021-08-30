<template>
  <div class="home">
    <img src="@/assets/images/A_03.jpg" alt="" class="img" />
    <div class="box">
      <i class="icon iconfont icon-mobile"></i>
      <input type="text" placeholder="请输入手机号" v-model="mobile" class="input" />
      <button class="btn" @click="add" :disabled="flag">{{ yzm }}</button><br />
      <i class="icon iconfont icon-protection"></i>
      <input type="text" placeholder="请输入验证码" v-model="ym" class="input" />
    </div>
    <div class="a">
      <button class="ad" @click="dl">登录</button>
      <p class="aa">*未注册的手机号将自动注册 <span>密码登录</span></p>
    </div>
    <p class="s">第三方登录</p>

    <div class="h1">
      <div class="tp">
        <span><img src="@/assets/images/A1_03.jpg" alt="" class="w"/></span
        ><br />
        微信登录
      </div>
      <div class="www">
        <span><img src="@/assets/images/A_05.jpg" alt="" class="w"/></span
        ><br />
        QQ登录
      </div>
    </div>
  </div>
</template>

<script>
import { smsCode, login } from "@/http/api";
import { Toast } from 'vant';

export default {
  data() {
    return {
      yzm: "获取验证码",
      mobile: "",
      ym: "",
      num: 60,
      flag: false,
    };
  },
  //  created() {
  // service.post('http://120.53.31.103:84/api/app/smsCode',{mobile:18139981234,sms_type:"login"}).then(res=>{
  //   console.log(res);
  // })

  // 二次封装
  // let res=await smsCode({mobile:18139981234,sms_type:"login"})
  // console.log(res);
  // },
  // 18431220359

  methods: {
    async add() {
      this.flag = true;
      var timer = setInterval(() => {
        this.num--;
        this.yzm = `还剩${this.num}秒`;
        if (this.num == 0) {
          clearInterval(timer);
          this.yzm = "获取验证码";
          this.num = 60;
          this.flag = false;
        }
      }, 1000);
      let res = await smsCode({
        mobile: this.mobile,
        sms_type: "login",
      });
      console.log(res);
    },
    async dl() {
        if (res.code == 200) {
      var {data:res} = await login({
        mobile: this.mobile,
        sms_code: this.ym,
        type: 2,
        client: "1",
      });
      console.log(res);
        this.$store.commit("token", res.data.remember_token);
        Toast.success("登陆成功");
        this.$router.push("/my");
      }
    },
  },
};
</script>
<style scoped>
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
  margin-top: 10px;
}

.img {
  width: 80%;
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

.input {
  border: none;
  border: 1px solid rgb(223, 219, 219);
  margin: 8px;
  width: 250px;
  color: #999;
}

.ad {
  background: #eb6100;
  width: 340px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 5px;
  text-align: center;
  margin-top: 50px;
}
</style>
