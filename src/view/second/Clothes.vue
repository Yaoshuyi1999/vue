<template>
  <div>
    <div class="nav">
     <router-link to="/classify/clothes/child" class="son">童装</router-link>
      <router-link to="/classify/clothes/girl" class="son">女装</router-link>
      <router-link to="/classify/clothes/boy" class="son">男装</router-link>
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