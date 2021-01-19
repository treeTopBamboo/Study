<template>
  <div id="app">
    <div class="routenavi">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view />
    </div>
    <hello />
    <hr />
    <modal />
  </div>
</template>

<script>
import hello from "./components/HelloWorld";
import modal from "./components/ModalTest";

export default {
  name: "app",
  components: {
    hello,
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
