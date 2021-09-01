<template>
  <div class="zong">
    <div class="boxx">
      <van-icon name="balance-list-o" />
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
    <div class="card-list">
      <!-- 资深讲师 -->
      <div class="teacher">
        <div class="t-header">
          <p class="t-p">资深讲师</p>
          <p class="t-p">更多 > </p>
        </div>
        <div class="t-next" v-for="(item,index) in t_list.list" :key="index">
          <div class="next-box">
            <div class="box-left">
              <img :src="item.teacher_avatar" alt="">
            </div>
            <div class="box-right">
              <p class="right-p1">{{item.teacher_name}}</p>
              <p class="right-p2">{{item.introduction}}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 推荐课程 -->
      <div class="tjkc">
        <div class="tj-header">
          <p class="t-p">推荐课程</p>
          <p class="t-p">更多 > </p>
        </div>
        <div class="tj-next" v-for="(item,index) in tj_list.list" :key="index">
          <div class="next-box">
            <div class="box-left">
              <img :src="item.cover_img" alt="">
            </div>
            <div class="box-right">
              <p class="right-p1">{{item.title}}</p>
              <div style="margin-top: 35px;height:20px;display:flex;justify-content: space-between;">
                <p class="right-p2">{{item.sales_num}}人已报名</p>
                <p style="color:green;font-size:16px">免费</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 名师 -->
      <div class="teacher">
        <div class="t-header">
          <p class="t-p">名师</p>
          <p class="t-p">更多 > </p>
        </div>
        <div class="t-next" v-for="(item,index) in ms_list.list" :key="index">
          <div class="next-box">
            <div class="box-left">
              <img :src="item.teacher_avatar" alt="">
            </div>
            <div class="box-right">
              <p class="right-p1">{{item.teacher_name}}</p>
              <p class="right-p2">{{item.introduction}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    shuj
  } from "@/http/api";
  export default {

    data() {
      return {
        t_list: [],
        tj_list: [],
        ms_list: [],
      };
    },

     created() {
         this.getappIndex();
    },
    
    methods: {
      async getappIndex(){
            const { data:res } = await shuj();
            this.t_list = res[0]
            this.tj_list = res[1]
            this.ms_list = res[2]
        }
    },
  };
</script>
<style lang="scss" scoped>
/*留*/
  .zong {
    background: #f7f8fa;
  }
/**留 */
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 100px;
    text-align: center;
  }

/*留*/
  .van-icon {
    color: coral;
    font-size: 35px;
    margin-left: 13px;
  }
/*留*/
  .el-input__inner {
    width: 350px;
  }
/*留 */
  .el-icon-mobile {
    font-size: 35px;
    color: red;
  }
/*留*/
  .boxx {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
/**留 */
  .i {
    width: 100%;
    height: 200px;
  }
/** */
  .i1 {
    width: 100%;
    height: 200px;
  }
/**留 */
  .i2 {
    width: 50px;
    height: 50px;
    margin-left: 20px;
  }
/**留 */
  .p {
    margin-left: 10px;
  }
  /*首页资深讲师&推荐课程&名师 */   
  .card-list{
      width: 100vw;
      background-color:#f7f8fa;
      padding-top: 20px;
      margin-bottom: 100px;
    /* 资深讲师*/  
      .teacher{
          width: 90vw;
          margin: auto;
          .t-header{
              width: 100%;
              margin: auto;
              display: flex;
              justify-content: space-between;
              border-left: 3px solid red;
              padding-left: 10px;
              box-sizing: border-box;
              position: relative;
              .t-p{
                  font-size: 15px;
              }
          }
          .t-next{
              width: 100%;
              height: 100px;
              background-color: white;
              border-radius: 20px;
              margin: 20px 0;
              position: relative;
              .next-box{
                  width: 80%;
                  height: 60%;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                  display: flex;
                  justify-content: space-between;
                  .box-left{
                      flex: 1;
                      img{
                          width: 50px;
                          height: 50px;
                          display: block;
                          border-radius: 50%;
                      }
                  }
                  .box-right{
                      flex: 5;
                      margin-left: 20px;
                      .right-p1{
                          font-size: 20px;
                      }
                      .right-p2{
                          font-size: 15px;
                          margin-top: 10px;
                          color: #ccc;
                      }
                  }
              }
          }
      }
    /*推荐课程*/ 
    .tjkc{
        width: 90vw;
        margin: auto;
        .tj-header{
              width: 100%;
              margin: auto;
              display: flex;
              justify-content: space-between;
              border-left: 3px solid red;
              padding-left: 10px;
              box-sizing: border-box;
              position: relative;
              .t-p{
                  font-size: 15px;
                
              }
        }
        .tj-next{
              width: 100%;
              height: 120px;
              background-color: white;
              border-radius: 20px;
              margin: 20px 0;
              position: relative;
              .next-box{
                  width: 80%;
                  height: 70%;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%,-50%);
                  display: flex;
                  justify-content: space-between;
                  .box-left{
                      flex: 2;
                      img{
                          width: 70px;
                          height: 70px;
                          display: block;
                          border-radius: 50%;
                      }
                  }
                  .box-right{
                      flex: 5;
                      margin-left: 20px;
                      .right-p1{
                          margin-top: 10px;
                          font-size: 20px;
                      }
                      .right-p2{
                          font-size: 20px;
                          color: #ccc;
                      }
                  }
              }
          }
    }
  }
</style>