<template>
  <div id="app-6">
    <p>{{ message }}</p>
    <input v-model="message" />
  </div>
</template>

<script>
export default {
  name: "#com1",
  props: {
    message: String,
  },
};
var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!",
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
