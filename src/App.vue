<template>
  <div>
    <tableDate>
      <template v-slot:uname='scope'>
        <input v-model="scope.row.name">
     </template>
      <template v-slot:age='scope'>
        <input v-model="scope.row.age">
     </template>
      <template v-slot:toux='scope'>
        <a :href="scope.row.headImgUrl " v-if="scope.row.type==0">{{ scope.row.headImgUrl }}</a>
        <img :src="scope.row.headImgUrl " v-else-if="scope.row.type==1">
     </template>
    </tableDate>
  </div>
</template>

<script>
import tableDate from './components/tableDate.vue'
export default {
  components: {
    tableDate,
  }
}
</script>

<style>

</style>