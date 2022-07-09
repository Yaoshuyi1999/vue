<template>
  <div>
      <router-link to="/find/ranking/soaring">飙升排行榜</router-link>
      <router-link to="/find/ranking/new">新歌排行榜</router-link>
      <router-link to="/find/ranking/hot">热歌排行榜</router-link>
      
      <div style="1px solid green;">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>