<template>
  <div>
    <!-- 需求:将数组arr的内容渲染到ul中 
      v-for 循环数据 每循环一次 生成对应的dom元素
      key: 唯一值 类型string/number 提高性能
      -->
    <ul>
      <!-- item  stuArr数组里元素
          index 索引号-->
      <li v-for="item in stuArr" :key="item.id">
        {{ item.name }} - {{ item.sex }} - {{ item.hobby }}
      </li>
    </ul>
    <br />
    <h1>遍历对象</h1>
    <ul>
      <!-- item 值属性对应的值
       key 属性-->
      <li v-for="(item, key) in tObj" :key="item">{{ item }}-{{ key }}</li>
    </ul>
    <h1>遍历数字 -- 了解</h1>
    <ul>
      <li v-for="item in count" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["刘昊然", "易烊千玺", "肖战","任嘉伦"],
      stuArr: [
        {
          id: 1001,
          name: "孙悟空",
          sex: "男",
          hobby: "吃桃子",
        },
        {
          id: 1002,
          name: "猪八戒",
          sex: "男",
          hobby: "背媳妇",
        },
      ],
      tObj: {
        name: "小黑",
        age: 18,
        class: "1期",
      },
      count: 10,
    };
  },
};
</script>