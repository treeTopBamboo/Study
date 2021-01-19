<template>
  <div id="app">
    <div class="routenavi">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view />
    </div>

    <hr />
    <!-- 親側では<v-slot:default>で受け取ることで、子コンポーネントのjpNameの値をとることができる -->
    <!-- <v-slot:default="slotProps">のslotPropsは任意なので、重複がなければどんな文字列でも可 -->
    <slotTest v-slot:default="slotProps">
      {{ slotProps.userNm.jpName }}
    </slotTest>

    <hr />
    <modal />
  </div>
</template>

<script>
import slotTest from "./components/SlotScopeTest.vue";
import modal from "./components/ModalTest";

export default {
  name: "app",
  components: {
    slotTest,
    modal,
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
}
#routenavi a {
  font-weight: bold;
  color: #2c3e50;
}
#routenavi a.router-link-exact-active {
  color: #42b983;
}
</style>
