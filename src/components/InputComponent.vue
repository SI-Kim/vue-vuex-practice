<template>
  <div>
    <label
      >입력값
      <input />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: {
        type: String,
        default: "",
      },
    };
  },
};
</script>

<style>
</style>