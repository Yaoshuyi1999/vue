<template>
  <div>
    <div>
      <span>人生格言:</span>
      <input type="text" />
    </div>
    <div>
      <span>个人简介:</span>
      <textarea></textarea>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log("created--userinfo");
  },
  destroyed() {
    console.log("destroyed--userinfo");
  },
  activated() {
    //激活
    console.log("activated--userinfo");
  },
  deactivated() {
    //失去 激活
    console.log("deactivated--userinfo");
  },
};
</script>
