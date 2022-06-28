<template>
<div>
  <a v-bind:href="href">去百度</a>
  <img v-bind:src="imgUrl" />
  <img :src="imgLocal" />
  <img src="./assets/logo.png" />
</div>
</template>

<script>
import imgLocal from './assets/logo.png';
export default {
  data(){
    return{
      href:'https://cn.bing.com/',
      imgUrl:'http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg',
      imgLocal:imgLocal
    }
  }
}
</script>

<style>

</style>