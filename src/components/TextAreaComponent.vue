<template>
  <div>
    <textarea v-bind="text" disabled />
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