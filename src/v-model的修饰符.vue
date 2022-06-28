<template>
  <div>
     <div>
      <span>123:</span>
      <input type="text" v-model.number="username" />
    </div>
    <div>
      <span>密码:</span>
      <input type="text" v-model.trim="pass" />
    </div>
    <div>
      <span>自我介绍</span>
      <textarea v-model.lazy="intro"></textarea>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () { 
    return {
      username: "",
      pass: "",
      intro: "",
    }
  },
  methods:{
  }
}
</script>