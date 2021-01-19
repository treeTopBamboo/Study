<template>
  <div id="app">
    <div class="routenavi">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <hello />
    <hr />
  </div>
</template>

<script>
import hello from "./components/HelloWorld";

export default {
  name: "app",
  components: {
    hello,
  },
};
</script>

<style>
#overlay {
  /* 要素を重ねた時の順番(小さな数字ほど重ね順が下) */
  z-index: 1;

  /* 画面全体を覆う設定 */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  /* 画面の中央に要素を表示させる設定 */
  display: flex;
  align-items: center;
  justify-content: center;
}
/* overlayの要素よりも上に表示させるためz-index=”2″を設定 */
#content {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}

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
