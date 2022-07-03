<template>
  <div>
    <product v-for="item in arr" 
    :key="item.id"
    :obj="item"
    ></product>
  </div>
</template>

<script>
import product from "./components/03_Product1.vue";
export default {
  data(){
    return{
      arr: [
        {
          id: 1,
          proname: "超级好吃的棒棒糖",
          proprice: 18.8,
          info: "开业大酬宾, 全场8折",
        },
        {
          id: 2,
          proname: "超级好吃的大鸡腿",
          proprice: 34.2,
          info: "好吃不腻, 快来买啊",
        },
        {
          id: 3,
          proname: "超级无敌的冰激凌",
          proprice: 14.2,
          info: "炎热的夏天, 来个冰激凌了",
        },
      ],
    }
  },
  components: {
    product
  }
}
</script>

<style>

</style>