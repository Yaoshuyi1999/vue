<template>
  <div>
    <p v-bind:style="{color:'red',fontSize:'100px'}">去问问王企鹅</p>
    <p v-bind:style="{color:colorColor,fontSize:'100px'}">今天吃什么</p>
  </div>
</template>

<script>
export default {
    data () {
        return {
            colorColor: 'green'
        }
    }
}
</script>

<style>

</style>