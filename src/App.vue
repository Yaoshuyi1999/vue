<template>
  <div>
    <div class="nav">
      <router-link to="/home" class="son">首页</router-link>
      <router-link to="/classify" class="son">分类</router-link>
      <router-link to="/order" class="son">订单</router-link>
      <router-link to="/my" class="son">我的</router-link>
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
  font-size: 24px;
  padding: 5px 10px;
}
</style>