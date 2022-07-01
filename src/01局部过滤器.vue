<template>
  <div>
    {{ msg | toUp }}
  </div>
</template>

<script>
export default {
  // 过滤器的使用步骤
  // 1.注册
  // 1.1 局部
  // filters: {
  //   过滤器的名称(val) { // 需要被处理的数据
  //     return 处理后的数据
  //   }
  // }
  // 2.使用 插值表达式 v-bind表达式  ｜

  data() {
    return {
      msg: "Hello Vue",
    };
  },
  filters: {
    toUp(val) {
      // console.log(val);
      return val.toUpperCase();
    },
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
</style>