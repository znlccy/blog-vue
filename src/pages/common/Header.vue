<template>
  <div id="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#ffd04b">
      <el-menu-item index="1">
          <router-link to="/">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/article/index">文章</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <a href="#">技术贴</a>
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">新闻</template>
          <el-menu-item index="4-1">创建新闻</el-menu-item>
          <el-menu-item index="4-2">浏览新闻</el-menu-item>
          <el-menu-item index="4-3">新闻列表</el-menu-item>
          <el-menu-item index="4-4">编辑新闻</el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
          <router-link to="/about/us">关于我们</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/contact/us">联系我们</router-link>
        </el-menu-item>
        <el-menu-item index="7" style="float: right">
          <router-link to="/user/login">登录</router-link>
        </el-menu-item>
        <el-menu-item index="8" style="float: right">
          <router-link to="/user/registered">注册</router-link>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
    export default {
      name: "Header",
      data() {
        return {
          activeIndex: '1'
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
  .el-menu {
    background-color: #545c64;
    color: #fff;
    margin: 0px 0px;
  }

  #header .el-menu a {
    color: #fff;
    text-decoration: none;
  }

  .el-header {
    padding: 0px;
  }
</style>
