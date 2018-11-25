<template>
  <div id="app" style="background-color: rgba(235, 235, 235, 0.08);">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body {
    margin: 0px;
  }
  .el-header {
    padding: 0px 0px;
  }
  .el-footer {
    padding: 0px;
  }
  .el-main {
    padding: 0px;
  }
</style>
