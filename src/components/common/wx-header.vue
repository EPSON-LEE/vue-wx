<template>
  <div>
    <div class="header">
      <div class="center">
        <span class="center-text">微信</span>
        <span class="parentheses"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wx-nav"
};
</script>

<style>
.header {
  height: 45px;
  width: 100%;
  line-height: 45px;
  background-color: #1b1b1b;
}
.header .center .center-text{
  color:azure;
  font-family:Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif
}
.parentheses:before {
  content: "("
}
.parentheses:after {
  content: ")"
}
</style>


