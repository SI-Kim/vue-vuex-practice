<template>
  <Header />
  <hello-world />
  <input-component />
  <text-area-component />
  <Footer />
</template>

<script>
import {
  HelloWorld,
  InputComponent,
  TextAreaComponent,
} from "./components/index";
import { Header, Footer } from "./layouts/index";

export default {
  name: "App",
  components: {
    Header,
    Footer,
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
