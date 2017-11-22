<template>
  <div id="app">
    <!-- 进场页 -->
    <!-- <child />
    <button @click="add">+</button>
    <span>count:</span> {{count}}
    <button @click="decrement">-</button>
    <p>{{ status }}</p>
    <p @click="changeStatus">切换显示效果</p>
    <div class="outter" :class="{hide: status}" />
    <div>
      <router-link to="/user/foo">/user/foo</router-link>
      <router-link to="/user/bar">/user/bar</router-link>
    </div> -->

    <Welcome />
    <div class="content">
      <keep-alive>
              <router-view></router-view>
      </keep-alive>
      <!-- footer -->
      <footer class="app-footer">
        <wx-nav />
      </footer>
    </div>
  </div>
</template>

<script>
import Welcome from "./components/common/Welcome";
import wxNav from "./components/common/wx-nav";

import { mapState } from "vuex";
export default {
  name: "app",
  components: {
    Welcome,
    wxNav
    // child
  },
  computed: mapState({
    // 以下两句话等效
    // count: state => state.count,
    count: "count",
    status: "status",
    // 如果想使用this获取局部状态就必须使用，常规函数
    countPlus(state) {
      return this.localCount + state.count;
    }
  }),
  methods: {
    add() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    changeStatus() {
      this.$store.commit("changeStatus");
    }
  }
};
</script>

<style scoped>

</style>
