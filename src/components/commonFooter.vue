<template>
    <div class="footer">
      <ul class="footer-cont">
       <li ><router-link class="disblock"  to="/" >主页</router-link></li>
        <li ><router-link class="disblock"  to="/shopcart" >购物车</router-link></li>

         <li ><router-link  class="disblock" to="/detail" >分类</router-link></li>
           <li ><router-link  class="disblock" to="/" >我的</router-link></li>
      </ul>
      <div class="footer-cont-2">x</div>
      <router-view></router-view>
    </div>

</template>

<script>

    export default {
      data(){
        return{

        }
      },
        name: "common-footer"
    }
</script>

<style scoped>


  .footer{
    font-size:14px;
    border-radius: 0.1rem;
    height: 1.8rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid #ccc;
    background-color: brown;
  }
  .footer-cont li{
    font-size:14px;
    display: block;
    float: left;
    width: 25%;
    height: 1.8rem;
    line-height:1.8rem;
    font-size: 1.0rem;
    color: #ff8000;
    text-align: center;
  }
  .footer-cont li .disblock {
    display: block;
  }
  .footer-cont li:active{
    background-color: #ccc;
  }
  .footer-cont:after{
    content:'';
    display: block;
    clear: both;
    height: 0;
  }
</style>
