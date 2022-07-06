<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Panel>
        <template v-slot:title>
          <h4>芙蓉楼送辛渐</h4>
        </template>
        <template v-slot:content>
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </template>
      </Panel>
      <Panel>
        <template v-slot:title>
          <h4>图片呀</h4>
        </template>
        <template v-slot:content>
          <img src="../assets/mm.gif" alt="">
        </template>
      </Panel>
      <Panel></Panel>
    </div>
  </div>
</template>

<script>
import Panel from "../components/04/Pannel.vue";
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