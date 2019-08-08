<template>
      <div class="head">
        <div class="head-title">
            <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            router
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
            text-color="#000" 
            active-text-color="#ffd04b">
             <img style="float:left;margin-right:60px;margin-top:6px" src="https://w0.wowoshijie.com/shbstaticfile/55main/img/logo-wowo.svg" alt=""> 
            <el-menu-item index="/index">首页</el-menu-item>
            <el-submenu index="2">
                <template slot="title" >产品与服务</template>
                <el-menu-item index="/ydzf">移动支付</el-menu-item>
                <el-menu-item index="/fksb">付款设备</el-menu-item>
                <el-menu-item index="/sjxt">商家系统</el-menu-item>
            </el-submenu>
            <el-menu-item index="/rjxz">软件下载</el-menu-item>
          <el-submenu index="4">
                <template slot="title" >合伙加盟</template>
                <el-menu-item index="/zmdl">招募代理</el-menu-item>
                <el-menu-item index="/cwdls">成为代理商</el-menu-item>
            </el-submenu>
            <el-menu-item index="/sjrz">商家入驻</el-menu-item>
            <el-menu-item index="/gywm">关于我们</el-menu-item>
            <a class="btn">商家登录</a>
            </el-menu>
        </div>
      </div>
</template>

<script>
  export default {
    data() {
      return {
    
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
   .head{
       width:100%;
       height:60px;
       position: fixed;
       top: 0;
       left:0;
       z-index: 999;
       min-width: 1250px;
       background: #fff;
       box-shadow: 0 0 3px #e7e7e7;
   }
   .head-title{
       width: 1200px;
       height: 60px;
       margin: 0 auto;
       display: flex;
   }
   .btn{
       border:1px solid #f77441;
       color:#f77441;
       padding:7px 15px;
       font-size: 14px;
       width: 60px;
       border-radius: 2px;
       position: absolute;
       top:10px;
       transition: 0.2s;
       text-align: center;
       margin-left:100px;
   }
   .btn:hover{
       background: #f77441;
       color:#fff;
        cursor:pointer;
   }
   .el-menu.el-menu--horizontal{
       border-bottom: 0;
   }
</style>
