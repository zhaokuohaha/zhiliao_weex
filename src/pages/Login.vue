<template>
    <div class="text-center">
        <text>登录</text>
        <input type="text" v-model="account.email"> <br>
        <input type="password" v-model="account.password">
        <button class="btn btn-primary" @click="login()">
            <text>登录</text>
        </button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                account:{
                    email: '1014336691@qq.com',
                    password: '123qwe'
                },
            }
        },
        methods:{
            login(){
                let tvm = this;
                axios.post('/api/Account/login',tvm.account).then(function(res){
                    console.log(res);
                });
            }
        }
    }

</script>