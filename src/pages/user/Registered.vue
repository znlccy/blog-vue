<template>
  <div id="login">
    <div id="login-header">
      <div class="left">
        <img src="../../assets/logo.png" width="64px" style="margin: 10px auto" height="64px" alt="">
      </div>
    </div>
    <div id="login-content">
      <div class="login-box">
        <h4>免费注册</h4>
        <el-form>
          <div class="el-form--label-top">
            <el-input prefix-icon="el-icon-date" id="username" style="float: right;width: 80%;margin: 0px 10%"></el-input>
          </div>
          <div class="el-form--label-top">
            <el-input id="password" type="password" prefix-icon="el-icon-search" style="float: right;width: 80%;margin: 15px 10%"></el-input>
          </div>
          <div class="el-form--label-top">
            <el-input id="confirm-password" type="password" prefix-icon="el-icon-search" style="float: right;width: 80%;margin: 0px 10%"></el-input>
          </div>
          <el-button type="primary"  id="login-btn" round style="margin: 15px 0px">注册</el-button>
          <!--<p>
            <router-link to="/user/forget" style="text-decoration: none; font-size: 14px">忘记密码</router-link>
            <router-link to="/user/registered" style="text-decoration: none; font-size: 14px">免费注册</router-link>
          </p>-->
        </el-form>
      </div>
    </div>
    <div id="login-footer">
      <el-row :gutter="16">
        <el-col :span="24">
          年后
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Registered"
  }
</script>

<style scoped>

  #login-header {
    width: 100%;
    height: 85px;
    background-color: #fff;
  }

  #login-header .left {
    width: 23%;
    background-color: #fff;
    height: 100%;
  }

  #login-header .right {
    width: 77%;
    font-size: 13px;
    background-color: #545c64;
    height: 100%;
  }

  #login-content {
    width: 100%;
    height: 550px;
    background: url("../../assets/images/background.jpg");
    background-repeat: no-repeat;
  }

  #login-content .login-box {
    border: 1px solid gray;
    width: 30%;
    float: right;
    height: 62%;
    margin: 8% 5%;
    border-radius: 3px;
    background-color: rgba(222, 222, 222, 0.8);
  }

  #login-btn {
    width: 60%;
    margin: 0px 0px;
  }
</style>
