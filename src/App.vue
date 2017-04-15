<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
    <router-view></router-view>
    <div class="footer">
        <div class="footer-item">
          <router-link to='/'>
            <text class="text-center">接收通知</text>
          </router-link>
        </div>
        <div class="footer-item">
          <router-link to='/sendtask'>
            <text class="text-center">发送通知</text>
          </router-link>
        </div>
        <div class="footer-item">
          <router-link to="/joingroup">
            <text class="text-center">加入群</text>
          </router-link>
        </div>
        <div class="footer-item">
          <router-link to="/login">
            <text class="text-center">登录</text>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
        target: 'World'
      }
    },
    methods: {
      update: function (e) {
        this.target = 'Weex'
        console.log('target:', this.target)
      }
    }
  }
</script>

<style>
  .wrapper { align-items: center; padding-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
  .footer{
    position: fixed;
    bottom: 0;
    display: inline-block;
    text-align: center;
    width: 100%;
    background-color: #81d4fa;
  }

  .footer-item{
    display: inline-block;
    padding: 10px;
    width: 25%;
    text-align: center;
  }


  .text-center{
    align-items: center
  }
</style>