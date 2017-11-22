<template>
  <p>这是子组件:{{ !status }}</p>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Welcome",
  computed: mapState({
    // 以下两句话等效
    // count: state => state.count,
    count: "count",
    status: "status",
    // 如果想使用this获取局部状态就必须使用，常规函数
    countPlus(state) {
      return this.localCount + state.count;
    }
  })
};
</script>
