<template>
  <div id="app-7">
    <ol>
      <!--
      各 todo-item の内容を表す todo オブジェクトを与えます。
      これにより内容は動的に変化します。
      また後述する "key" を各コンポーネントに提供する必要があります。
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
export default {
  name: "#com1",
  props: {
    message: String,
  },
};
var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Vegetables" },
      { id: 1, text: "Cheese" },
      { id: 2, text: "Whatever else humans are supposed to eat" },
    ],
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
