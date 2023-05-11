<template>
    <div id="login">
        <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="item in menuTab" :key="item.id" :class="{'current':item.current}" @click="toggleMenu(item)">{{ item.text }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import * as api from '@/api/upload.js'
import request from '@/utils/request'
export default {
    name: 'login',
    data() {
        return {
            menuTab:[
                { text:'登录', current: true },
                { text:'注册', current: false }
            ],
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {
        toggleMenu(data) {
            this.menuTab.forEach((item,index)=>{
                item.current = false
            })
            data.current = true

            this.requestSet()
        },
        requestSet() {
            axios.get('/user?ID=12345').then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error)
            })
        },
    }
}
</script>
<style lang="scss" scoped>
#login {
    height: 100wh;
    background-color:#344a5f;
}
.login-wrap {
    width: 330px;
    margin: auto;
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        width: 88px;
        line-height: 36px;
        font-size: 14px;
        color:#fff;
        border-radius: 2px;
        cursor: pointer;
    }
    .current {
        background-color:rgba(0,0,0,.1);
    }
}
</style>