<template>
  <div class="main" @click="tx($event)">
    <div class="box">
      <el-row class="welcome">welcome back!</el-row>
      <el-row>Talk is cheap. Show me the code.</el-row>
      <el-row>欢迎来到私人储物间，奥利给( ◔ ڼ ◔ )！</el-row>
    </div>

    <transition name="fade">
      <div class="btns">
        <span class="code-store">code store</span>
        <span class="picture-store">picture store</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1500);
  },
  methods: {
    tx(e) {
      console.log(e);
      let cat = document.createElement("img");
      cat.className = "miaowu";
      cat.src =
        "https://wx1.sinaimg.cn/small/9afd6f06gy1gci32jwszpj20be05u0up.jpg";
      cat.style.width = 30 + "px";
      cat.style.height = 20 + "px";
      cat.style.position = "absolute";
      console.log(e.clientX);
      cat.style.top = e.y + "px";
      cat.style.left = e.x + "px";
      document.getElementById("app").appendChild(cat);
      setTimeout(() => {
        cat.remove();
      }, 1500);
    }
  }
};
</script>

<style scoped>
.main {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.box {
  width: 600px;
  text-align: center;
  margin-top: -100px;
}
.box .el-row {
  padding: 20px 0;
}
.welcome {
  font-size: 40px;
  border-bottom: 1px solid #fff;
}
.btns {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 600px;
  padding-top: 20px;
}
.btns span {
  border: 1px solid #fff;
  padding: 10px 30px;
  font-size: 16px;
  cursor: pointer;
}
.btns span:hover {
  background: rgba(0, 0, 0, 0.3);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .welcome {
    font-size: 30px;
  }
  .box,
  .btns {
    width: 100%;
  }
}
</style>