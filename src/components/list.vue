<template>
    <li class="goods-list" >

      <a href="/#/detail" @click="getData(item)" class="goods-list-link" v-for="item in items">
        <div class="goods-list-pic">
          <img :src="item.img" alt="">
        </div>
        <div class="goods-list-desc" >
          <p class="goods-list-name" >{{item.title }}</p>
          <p class="goods-list-price">{{item.price|dtofixed|dCurrency }}</p>
        </div>
      </a>
    </li>
</template>

<script>
    export default {
      data () {
        return {
          items: [],

        }
      },
      created () {
        this.$http.get('/api/goods').then((data) => {
          console.log(data.body.data)
          this.items = data.body.data;
        })
      },methods:{
        getData(item){
          // localStorage.setItem('info',JSON.stringify(item));

          // JSON.parse(localStorage.getItem('keyName'));
          sessionStorage.setItem('info',JSON.stringify(item))
          // console.log("DDDDDDDDDD",item)
        }
      }
    }
</script>

<style scoped>
  .goods-list {
    width: 100%;

    box-sizing: border-box;
    margin-bottom: 0.2rem;
  }
  .goods-list:nth-of-type(odd) {
    border-right: 0.15rem solid #ccc;
  }
  .goods-list:nth-of-type(even) {
    border-left: 0.15rem solid #ccc;
  }
  .goods-list-link {
    float: left;
    width: 48%;
    border-left: 1px solid yellow;
    display: block;
    padding: 0.5rem 0;
    margin: 0 0.3rem;
    text-align: center;
    background-color: #fff;
  }
  .goods-list:nth-of-type(even) .goods-list-link{
    margin-left: 0;
  }
  .goods-list:nth-of-type(odd) .goods-list-link{
    margin-right: 0;
  }
  .goods-list-pic {
    padding: 0.5rem;
  }
  .goods-list-pic > img {
    width: auto;
    height: 4rem;
  }
  .goods-list-desc {
    padding: 0 0.5rem;
  }
  .goods-list-desc:after {
    display: block;
    content: '';
    clear: both;
    height: 0;
  }
  .goods-list-name,.goods-list-price {
    width: 50%;
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: 0.8rem;
    color: blueviolet;
    float: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-list-price {
    color: #ff8000;
    float: right;
  }
</style>
