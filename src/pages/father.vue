<template>
  <div>
    <list></list>
  <goods :message="msg"></goods>
    </div>
</template>

<script>
  import list from "../components/list"
  import goods from "../pages/goodsDetail"
    export default {
    data(){
      return{
        'msg' : '这是来自父组件的问候'
      }
    },
    components:{
      list,
      goods
    },
        name: "father"
    }
</script>

<style scoped>

</style>
