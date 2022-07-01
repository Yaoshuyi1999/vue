<template>
  <div>
    <span>用户名:</span>
    <input type="text" v-model="account.name" />
    <span>密码:</span>
    <input type="text" v-model="account.pwd" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        name: "",
        pwd: "",
        msg: {
          msg: {
            a: "1",
          },
        },
      },
      // name: "",
    };
  },
  watch: {
    // 可以监听某个值的变化
    // name(newVal, oldVal) {
    //   // newVal 改变之后的值
    //   // oldVal 改变之前的值
    //   console.log("newVal", newVal);
    //   console.log("oldVal", oldVal);
    // },
    // account(val) {
    //   // 当这一块只用了一个星参数 是改变之后的值
    //   console.log("newVal", val);
    // },
    // account: {
    //   handler(newVal, oldVal) {
    //     console.log("newVal", newVal);
    //   },
    //   deep: true, // 深度侦听(对象里面层的值改变)
    //   immediate: true, // 立即侦听(网页打开handler执行一次)
    // },
    "account.name": {
      handler(newVal, oldVal) {
        console.log("newVal", newVal);
      },
      // deep: true, // 深度侦听(对象里面层的值改变)
      //immediate: true, // 立即侦听(网页打开handler执行一次)
    },
  },
  /*
  语法:
    watch: {
      变量名 (newVal, oldVal){
        // 变量名对应值改变这里自动触发
      },
      变量名: {
        handler(newVal, oldVal){

        },
        deep: true, // 深度侦听(对象里面层的值改变)
        immediate: true // 立即侦听(网页打开handler执行一次)
      }
    }
  */
};
</script>