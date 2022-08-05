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
    textHandler(event) {
      this.text = event.target.value;
    },
  },
};
</script>

<style>
</style>