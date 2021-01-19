<template>
  <div id="modalTest">
    <p>モーダルウィンドウ実験中</p>
    <button v-on:click="openModal">Click</button>
    <div id="overlay" v-show="showContent">
      <div id="modalcontent">
        <p>これがモーダルウィンドウです。</p>
        <p><button v-on:click="closeModal">close</button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data: function () {
    return {
      showContent: false,
    };
  },
  methods: {
    openModal: function () {
      this.showContent = true;
    },
    closeModal: function () {
      this.showContent = false;
    },
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
#modalcontent {
  z-index: 2;
  width: 50%;
  padding: 1em;
  background: #fff;
}
</style>