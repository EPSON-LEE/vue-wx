<template>
<!-- 使用hide不用v-show————方便产生转场动画 -->
  <div class="welcome" :class="{hide: hide}">
    <img src="https://sinacloud.net/vue-wechat/images/welcome.jpg" alt="" />
  </div>
</template>
<script>
export default {
  name: "Welcome",
  data() {
    return {
      hide: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.hide = true;
    }, 3000);
  }
};
</script>

<style scoped>
.welcome {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000b17;
  /* 切换转场动画 */
  animation: welcome 0.5s;
  transition: 0.3s;
  /*  堆叠等级最高 */
  z-index: 100;
}
.welcome img {
  width: 100%;
}
.welcome.hide {
  opacity: 0;
  visibility: hidden;
}
@keyframes welcome {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
@-webkit-keyframes welcome {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
@-o-keyframes welcome {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@-moz-keyframes welcome {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
