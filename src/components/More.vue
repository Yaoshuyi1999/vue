<template>
  <div>
      <p>1. 获取原生DOM元素</p>
      <h1 id="h" ref="myH">我是一个孤独可怜又能吃的h1</h1>
      <Demo ref="mydemo"></Demo>
      <p>3. vue更新DOM是异步的</p>
      <p ref="myP">{{ count }}</p>
      <button @click="btn">点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
// ref $refs ==> 获取dom元素/组件
// 目标: 获取组件对象
// 1. 创建组件/引入组件/注册组件/使用组件
// 2. 组件起别名ref 起一个标记的作用
// 3. 恰当时机, 获取组件对象
import Demo from "./Child/Demo.vue"
export default {
    beforeMount () {
        console.log(this.$refs.myP);
        this.$nextTick(()=>{
            console.log(this.$refs.myP);
        })
    },
    // ref 获取原生DOM元素
    // 给元素加上 ref属性 起一个别名
    mounted(){
        console.log(document.getElementById("h")); // h1
        console.log(this.$refs.myH); // h1
        console.log(this.$refs['myH']);
        console.log(this.$refs.mydemo);
        this.$refs.mydemo.fn()
    },
    data(){
        return {
            count:0
        }
    },
    components: {
        Demo
    },
    methods: {
        btn(){
            this.count++;
            console.log(this.count);
            this.$nextTick(()=>{
                console.log(this.$refs.myP.innerHTML);
            })
        }
    }
}
</script>

<style>

</style>