<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <br />
    <com1 message="Happy Vue!" /><br />
    <com2 message="You loaded this page on" /><br />
    <com3 message="Now you see me" /><br />
    <com4 /><br />
  </div>
</template>

<!-- 開発バージョン、便利なコンソールの警告が含まれています -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

<script>
import com1 from "./components/app-1.vue";
import com2 from "./components/app-2.vue";
import com3 from "./components/app-3.vue";
import com4 from "./components/app-4.vue";

export default {
  name: "App",
  components: {
    com1,
    com2,
    com3,
    com4,
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
