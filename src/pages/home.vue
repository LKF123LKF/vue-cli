<template>
    <div class="container">
      <home-header></home-header>
      <div class="content">
        <ul class="cont-ul">
          <list ></list>
        </ul>
      </div>
      <common-footer></common-footer>
    </div>
</template>

<script>
    import HomeHeader from "../components/homeHeader";
    import List from "../components/list";
    import CommonFooter from "../components/commonFooter";



    export default {
      data(){
        return {
          items: []
        }
      },
      components: {
        HomeHeader,
        CommonFooter,
        List
      },
      // created(){
      //   this.$http.get('/api/goods').then((data) => {
      //     this.items = data.body.data;
      //   })
      // },
      name: "home"

    }

</script>

<style scoped>
    .container{
      width: 100%;
      margin: 0 auto;
    }
    .content{
      margin-bottom: 1.8rem;
    }
    .cont-ul{
      padding-top: 0.5rem;
      background-color: #ccc;
    }
    .cont-ul::after{
      content: '';
      display: block;
      clear: both;
      width: 0;
      height: 0;
    }
</style>
