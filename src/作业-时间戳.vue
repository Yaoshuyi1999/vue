<template>
  <div>
    <p>{{time|myriad('-')}}</p>
    <p>{{time|myriad('/')}}</p>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data(){
    return{
      time:1636450540055
    }
  },
  filters:{
    myriad(val,spilt){
      return moment(val).format(`YYYY${spilt}MM${spilt}DD`)
    }
  }
}
</script>

<style>

</style>