<template>
    <tr>
        <td><input type="checkbox" /></td>
        <td>{{name}}</td>
        <td>{{price}}</td>
        <td>{{num}}</td>
        <td>{{price*num}}</td>
        <td><button>删除</button></td>
    </tr>
</template>

<script>
export default {
    props: ['name','price','num']
}
</script>

<style>

</style>