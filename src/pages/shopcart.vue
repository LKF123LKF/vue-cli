<template>
  <div class="content cont-ul">

    <detail-header></detail-header>
    <div class="detail">
      <img src="../assets/image/54205424_big.jpg" alt="" />
      <p class="site-title">购物车</p>
      <router-link to="/detail/msg">
        <p class="site-cont">点击查看详情</p>
      </router-link>
      <router-view></router-view>
    </div>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import DetailHeader from "../components/DetailHeader";
  import CommonFooter from "../components/commonFooter";

  export default {
    data(){
      return{

      }
    },
    components: {
      CommonFooter,
      DetailHeader
    },
    name: "goods-detail"
  }
</script>

<style scoped>
  .content{

    margin-bottom: 1.8rem;
  }
  .cont-ul{
    padding-top: 0.5rem;
    background-color: #ccc;
  }
  /*.cont-ul::after{*/
  /*content: '';*/
  /*display: block;*/
  /*clear: both;*/
  /*width: 0;*/
  /*height: 0;*/
  /*}*/
  .detail{
    box-sizing: border-box;

  }
  .detail > img{
    display: block;
    width: 80%;
    margin: 0 auto 0.5rem;
  }
  .detail > p{
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: left;
    padding-bottom: 0.5rem;
  }
  .detail > p.site-title{
    color:blueviolet;
  }
  p.site-cont{
    color: blue;
    font-size: 0.9rem;
  }
</style>
|
