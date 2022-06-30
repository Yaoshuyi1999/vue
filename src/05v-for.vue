<template>
  <div id="app">
      <ul>
        <li v-for="item in arr" :key="item">
          {{ item }}
        </li>
        <li v-for="(item, index) in arr" :key="index">
          {{ index }} - {{ item }}
        </li>
      </ul>

  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["刘昊然", "易烊千玺", "肖战","任嘉伦"],
    };
  },
};
</script>