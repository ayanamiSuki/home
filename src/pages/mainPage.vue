<template>
  <el-container class="container">
    <el-header>
      <transition name="sldieDown">
        <my-header v-show="isloaded" />
      </transition>
    </el-header>
    <el-main>
      <main-page />
    </el-main>
    <el-footer height="30px">
      <my-footer />
    </el-footer>
  </el-container>
</template>

<script>
import myHeader from "../components/header";
import myFooter from "../components/footer";
import mainPage from "../components/main";
export default {
  components: { myHeader, myFooter, mainPage },
  data() {
    return {
      isloaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isloaded = true;
    }, 1000);
  }
};
</script>

<style lang="css" scoped>
.container {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}
.sldieDown-enter-active,
.sldieDown-leave-active {
  transition: transform 0.5s;
}
.sldieDown-enter {
  transform: translateY(-60px);
}
</style>