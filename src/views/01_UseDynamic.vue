<template>
  <div>
    <button @click="comName = 'UserName'">账号密码填写</button>
    <button @click="comName = 'UserInfo'">个人信息填写</button>

    <p>下面显示注册组件-动态切换:</p>
    <div style="border: 1px solid red">
      <component :is="comName"></component>
    </div>
  </div>
</template>

<script>
// 目标: 练习动态组件的使用
// 场景: 同一个挂载点要切换 不同组件 显示
// 需求: 点击按钮切换组件
// 1. 创建要被切换的组件 - 标签+样式
// 2. 引入到要展示的vue文件内, 注册
// 3. 设置挂载点<component :is="变量"></component>，  变量-承载要显示的组件名
// 4. 点击按钮-切换comName的值为要显示的组件名
import UserInfo from '../components/01/UserInfo.vue';
import UserName from '../components/01/UserName.vue';
export default {
  data() {
    return {
      comName: 'UserName',
    };
  },
  components: {
    UserInfo,
    UserName,
  },
};
</script>

<style></style>
