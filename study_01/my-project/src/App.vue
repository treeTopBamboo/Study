<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-view />

      <!-- モーダルウィンドウ実験 -->
      <div class="testModal">
        <button>Click</button>
        <div id="overlay" v-show="showContent" v-on:click="closeModal">
          <div id="content">
            <p>これがモーダルウィンドウです。</p>
            <button v-on:click="closeModal">close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
new Vue({
  el: ".testModal",
  data: {
    showContent: false,
  },
  methods: {
    openModal: function () {
      this.showContent = true;
    },
    closeModal: function () {
      this.showContent = false;
    },
  },
});
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
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
