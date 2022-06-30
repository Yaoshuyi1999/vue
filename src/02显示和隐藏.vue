<template>
  <div>
    <!-- 需求：点击按钮 实现p标签 显示/隐藏动态切换 -->
    <!-- v-show="变量"   变量为true表示显示，false表示隐藏-->
    <p v-show="isShow">我是v-show指令</p>
    <button @click="isShow=!isShow">click me show</button>
    <br>
    <p v-if="isShow1">我是v-if指令</p>
    <button @click="isShow1=!isShow1">click me if</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow:false,
      isShow1:false
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>