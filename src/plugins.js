//不用引用就能全局使用
export default {
    install(Vue) {
        //过滤器
        Vue.filter('mySlice', function (value) {
            return value.slice(0, 3)
        })
        //全局自定义指令(获取焦点)
        Vue.directive('fbind', {
            //指令与元素成功绑定时
            bind(element, binding) {
                element.value = binding.value
            },
            //指令所在元素被插入页面时
            inserted(element, binding) {
                element.focus()
            },
            //指令所在模板被重新解析时
            update(element, binding) {
                element.value = binding.value
            }
        })
        //定义混入
        Vue.mixin({
            methods: {
                showName() {
                    alert('你好啊')
                }
            },
        })
    }
}