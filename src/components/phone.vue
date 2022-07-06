<template>
  <div class="inputPhone">
    <slot name="adress"></slot>
    <div>
        <p>手机号码</p>
        <input 
            id="mobile" 
            type="text" 
            onkeyup="value=value.replace(/[^\d]/g,'')" 
            maxlength=11
            placeholder="请输入手机号码"
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
.inputPhone{
    margin-left: 30px;
}
#mobile{
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