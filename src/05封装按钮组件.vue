<template>
  <div>
    <MyButton title="123" type="success" @myclick="clickFn"></MyButton>
  </div>
</template>

<script>
import MyButton from './components/05Button1.vue'
export default {
  components: {
    MyButton,
  },
  methods: {
    clickFn(){
      alert(111)
    }
  }
};
</script>

<style lang="less" scoped>

</style>
