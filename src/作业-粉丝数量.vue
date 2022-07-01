<template>
  <div>
    <p>国内网站粉丝数量：{{number|myriad}}</p>
    <p>国外网站粉丝数量：{{number|thousand}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      number:1876986
    }
  },
  filters:{
    myriad(val){
      return val/10000+'万'
    },
    thousand(val){
      return val/1000+'千'
    }
  }
}
</script>

<style>

</style>