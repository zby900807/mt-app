<template>
  <div class="nav">
    <router-link class="nav-item" to="/goods">
      商品
      <div class="line"></div>
    </router-link>
    <router-link class="nav-item" to="/ratings">
      评价
      <div class="line"></div>
    </router-link>
    <router-link class="nav-item" to="/seller">
      商家
      <div class="line"></div>
    </router-link>
  </div>
</template>
<script>
import { getSeller } from '../../commom/js/index'

export default {
  data() {
    return {
      poiInfo:{}
    }
  },
  created () {
    getSeller().then((res)=>{
      this.poiInfo = res.data
      console.log(res)
    })
  }
}
</script>
<style lang="scss">
  @import "../../static/css/bass";
  .nav {
    display: flex;
    width: 100%;
    height: pr(80);
    line-height: pr(80);
    border-bottom: pr(1) solid #e4e4e4;
    .nav-item{
      text-align: center;
      flex: 1;
      font-size: pr(28);
      text-decoration: none;
      color: #666;
      position: relative;
    }
    .active{
      color: #ffbb22;
      .line{
        width: pr(40);
        height: pr(4);
        display: inline-block;
        background: #ffbb22;
        position: absolute;
        left: 50%;
        bottom: 0;
        margin-left: pr(-20);
      }
    }
  }
</style>
