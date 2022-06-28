<template>
  <div>
    <div>
      <input type="text" v-bind:value="val1" @input="inputFn" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () { 
    return {
      val:'',
      val1:''
    }
  },
  methods:{
    inputFn(e){
      this.val1=e.target.value
    }
  }
}
</script>