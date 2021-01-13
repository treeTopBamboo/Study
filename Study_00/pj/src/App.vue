<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <br />
    app-1<br />
    <com1 message="Happy Vue!" /><br />
    app-2<br />
    <com2 message="You loaded this page on" /><br />
    app-3<br />
    <com3 message="Now you see me" /><br />
    app-4<br />
    <com4 /><br />
    app-5<br />
    文字の逆転<br />
    <com5 message="Welcom to Vue.js!" /><br />
    app-6<br />
    テキストボックスの文字が反映される<br />
    <com6 message="Lucky Vue!" /><br />
    app-7<br />
    <com7 />
  </div>
</template>

<!-- 開発バージョン、便利なコンソールの警告が含まれています -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
import com1 from "./components/app-1.vue";
import com2 from "./components/app-2.vue";
import com3 from "./components/app-3.vue";
import com4 from "./components/app-4.vue";
import com5 from "./components/app-5.vue";
import com6 from "./components/app-6.vue";
import com7 from "./components/app-7.vue";

export default {
  name: "App",
  components: {
    com1,
    com2,
    com3,
    com4,
    com5,
    com6,
    com7,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
