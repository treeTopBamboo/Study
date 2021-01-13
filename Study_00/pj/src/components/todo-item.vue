<template>
  <div id="todo-list-app">
    <ol>
      <!--
      各 todo-item にその内容を表す todo オブジェクトを指定することで、
      内容が動的に変化します。後述する "key" も各コンポーネントに
      指定する必要があります。
    -->
      <todo-item
        v-for="item in groceryList"
        v-bind:todo="item"
        v-bind:key="item.id"
      ></todo-item>
    </ol>
  </div>
</template>

<script>
const TodoList = {
  data() {
    return {
      groceryList: [
        { id: 0, text: "Vegetables" },
        { id: 1, text: "Cheese" },
        { id: 2, text: "Whatever else humans are supposed to eat" },
      ],
    };
  },
};

const app = Vue.createApp(TodoList);

app.component("todo-item", {
  props: ["todo"],
  template: `<li>{{ todo.text }}</li>`,
});

app.mount("#todo-list-app");
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ol {
  /* 箇条書きの点を消す */
  /* list-style-type: none; */
  border: 1px #42b983;
}
</style>
