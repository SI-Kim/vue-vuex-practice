<template>
  <header-box />
  <section>
    <hello-world />
    <input-component />
    <text-area-component />
  </section>
  <footer-box />
</template>

<script>
import {
  HelloWorld,
  InputComponent,
  TextAreaComponent,
} from "./components/index";
import { HeaderBox, FooterBox } from "./layouts/index";

export default {
  name: "App",
  components: {
    HeaderBox,
    FooterBox,
    HelloWorld,
    InputComponent,
    TextAreaComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  height: 100vh;
  width: 100vw;
  margin: 0;
}
</style>
