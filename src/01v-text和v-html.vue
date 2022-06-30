<template>
  <div>
    <!-- v-html 可以识别html标签，类似于innerHtml -->
    <h1 v-html="str"></h1>
    <!-- v-html 不可以识别html标签，类似于innerText -->
    <h1 v-text="str">{{a}}</h1>
    <!-- 但是他们会覆盖插值表达式的值 -->
  </div>
</template>

<script>
export default {
    data () {
        return {
            a:'123',
            str:"<span>我是一个span标签</span>"
        }
    }
}
</script>

<style>

</style>