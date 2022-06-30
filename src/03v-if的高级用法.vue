<template>
  <div>
    <p v-if="age >= 18">成年人</p>
    <p v-else-if="age >= 12">青少年</p>
    <p v-else>儿童</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age:18
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>