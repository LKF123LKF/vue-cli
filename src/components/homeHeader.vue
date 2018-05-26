<template>
    <div class="head">
      <div class="header">
        <h4 class="header-cont">主页</h4>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home-header"
    }
</script>

<style scoped>
    .head{
      width: 100%;
      height: 2rem;
    }
    .header{
      background-color: blueviolet;
      border:2px solid orange;
      border-radius: 0.1rem ;
      width: 100%;
      height: 2rem;
      position: fixed;
      left:0;
      top:0;
      /*border-bottom: 2px solid #ff8000;*/
    }
    .header h4{
      width: 100%;
      text-align: center;
      line-height: 2rem;
      font-size: 1.4rem;
    }
</style>
