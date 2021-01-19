<template>
  <div class="slotTest">
    <p>
      name:<slot :userNm="userNm">{{ useNm.enName }}</slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "slotTest",
  data() {
    return {
      userNm: {
        enName: "Mirai Taro",
        jpName: "未来太郎", // ←slot内で参照したいデータ
      },
    };
  },
};
</script>

<style>
</style>