<template>
  <el-row class="list" type="flex" align="middle">
    <el-col class="list-item">
      <span>HOME</span>
    </el-col>
    <el-col class="list-item">
      <span>LIST</span>
    </el-col>
    <el-col class="list-item">
      <span>ABOUT</span>
    </el-col>
    <el-col class="list-item pic">
      <img
        class="avatar"
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583216331904&di=00945553e9dc460651bc900a40d4199d&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F57c1523ab7e468e1709b175ffb70214843fc6367.jpg"
        alt
      />
      <span>MY</span>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style>
.list {
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
}
.list-item {
  text-align: center;
  line-height: 60px;
}
.list-item span {
  padding: 10px 30px;
  cursor: pointer;
  display: inline-block;
  transition: all 0.3s linear;
}
.list-item span:hover {
  text-decoration: underline;
  transform: scale(1.3);
}
.avatar {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  vertical-align: middle;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .pic span {
    display: none;
  }
  .list-item {
    font-size: 12px;
  }
}
</style>