<template>
  <div>
    <h1>{{msg}}</h1>
    <button v-on:click="one">翻转</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () { 
    return {
      msg:'Hello, world'
    }
  },
  methods:{
    one(){
      this.msg=this.msg.split('').reverse().join('')
    }
  }
}
</script>