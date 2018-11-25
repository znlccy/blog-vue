<template>
  <div id="carousel">
    <el-carousel height="460px">
      <el-carousel-item>
        <img src="../../assets/banner/slide-1.jpg" width="100%" height="460px" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/banner/slide-2.jpg" width="100%" height="460px" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/banner/slide-3.jpg" width="100%" height="460px" alt="">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../../assets/banner/slide-4.png" width="100%" height="460px" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>
  .el_carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el_carousel__item img {
    width: 100%;
    height: 100%;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
