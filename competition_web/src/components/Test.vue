<template>
    <!--交流测试-->
    <div class="communi-classify">
        <h3>{{ message }}</h3>
        <p>这里是交流的某个组件</p>
        <div class="link" style="pointer:cursor">随便跳转一个连接
            <router-link to='/'>这里是跳转的连接</router-link>
        </div>
        <ul>
            <li v-for = "(item,index) in gamelist">
                <router-link :to="'/main' + item.name ">{{ item.money }}</router-link>
                <span>{{ item.name }}</span>&nbsp;&nbsp;<span>{{ item.money }}</span>
            </li>
        </ul>
    </div>
</template>

<script>

    export default{
        data : function(){
            return {
               message : "随便来一条信息",
               gamelist : [
                   {
                    name : "张三",
                    money : "$3"
                   },
                   {
                    name : "李四",
                    money : "$6"
                   },
                   {
                    name : "王五",
                    money : "$8"
                   }
               ]
            }
        },
        components : {},
        computed : {},
        methods : {},
        files : {}
    }
</script>