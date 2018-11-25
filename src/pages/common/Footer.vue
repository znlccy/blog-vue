<template>
  <div id="footer">
    <el-row :gutter="20">
      <el-col :span="6">
        <h4>关于我们</h4>
        <ul style="font-size: 14px; text-align: left;margin-left:23%">
          <li>
            微信小程序
          </li>
          <li>应用</li>
          <li>WEB前后端</li>
          <li>分布式开发</li>
        </ul>
      </el-col>
      <el-col :span="6">
        <h4>主要业务</h4>
        <ul style="font-size: 14px; text-align: left;margin-left:30%">
          <li>微信小程序</li>
          <li>应用</li>
          <li>WEB前后端</li>
          <li>分布式开发</li>
        </ul>
      </el-col>
      <el-col :span="6">
        <h4>合作伙伴</h4>
        <ul style="font-size: 14px; text-align: left;margin-left:30%">
          <li>阿里巴巴</li>
          <li>腾讯</li>
          <li>百度</li>
          <li>京东</li>
        </ul>
      </el-col>
      <el-col :span="6">
        <h4>联系我们</h4>
        <ul style="font-size: 14px; text-align: left;margin-left:23%">
          <li>电话: 021-7758458</li>
          <li>QQ: 2654115487</li>
          <li>微信: 454514540</li>
          <li>邮箱:152454541@qq.com</li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
  #footer {
    background-color: #545c64;
    width: 100%;
    height: 240px;
    color: gray;
  }

  .el-row {
    margin: 0px 40px;
  }

  .el-col {

  }

  .el-col li {
    list-style: none;
    line-height: 40px;
  }
</style>
