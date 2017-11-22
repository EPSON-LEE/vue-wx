<template>
  <div id="wx-nav">
    <nav class="tabbar">
      <!-- 微信 -->
      <router-link class="tabbar-item" to="/">
        <span class="tabbar-con">
          <!-- 标记图 -->
          <p class="iconfont">&#xe601</p>
          <!-- 右上角的红色 -->
          <span class="tabbar-badge" style="position: absolute;top: -2px;right: -13px;">1</span>
        </span>
        <p class="tabbar-text">微信</p>
      </router-link>

      <!-- 通讯录 -->
      <router-link class="tabbar-item" to="/contact">
        <span class="tabbar-con">
          <!-- 标记图 -->
          <p class="iconfont">&#xe619</p>
          <!-- 右上角的红色 -->
          <span class="tabbar-badge tabbar-badge-dot" style="position: absolute;top: 0px;right: -8px;" />
        </span>
        <p class="tabbar-text">通讯录</p>
      </router-link>

      <!-- 发现 -->
      <router-link class="tabbar-item" to="/explore">
        <span class="tabbar-con">
          <!-- 标记图 -->
          <p class="iconfont">&#xe600</p>
          <!-- 右上角的红色 -->
          <!-- <span class="tabbar-badge"></span> -->
        </span>
        <p  class="tabbar-text">发现</p>
      </router-link>

      <!-- 我 -->
      <router-link class="tabbar-item" to="/self">
        <span class="tabbar-con">
          <!-- 标记图 -->
          <p class="iconfont">&#xe602</p>
          <!-- 右上角的红色 -->
          <span class="tabbar-badge" style="position: absolute;top: -10px;right: -10px;">1</span>
        </span>
        <p class="tabbar-text">我</p>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "wx-nav"
};
</script>
<style lang="css">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
}
.tabbar {
    display: flex;
    position: absolute;
    /* z-index: ; */
    bottom: 0;
    width: 100%;
    background-color: #F7F7FA;
}

.tabbar .tabbar-item {
    display: block;
    flex: 1;
    padding: 5px 0 0;
    font-size: 0;
    color: #999999;
    text-align: center;
}

.tabbar .tabbar-con {
    display: inline-block;
    position: relative;
}

.tabbar .tabbar-con .tabbar-icon {
    display: inline-block;
    width: 27px;
    height: 27px;
}

.tabbar .tabbar-con .tabbar-badge {
    display: inline-block;
    padding: .15em .4em;
    min-width: 8px;
    border-radius: 18px;
    background-color: #F43530;
    color: #FFFFFF;
    line-height: 1.2;
    text-align: center;
    font-size: 12px;
    vertical-align: middle;
}

.tabbar .tabbar-con .tabbar-badge .tabbar-badge-count {
    position: absolute;
    top: 0px;
    right: -8px;
}

.tabbar .tabbar-con .tabbar-badge-dot {
    padding: .4em;
    min-width: 0;
}

.tabbar .tabbar-text {
    text-align: center;
    color: #999999;
    font-size: 10px;
    line-height: 1.8;
}
/* iconfont 图标库 */
/* 微信 */
@font-face {
  font-family: 'iconfont';  /* project id 483787 */
  src: url('//at.alicdn.com/t/font_483787_8fddqihyx2f39pb9.eot');
  src: url('//at.alicdn.com/t/font_483787_8fddqihyx2f39pb9.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_483787_8fddqihyx2f39pb9.woff') format('woff'),
  url('//at.alicdn.com/t/font_483787_8fddqihyx2f39pb9.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_483787_8fddqihyx2f39pb9.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont";
    font-size:26px;
    font-style:normal;
}
</style>


