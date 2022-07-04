<template>
  <div>
    <table
      border="1"
      width="700"
      style="border-collapse: collapse"
    >
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th>
            <input type="checkbox" /> <span>全选</span>
          </th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <shop_tr v-for="(obj,index) in goodList" :key="index"
          :name='obj.name'
          :price='obj.price'
          :num='obj.num'
          :checked='obj.num*obj.price'
        ></shop_tr>
      </tbody>
      <tfoot>
        <tr>
          <td>合计:</td>
          <td colspan="5">
            
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import shop_tr from './components/shop_tr'
import shop from './components/shop'
export default {
  data() {
    return {
      goodList: [
        {
          name: "诸葛亮",
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: "蔡文姬",
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: "妲己",
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: "鲁班",
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  components: {
    shop,
    shop_tr
  }
};
</script>

<style>
</style>