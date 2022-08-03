<template>
  <div>
    <textarea disabled></textarea>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>