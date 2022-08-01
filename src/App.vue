<template>
  <Header />
  <HelloWorld />
  <Footer />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { Header, Footer } from "./layouts/index";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    HelloWorld,
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
