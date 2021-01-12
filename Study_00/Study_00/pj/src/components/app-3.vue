
<template>
  <div id="app-3">
    <span>{{ message }}</span>
  </div>
</template>

<script>
// seen:trueで表示、seen:falseで非表示
export default {
  name: "#com3",
  seen: true,
  props: {
    message: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
