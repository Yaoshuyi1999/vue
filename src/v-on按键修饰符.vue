<template>
  <div>
   <input type="text" @keydown.enter="enterFn">
    <hr>
    <input type="text" @keydown.esc="escFn">
  </div>
</template>

<script>

export default {
  name: 'App',
  data () { 
    return {

    }
  },
  methods:{
    enterFn(){
      alert(1);
    },
    escFn(){
      alert(2);
    }
  }
}
</script>