<template>
  <div>
    <p>{{time|myriad}}</p>
    <p>{{time|thousand}}</p>
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
    myriad(val){
      return moment(val).format('YYYY-MM-DD')
    },
    thousand(val){
      return moment(val).format('YYYY/MM/DD')
    }
  }
}
</script>

<style>

</style>