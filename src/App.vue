<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="reverse">数组翻转</button>
    <button @click="slice">截取前3个</button>
    <button @click="change">更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: "VuecliDemo02VFor",

  data() {
    return {
      arr: [1, 2, 3, 4, 5],
    };
  },
  mounted() {},
  methods: {
    reverse() {
      this.arr.reverse();
    },
    slice() {
      // this.arr.slice(索引号, 截取的长度);
      this.arr.slice(0, 3);
      console.log(this.arr.slice(0, 3));
      console.log(this.arr);
      // 只要让原数组 发生改变 页面的数据就会改变

      // 解决方案
      this.arr = this.arr.slice(0, 3);
    },
    change() {
      // this.arr[0] = 1000;
      // console.log(this.arr);
      
      // 解决方案
      // $set(需要添加属性的目标的对象， 属性， 属性对应具体的值)
      this.$set(this.arr, 0, 1000);
    },
  },
};
</script>

<style scoped>
</style>