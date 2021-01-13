<template>
  <div id="app-4">
    <ul>
      <li v-for="(todo, index) in todos" v-bind:key="index">
        No.{{ index + 1 }} {{ todo.text }}
      </li>
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
ul {
  /* 箇条書きの点を消す */
  list-style-type: none;
  border: 2px #42b983 dashed;
}
</style>
