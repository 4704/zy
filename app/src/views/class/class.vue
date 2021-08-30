<template>
  <div class="dt">
    <div>
      <van-card
        v-for="(item, index) in listtt"
        :key="index"
        :desc="item.introduction"
        :title="item.teacher_name"
        :thumb="item.teacher_avatar"
      />
    </div>
  </div>
</template>
<script>
import { shuj } from "@/http/api";

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
      let {
        data: { data: res },
      } = await shuj();
      this.listtt = res[2].list;
      console.log(this.listtt);
    },
  },
};
</script>
<style scoped>
.dt {
  width: 100%;
  height: 100%;
  background: #f7f8fa;
}
.van-card{
margin-top: 5px;}
</style>
