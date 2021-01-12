<template>
  <div id="app-5">
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage">Reverse Message</button>
  </div>
</template>

<script>
export default {
  name: "#com1",
  props: {
    message: String,
  },
};
var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split("").reverse().join("");
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
