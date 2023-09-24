<template>
    <div>
        <!-- 使用插件 用管道符+插件名 | mySlice -->
        <h1 @click="showName">我是：{{ name | mySlice}}</h1>
        <h1>性别：{{ sex }}</h1>
        <h1>年龄：{{ myAge }}</h1>
        <button @click="myAge++">age+1</button>
    </div>
</template>

<script>
//引入一个混合(复用showName点击事件)
import {showTips} from '../mixin'
export default {
    name:'hello',
    data(){
        return {
            myAge:this.age
        }
    },
    // props:{
    //     name: String,
    //     sex: String,
    //     age: Number,
    // },
    //接收数据限制+默认值的指定+必要性的限制(数据优先被接收)
    props:{
        name: {
            type: String,
            require:true, //必须传
        },
        sex: {
            type: String,
            require:true,
        },
        age: {
            type: Number,
            default:19 //默认值
        },
    },
    
    mixins:[showTips]
}
</script>

<style>

</style>