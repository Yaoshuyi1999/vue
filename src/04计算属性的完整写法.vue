<!-- 代码演示 -->
<template>
  <div>
    <input type="text" v-model="full">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  computed: {
    full: {
      get(){
        return '1212'
      },
      set(val){
        console.log(val);
      }
    }
  }
}
</script>