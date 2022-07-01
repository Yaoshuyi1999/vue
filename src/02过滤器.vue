<template>
  <div>
    {{ msg | toUp }}
    <h1>{{ msg | toDown }}</h1>

    <h2 v-bind:title=" msg | toUp ">{{ msg | toUp | toReverse }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello Vue",
    };
  },
  filters: {
    // toUp(val) {
    //   return val.toUpperCase();
    // },
    toUp:(val)=>{return val.toUpperCase();}
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
</style>