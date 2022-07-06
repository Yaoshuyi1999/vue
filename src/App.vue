<template>
  <div class="box">
    <form>
      <div class="boxhead">
        <span @click="comName='phone'" :class='{spanStyle:comName=="phone"}'>手机注册</span>
        <span @click="comName='email'" :class='{spanStyle:comName=="email"}'>邮箱注册</span>
      </div>
      <div>
        <keep-alive>
          <component :is='comName'>
            <template v-slot:other>
              <input type="text" placeholder="请输入验证码" class="yzm">
              <button class="sendYzm">发送验证码</button>
              <p>登录密码</p>
              <input type="password" placeholder="请输入密码">
              <p>再次输入密码</p>
              <input type="password" placeholder="请确认输入密码">
            </template>
          </component>
        </keep-alive>
      </div>
    </form>
  </div>
</template>

<script>
import phone from './components/phone'
import email from './components/email'
export default {
  components: {
    phone,
    email
  },
  data(){
    return{
      comName: 'phone',
    }
  }
}
</script>

<style scoped>
input{
    width:300px;
    height:25px;
    padding-left: 5px;
}
.yzm{
    width:200px;
    margin-right: 10px;
}
.sendYzm{
  height:30px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
}
.spanStyle{
  color: blue;
  border-bottom: 2px solid blue;
}
.boxhead{
  text-align: center;
  margin-bottom: 30px;
}
span{
  margin-right: 30px;
  font-size: 28px;
  text-align: center;
}
</style>