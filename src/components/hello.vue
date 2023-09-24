<template>
  <h1>我是子组件：{{ msg }}</h1>
</template>

<script>
export default {
    name:'hello',
    props:{
        msg:String,
    }
}
</script>

<style>

</style>