<template>
<div>
  {{msg}}
  <h1>{{obj.name}}</h1>
  <h1>{{obj.age}}</h1>
  <h4>{{obj.age>=18?'成年':'回家喝奶吧'}}</h4>

</div>
</template>

<script>
import imgLocal from './assets/logo.png';
export default {
  data(){
    return{
      msg:'Hello Vue',
      obj:{
        name:'vue',
        age:14
      },
    }
  }
}
</script>

<style>

</style>