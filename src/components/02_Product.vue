<template>
  <div class="my-product">
    <h3>标题：{{title}}</h3>
    <p>价格：{{price}}</p>
    <p>{{info}}</p>
  </div>
</template>

<script>
export default {
    props: ['key','title','price','info']
}
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
