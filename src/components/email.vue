<template>
  <div class="inputemail">
    <slot name="adress"></slot>
    <div>
        <p>电子邮箱</p>
        <input 
            id="email" 
            type="email" 
            placeholder="请输入电子邮箱"
        >
    </div>
    <slot name="other"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.inputemail{
    margin-left: 30px;
}
#email{
    width:300px;
    height:25px;
    padding-left: 5px;
    margin-top: -200px;
    margin-bottom: 20px;
}
p{
    line-height: 5px;
}
</style>