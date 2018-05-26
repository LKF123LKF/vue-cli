// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router/index'

import "bootstrap/dist/css/bootstrap.min.css"
import "jquery/dist/jquery.min"
import "bootstrap/dist/js/bootstrap.min"
/* Vue.config.productionTip = false*/
import Element from 'element-ui'
Vue.use(Element)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data(){
    return{

    }
  },
  router

})

Vue.filter('dCurrency',function (value) {
  return '￥'+value
})

Vue.filter('dTofixed',function (value) {
  var isNum = parseFloat(value);
  if(!isNum){
    alert("请输入数字");
    return "请输入数字";
  }else {
    var value =Math.round(isNum*100)/100;
    var item = value.toString().split(".");
    if(item.length==1){
      value = value.toString()+".00";
      return value;
    }
    if(item.length>1){
      if(item[1].length<2){
        value = value.toString()+"0";
      }
      return value;
    }
  }
})
