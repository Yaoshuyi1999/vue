<template>
  <div>
    <div class="nav">
     <router-link to="/classify/food" class="son">美食</router-link>
      <router-link to="/classify/use" class="son">生活用品</router-link>
      <router-link to="/classify/clothes" class="son">服饰</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav .son{
  font-size: 20px;
  padding: 5px 10px;
}
</style>