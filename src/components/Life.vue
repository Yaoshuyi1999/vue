<template>
  <div>
    <p>学习生命周期 - 看控制台打印</p>
    <p id="myP">{{ msg }}</p>
    <ul id="myUL">
      <li v-for="item in arr" :key="item">{{ item }}</li>
    </ul>
    <button @click="arr.push(1000)">点击末尾加值</button>
    <Demo ref="demo"></Demo>
  </div>
</template>

<script>
import Demo from "./Child/Demo.vue";
export default {
  name: "LifeAxiosLife",

  data() {
    return {
      msg: "Hello Vue!",
      arr: [1, 2, 3, 4],
      timer: null,
    };
  },
  // 创建阶段
  // beforeCreate  创建前
  // created 创建后
  beforeCreate() {
    console.log("beforeCreate === 执行");
    // 是无法访问 data里数据 methods的方法no
    console.log(this.msg); // undefined
    // this.fn(); // not function
    // this.fn // undefined
    // this.timer // undefined
  },
  // 初始话data数据，事件
  created() {
    // 数据的初始化
    // 一般初始化的接口请求
    console.log("created === 执行");
    console.log(this.msg);
    this.fn();
    // debugger;
    this.timer = setInterval(() => {
      // console.log(111);
    }, 1000);
  },
  // 挂载阶段
  beforeMount() {
    // 可以操作dom吗 不可以
    console.log("beforeMount ===");
    console.log(document.getElementById("myP")); // null

    this.msg = "asdasdas"; // 触发不了beforeUpdate/ updated
  },
  mounted() {
    // 可以操作dom吗 可以
    console.log("mounted ===");
    console.log(document.getElementById("myP")); // P标签
    // 适用场景： 初始化操作，可以操作dom
  },
  // 更新阶段
  beforeUpdate() {
    console.log("beforeUpdate == 执行");
    console.log(this.arr[4]);
    console.log(document.querySelectorAll("#myUL > li")[4]);
    // 数据更新 页面不更新
  },
  updated() {
    console.log("updated == 执行");
    console.log(this.arr[4]);
    console.log(document.querySelectorAll("#myUL > li")[4]);
    // 数据更新 页面更新
  },
  // 销毁阶段
  beforeDestroy() {
    // 销毁前
    console.log("beforeDestroy == 执行");
    console.log(this.msg);
    clearInterval(this.timer);
    console.log(this.$refs.demo);
    // 做一些收尾的工作
    // 清除定时器， 清除全局的函数
  },
  destroyed() {//
    console.log("destroyed == 执行");
    console.log(this.$refs.demo);
  },
  methods: {
    fn() {
      console.log("====");
    },
  },
  components: {
    Demo,
  },
};
</script>

<style scoped></style>
