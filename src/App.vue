<template>
  <div>
    <p>国内网站粉丝数量：{{number|myriad(10000,'万')}}</p>
    <p>国外网站粉丝数量：{{number|myriad(1000,'千')}}</p>
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
    myriad(val,spilt,num){
      return val/spilt+num
    }
  }
}
</script>

<style>

</style>