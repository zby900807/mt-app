<template>
  <div class="header">
    <div class="top-wrapper">
      <div class="back">
        <span class="iconfont icon-arrow-right"></span>
      </div>
      <form class="search">
        <span class="iconfont icon-search"></span>
        <input type="text" class="search-bar" placeholder="搜索店内商品">
      </form>

      <div class="store">
        <span class="iconfont icon-guanzhu"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss">
  @import "../../static/css/bass";
  .header{
    padding: pr(50) pr(30) 0;
    box-sizing: border-box;
    width: 100%;
    .top-wrapper{
      overflow: hidden;
      height: pr(54);
      line-height: pr(54);
      .back{
        float: left;
        .icon-arrow-right{
          font-size: pr(46);
          color: #9b9b9b;
        }
      }
      .search{
        width: pr(500);
        height: pr(54);
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #e3e3e3;
        padding-left: pr(10);
        margin-left: pr(30);
        color: #9b9b9b;
        .icon-search{
          font-size: pr(24);
        }
        input{
          display: block;
          width: 100%;
          height: pr(54);
          line-height: pr(54);
          border: none;
          background: transparent;
          outline: none;
        }
      }
      .store{
        float: left;
        margin-left: pr(20);
        .icon-guanzhu{
          font-size: pr(36);
          color: #9b9b9b;
        }
      }
    }
  }
</style>
