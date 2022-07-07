<template>
  <div>
      <input type="text" v-focus v-model="value" v-number>
      <!-- <input type="text" v-gfocus> -->
      <p v-color="colorStr" @click="colorStr='red'">修改文字颜色</p>
  </div>
</template>

<script>
// 目标: 创建 "自定义指令", 让输入框自动聚焦
// 1. 创建自定义指令
// 全局 / 局部
// 2. 在标签上使用自定义指令  v-指令名
// 注意:
// inserted方法 - 指令所在标签, 被插入到网页上触发(一次)
// update方法 - 指令对应数据/标签更新时, 此方法执行
export default {
    data(){
        return {
            colorStr: 'green',

        }
    },
    directives: {
        focus:{
            inserted(el){
                console.log(el);
                el.focus()
            }
        },
        number:{
            inserted(el){
                console.log(el.value);
                el.value=el.value.replace(/[^\d.]/g,'')
            },
            update (el) {
                
                el.value=el.value.replace(/[^\d.]/g,'*')
                console.log(el.value);
            }
        },
        color:{
            inserted(el,bind){
                el.style.color=bind.value
            },
            update (el,bind) {
                el.style.color=bind.value
            }
        }
    }
}
</script>

<style>

</style>