<template>
  <div id="app" style="padding: 20px">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="username" />
    </div>
    <br />
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" />
    </div>
    <br />
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <br />
    <div>
      <button @click="add(index)">添加/修改</button>
    </div>
    <br />
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.gender }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [],
      username: '',
      age: '',
      gender: '',
      flag: true,
    };
  },
  methods: {
    add(id) {
      if (this.username === '' || this.age === '' || this.gender === '')
        return alert('请输入相关信息!');
      if (this.flag) {
        this.arr.push({
          username: this.username,
          age: this.age,
          gender: this.gender,
        });
        this.flag = false;
      } else {
        this.arr.splice(id, 1, {
          username: this.username,
          age: this.age,
          gender: this.gender,
        });
        this.flag = true;
      }
      this.username = '';
      this.age = '';
      this.gender = '';
    },
    del(id) {
      this.arr.splice(id, 1);
    },
    edit(id) {
      this.username = this.arr[id].username;
      this.age = this.arr[id].age;
      this.gender = this.arr[id].gender;
    },
  },
};
</script>
