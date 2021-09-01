<template>
  <div class="dt">
    <div class="teacher">
      <div class="t-next" v-for="(item,index) in listtt" :key="index" @click="go(item.id)">
        <div class="next-box">
          <div class="box-left">
             <img :src="item.avatar" alt="">
          </div>
          <div class="box-right">
            <p class="right-p1">{{item.real_name}}</p>
            <p class="right-p2">{{item.introduction}}</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { kc,teacher } from "@/http/api";

  export default {
    data() {
      return {
        listtt: [],
      };
    },
    mounted() {
      this.getlist();
    },
    methods: {
      async getlist() {
        let {data:res } = await kc();
        this.listtt = res.list
        // console.log(res);
      },
      async go(id) {
        let { data: res } = await teacher()
        console.log(id);
        this.$router.push({path:'/xq',query:{id:id}})
      }
    },

  };
</script>
<style lang="scss" scoped>
  .teacher {
    width: 90vw;
    margin: auto;
    margin-bottom: 120px;

    .t-next {
      width: 100%;
      height: 100px;
      background-color: #999;
      border-radius: 20px;
      margin: 20px 0;
      position: relative;
      background: #f7f8fa;

      .next-box {
        width: 80%;
        height: 60%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-between;

        .box-left {
          flex: 1;

          img {
            width: 50px;
            height: 50px;
            display: block;
            border-radius: 50%;
          }
        }

        .box-right {
          flex: 5;
          margin-left: 20px;

          .right-p1 {
            font-size: 20px;
          }

          .right-p2 {
            font-size: 15px;
            margin-top: 10px;
            color: #ccc;
          }
        }
      }
    }
  }
</style>