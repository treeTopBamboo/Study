<template>
  <div id="app-7">
    <ol v-for="(item, id) in groceryList" v-bind:todo="item" v-bind:key="id">
      <todo-item>
        {{ item.text }}
      </todo-item>
    </ol>
  </div>
</template>

<script>
export default {
  name: "#com7",
  data: function () {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ol {
  /* 箇条書きの点を消す */
  /* list-style-type: none; */
  border: 2px #42b983 dashed;
}
</style>
