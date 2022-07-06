<template>
  <div id="container">
    <div id="app">
      <h3>案例：折叠面板</h3>
      <Panel>
        <p>寒雨连江夜入吴,</p>
        <p>平明送客楚山孤。</p>
        <p>洛阳亲友如相问，</p>
        <p>一片冰心在玉壶。</p>
      </Panel>
      <Panel>
        <img src="../assets/mm.gif" alt="">
      </Panel>
      <Panel>
        <h1>名字名字</h1>
      </Panel>
      <Panel></Panel>
    </div>
  </div>
</template>

<script>
import Panel from "../components/03/Panel.vue";
export default {
  components: {
    Panel,
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