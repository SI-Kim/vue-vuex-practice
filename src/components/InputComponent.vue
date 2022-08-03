<template>
  <div>
    <label
      >입력값
      <input :value="text" @input="textHandler" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
    textHandler(val) {
      this.text = val;
    },
  },
};
</script>

<style>
</style>