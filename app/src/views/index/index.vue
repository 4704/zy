<template>
  <div class="zong">
    <div class="boxx">
      <van-icon name="balance-list-o" />
      <!-- <input type="text" placeholder="搜索"> -->
      <el-input placeholder="搜索" suffix-icon="el-icon-search"></el-input>
      <i class="el-icon-mobile"></i>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="@/assets/iii/1.jpeg" alt="" class="i" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="@/assets/iii/2.png" alt="" class="i1" />
      </van-swipe-item>
    </van-swipe>
    <ul>
      <li>
        <img src="@/assets/iii/3.png" alt="" class="i2" />
        <p class="p">大威天龙</p>
      </li>
    </ul>
    <div class="zs">
      <span class="sp">
        |
      </span>
      资深讲师
      <span class="pq">
        更多>
      </span>
    </div>
    <van-card
      v-for="(item, index) in list"
      :key="index"
      :desc="item.teacher_name"
      :title="item.introduction"
      :thumb="item.teacher_avatar"
    />

    <div class="zs">
      <span class="sp">
        |
      </span>
      推荐课程
      <span class="pq">
        更多>
      </span>
    </div>
      <van-card
      v-for="(item, index) in listt"
      :key="index"
      :desc="item.sales_num"
      :title="item.title"
      :thumb="item.cover_img"
    />

    <div class="zs">
      <span class="sp">
        |
      </span>
      名师
      <span class="pq">
        更多>
      </span>
    </div>
      <van-card
      v-for="(item, index) in listtt"
      :key="index"
      :desc="item.introduction"
      :title="item.teacher_name"
      :thumb="item.teacher_avatar"
    />
    
    <div class="yyyy"></div>
  </div>
</template>
<script>
// import Tabbar from '@/components/tabbar'
// import {banner} from '@/http/api'
import { shuj } from "@/http/api";
export default {
  //  components: {
  //     Tabbar
  // },
  data() {
    return {
      list: [],
      listt: [],
      listtt:[]
    };
  },

  async created() {
    let {
      data: { data: res },
    } = await shuj();
    this.list = res[0].list;
  },
  mounted() {
    this.getlist();
    this.getl()
  },
  methods: {
    async getlist() {
      let {
        data: { data: res },
      } = await shuj();
      this.listt = res[1].list;
    //   console.log(JSON.parse(JSON.stringify(this.listt)));
    },
     async getl() {
      let {
        data: { data: res },
      } = await shuj();
      this.listtt = res[2].list;
      console.log(JSON.parse(JSON.stringify(this.listtt)));
    },
  },
};
</script>
<style scoped>
.mff {
  margin-left: 100px;
  font-size: 12px;
}

.zong {
  background: #f7f8fa;
}

.ziti {
  font-size: 18px;
  color: red;
}

.mf {
  color: green;
  margin-left: 100px;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}

.t {
  margin-left: 15px;
  margin: 5px;
}

.tu {
  width: 80px;
  height: 80px;
  line-height: 35px;
}

.tu2 {
  width: 60px;
  height: 60px;
  line-height: 35px;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 10px;
}

.tu1 {
  width: 80px;
  height: 80px;
}

.ul {
  width: 100%;
}

.zi {
  color: #999;
  font-size: 12px;
}

.li {
  width: 350px;
  background: #fff;
  border-radius: 10px;
  margin-top: 15px;
  margin-left: 25px;
  line-height: 35px;
}

.van-icon {
  color: coral;
  font-size: 35px;
  margin-left: 13px;
}

.el-input__inner {
  width: 350px;
}

.el-icon-mobile {
  font-size: 35px;
  color: red;
}

.boxx {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.i {
  width: 100%;
  height: 200px;
}

.i1 {
  width: 100%;
  height: 200px;
}

.i2 {
  width: 50px;
  height: 50px;
  margin-left: 20px;
}

.p {
  margin-left: 10px;
}

.sp {
  font-size: 35px;
  color: red;
}

.pq {
  margin-left: 270px;
}

.zs {
  width: 100%;
  background: rgb(235, 233, 233);
  margin-top: 10px;
}

.im {
  display: flex;
  margin-left: 25px;
  box-sizing: border-box;
}

.yyyy {
  height: 100px;
}
</style>
