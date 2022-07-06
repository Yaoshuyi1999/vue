<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <!-- 需求: 插槽时, 使用组件内变量 -->
      <!-- scope变量: {row: defaultObj} -->
      <Panel>
        <template v-slot="scope">
          <p>{{scope.row.defaultTwo}}</p>
        </template>
      </Panel>
    </div>
  </div>
</template>

<script>
import Panel from "../components/05/Pannel";
export default {
  components: {
    Panel
  },
};
</script>

<style>
#app {
  width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 4px solid blueviolet;
  border-radius: 1em;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.5);
  padding: 1em 2em 2em;
}
</style>