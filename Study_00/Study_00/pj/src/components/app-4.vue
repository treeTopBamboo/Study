<template>
  <div id="app-4">
    <ul v-for="(todo, index) in todos" v-bind:key="index">
      <li>No.{{ index + 1 }} {{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "#com4",
  data: function () {
    return {
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
