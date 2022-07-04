<template>
  <div>
    <h1>1. 生命周期</h1>
 	  <Life v-if='isShow' ref='mylife'></Life>
    <button @click='clickFn'>销毁组件</button>
    <hr>
    <h1>2. axios使用</h1>
    <UseAxios></UseAxios>
    <hr>
    <h1>3. $refs的使用</h1>
    <More></More>
    <hr>
    <h1>4. $nextTick使用场景</h1>
    <Tick></Tick>
    <hr>
    <h1>5. 组件name属性使用</h1>
    <Com></Com>
  </div>
</template>

<script>
import Life from './components/Life'
import UseAxios from './components/UseAxios.vue'
import More from './components/More'
import Tick from "./components/Tick.vue";
import Com from "./components/Com.vue";
export default {
  components: {
    Life,
    UseAxios,
    More,
    Tick,
    Com
  },
  data () {
    return {
      isShow: true,
    }
  },
  methods: {
    clickFn(){
      this.isShow = false
    }
  }
}
</script>