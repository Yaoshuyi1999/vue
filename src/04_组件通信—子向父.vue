<template>
  <div>
    <product v-for="(item,ind) in arr" 
    :key="item.id"
    :title="item.proname"
    :price="item.proprice"
    :info="item.info"
    :index="ind"
    @del='fn'
    ></product>
  </div>
</template>

<script>
import product from "./components/04_Product2.vue";
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
    };
  },
  components: {
    product
  },
  methods: {
    fn(inde,price){
      this.arr[inde].proprice-=price
    }
  }
}
</script>

<style>

</style>